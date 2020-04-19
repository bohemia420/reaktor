import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Card, Accordion as Accordian } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from '../../utilities/Jumbotron';

class Dashboard extends Component {
  render() {
	return (
		<Card bg={ this.props.data.bg }>
		  <Card.Header>
			<Accordian.Toggle as={Card.Header} eventKey={this.props.data.key}>
        Dashboard to track your <b>{this.props.data.genre}</b> Interests
        	</Accordian.Toggle>
          </Card.Header>
          <Accordian.Collapse eventKey={this.props.data.key}>
		    <Card.Body>
		    	<Jumbotron data={this.props.data} />
		    </Card.Body>
		  </Accordian.Collapse>
		</Card>
	);
  }
}

export default Dashboard;