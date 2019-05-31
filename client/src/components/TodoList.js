import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';

import { STATES } from 'mongoose'; //idk how this got here

class TodoList extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    render(){
        const { items } = this.props.item;
        
        return(
            <Container>
                <Button
                    color = "light"
                    style = {{marginBottom: '2rem'}}
                    onClick = { () => {
                        const name = prompt('New Todo');
                        if(name){
                            this.setState(state => ({
                                items: [...state.items, { id: uuid(), name: name }]
                            }));
                        }
                    }}
                >Add</Button>

                <ListGroup>
                    <TransitionGroup>
                        {items.map(({ id, name })=>(
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={()=>{
                                            this.setState(state => ({
                                                items: state.items.filter(item => item.id != id)
                                            }));
                                        }}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>

            </Container>
        );
        
    }

}

TodoList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = ( state ) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems })(TodoList);

