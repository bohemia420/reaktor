import React from 'react';
import ReactDOM from 'react-dom';
import { TrackingAlert } from '../../utilities/Alerts';
import { DashboardsAccordion } from '../../utilities/Accordion';

function Tracking() {
	return (
	<div>
		<TrackingAlert />
		<DashboardsAccordion />
	</div>
	);
}

export default Tracking;