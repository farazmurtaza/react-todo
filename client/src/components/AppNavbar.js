import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    Container
} from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
            <Navbar color="light" light expand="sm" className="mb-4">
                <Container>
                    <NavbarBrand href="/">Todo List</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/farazmurtaza/react-todo">Github</NavLink>
                            </NavItem> 
                            <NavItem>
                                <NavLink href="https://linkedin.com/in/farazmurtaza">LinkedIn</NavLink>
                            </NavItem>    
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        );
        
    }
}

export default AppNavbar;