import React from 'react';
import ReactDOM from 'react-dom';
import { CardGroup, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomeCardsGroup() {
	return (
		<>
		<CardGroup>
		  <Card bg="secondary" border="primary">
		    <Card.Img variant="top" src="../../../gidder192.png" />
		    <Card.Header>Watch Your Stocks</Card.Header>
		    <Card.Body>
		      <Card.Text>
		        This is a wider card with supporting text below as a natural lead-in to
		        additional content. This content is a little bit longer.
		      </Card.Text>
		    </Card.Body>
		    <Card.Footer>
		      <small className="text-muted">Last updated 3 mins ago</small>
		    </Card.Footer>
		  </Card>
		  <Card bg="info" border="warning"> 
		    <Card.Img variant="top" src="../../../gidder192.png" />
		    <Card.Header>Recommendations - sprint & marathon</Card.Header>
		    <Card.Body>
		      <Card.Text>
		        This card has supporting text below as a natural lead-in to additional
		        content.{' '}
		      </Card.Text>
		    </Card.Body>
		    <Card.Footer>
		      <small className="text-muted">Last updated 3 mins ago</small>
		    </Card.Footer>
		  </Card>
		  <Card bg="light" border="dark">
		    <Card.Img variant="top" src="../../../gidder192.png" />
		    <Card.Header>Learn it Up!</Card.Header>
		    <Card.Body>
		      <Card.Text>
		        This is a wider card with supporting text below as a natural lead-in to
		        additional content. This card has even longer content than the first to
		        show that equal height action.
		      </Card.Text>
		    </Card.Body>
		    <Card.Footer>
		      <small className="text-muted">Last updated 3 mins ago</small>
		    </Card.Footer>
		  </Card>
		</CardGroup>
		</>
	);
}

export default HomeCardsGroup;