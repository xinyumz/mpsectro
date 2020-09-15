import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function App() {
	return (
		<div>
			<Switch>
				<Route path="/" component={FrontPage} exact />
			</Switch>
		</div>
	);
}


function FrontPage() {
	return (
		<div>
			<Helmet>
				<title>Simple MassSpec Calculation</title>
			</Helmet>
			<div class="page">	
			</div>
		</div>
	)
}


export default App;
