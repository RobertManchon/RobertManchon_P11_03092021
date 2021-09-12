import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../../index.css';
import {data} from '../../datas/data';
import Header from "../header/header";
import Footer from "../footer/footer";

import HomePage from "../../views/homepage/homepage";
import AboutPage from '../../views/aboutpage/aboutpage';
import ApartmentPage from "../../views/apartmentpage/apartmentpage";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
            <HomePage />
        </Route>
        <Route exact path="/apartment/:id" render={(props) => (
            <ApartmentPage {...props} apartments={data} />
            )}/>
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
