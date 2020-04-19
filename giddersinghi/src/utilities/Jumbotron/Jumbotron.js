import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Jumbotron  as Jumbo } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Search } from '../../utilities/Search';

class Jumbotron extends Component {
	render() {
		return (
			<div>
				<Search />
				<Jumbo style={{backgroundColor: this.props.data.jumbg }}>
				</Jumbo>
			</div>
		);
	}
}

export default Jumbotron;