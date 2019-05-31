import React, { Component } from 'react';
import { Button, Media, ListGroup, ListGroupItem } from 'reactstrap';

class Footer extends Component {
    render() {
    return (
      <Media>
        <Media left href="#">
        </Media>
        <Media  style={{marginTop: '2rem', marginLeft: '1rem', marginRight: '1rem'}} body>
          <Media heading>
            Description:
          </Media>
          This is a simple React Todo App that uses Node.js for the backend and MongoDB as database. The features are listed below.
          <ListGroup style={{marginTop: '1rem'}}>
            <ListGroupItem>
                <Button
                    className="remove-btn"
                    color="info"
                    size="sm"
                >&forall;</Button>Show all tasks
            </ListGroupItem>
            <ListGroupItem>
                <Button
                    className="remove-btn"
                    color="success"
                    size="sm"
                >&#43;</Button>Add a new task
            </ListGroupItem>
            <ListGroupItem>
                <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                >&times;</Button>Delete a task
            </ListGroupItem>
         </ListGroup>
        </Media>
      </Media>
    );
  }
}

export default Footer;