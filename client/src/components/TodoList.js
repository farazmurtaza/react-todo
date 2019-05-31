import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

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
            </Container>
        );
        
    }

}

export default TodoList;

