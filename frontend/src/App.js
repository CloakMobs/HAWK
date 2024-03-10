import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Filings from './pages/Filings';
import Institutions from './pages/Institutions';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/filings" component={Filings} />
          <Route path="/institutions" component={Institutions} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;