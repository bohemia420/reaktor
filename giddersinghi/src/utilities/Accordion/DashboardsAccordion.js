import React from 'react';
import ReactDOM from 'react-dom';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dashboard } from '../Dashboard';

function DashboardsSAccordion() {
	return (
		<Accordion defaultActiveKey="0">
			<Dashboard data={{'bg': 'info', 'jumbg': '#89c4e8', 'genre':'present','key':'0'}}/>
			<Dashboard data={{'bg': 'secondary', 'jumbg': '#436a7d', 'genre':'future','key':'1'}}/>
			<Dashboard data={{'bg': 'light', 'jumbg': '#e9eff2', 'genre':'past','key':'2'}}/>
		</Accordion>
	);
}

export default DashboardsSAccordion;