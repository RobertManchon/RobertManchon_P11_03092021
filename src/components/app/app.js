import React, { Component } from 'react'
import { BrowserRouter as Router, Switch,Route  } from 'react-router-dom'
import '../../index.css'
import { data } from '../../datas/data'
import Header from '../header/header'
import Footer from '../footer/footer'
import HomePage from '../../views/homepage/homepage'
import AboutPage from '../../views/aboutpage/aboutpage'
import ApartmentPage from '../../views/apartmentpage/apartmentpage'
import error404 from '../error404/error404'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route
              exact path='/apartment/:id' render={(props) => (
                <ApartmentPage {...props} apartments={data} />
              )}
            />
            <Route exact path='/About'>
              <AboutPage />
            {/*WIP 27-0 */}
            </Route>
            {/*<Route path='/*'>*/}
            {/*  <Error404 />*/}
            {/*</Route>*/}
            <Route component={error404} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
