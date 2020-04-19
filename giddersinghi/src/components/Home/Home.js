import React from 'react';
import ReactDOM from 'react-dom';
import { WelcomeAlert } from '../../utilities/Alerts';
import { HomeCardsGroup } from '../../utilities/Cards';

function Home() {
	return (
	<div>
		<WelcomeAlert />
		<HomeCardsGroup />
	</div>
	);
}

export default Home;
