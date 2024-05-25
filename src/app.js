import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import AboutMe from './pages/aboutMe';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './pages/resume';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

