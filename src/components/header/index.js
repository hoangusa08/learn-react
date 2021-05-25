import React from 'react'
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
export default function index() {
    return (
        <Navbar bg="light" expand="lg">
            <Link to="/" className="nav-brand">LEARN</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <div id="basic-navbar-nav" className="navbar-collapse">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/counter"  className="nav-link">Counter</Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </div>
        </Navbar>
    )
}
