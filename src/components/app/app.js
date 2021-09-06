import React from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import '../../index.css';
import Header from "../header/header";
import Footer from "../footer/footer";

import HomePage from "../../views/homepage";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route exact path='/'>
						<HomePage />
					</Route>
					<Route exact path='/About'>
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;