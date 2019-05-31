import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { STATES } from 'mongoose';

class TodoList extends Component {

    state = {
        items: [
            { id: uuid(), name: 'create react app'},
            { id: uuid(), name: 'deploy to firebase'},
            { id: uuid(), name: 'push to github'},
            { id: uuid(), name: 'send email to xyz'}
        ]
    }

    render(){
        const { items } = this.state;
        
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

export default TodoList;

