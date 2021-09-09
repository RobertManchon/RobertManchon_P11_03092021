import React from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import '../../index.css';
import Header from "../header/header";
import Footer from "../footer/footer";

import HomePage from "../../views/homepage";
import AboutPage from '../../views/aboutpage'




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
						<AboutPage />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;