import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import '../../index.css';
import Header from "../header/header";
import Footer from "../footer/footer";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
