

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import Comitee from './pages/Comitet';
import { Diplome } from './pages/Diplome';
import {IS}  from './pages/InvitedSpeakers';
import { Sections } from './pages/Sections';
import Sponsorii from './pages/Sponsors';
import {Home1} from './pages/Home';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        <Switch>
          <Route path="/comitet">
          <Comitee/>
          </Route>
          <Route path="/sponsori">
          <Sponsorii/>
          </Route>
          <Route path="/diplome">
          <Diplome/>
          </Route>
          <Route path="/invitedSpeakers">
          <IS/>
          </Route>
          <Route path="/sectiuni">
          <Sections/>
          </Route>
          <Route path="/">
            <Home1 />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}
