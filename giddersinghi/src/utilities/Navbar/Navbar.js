import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormControl, Button, Nav, Navbar as NavBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
	return (
	  <NavBar bg="primary" variant="dark">
	    <NavBar.Brand href="/">Home</NavBar.Brand>
	    <Nav className="mr-auto">
	      <Nav.Link href="/tracking">Watch</Nav.Link>
	      <Nav.Link href="/patterns">Recs</Nav.Link>
	      <Nav.Link href="/tutorials">Tutorials</Nav.Link>
	    </Nav>
	    <Form inline>
	      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
	      <Button variant="outline-light">Search</Button>
	    </Form>
	  </NavBar>
	);
}

export default Navbar;