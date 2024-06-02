// React Router DOM is a library for handling routing in React applications. 
// It provides components like BrowserRouter, Route, Link, and Switch for defining routes 
// and rendering different components based on the current URL. React Router DOM enables 
// client-side routing, allowing users to navigate between different views within a single-page 
// application without full-page reloads.


// npm install react-router-dom

import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Redirect, Route, BrowserRouter as Router, Switch, useHistory, useLocation } from 'react-router-dom';

// Components
const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Contact = () => <h2>Contact</h2>;
const UserDetails = ({ match }) => <div>User ID: {match.params.userId}</div>;
const NotFound = () => <h2>404 Not Found</h2>;

// Navbar Component
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

// Programmatic Navigation Component
const MyComponent = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/new-page');
  };

  return <button onClick={handleClick}>Go to New Page</button>;
};

// Query Params Component
const QueryComponent = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  return <div>Query Param: {queryParams.get('paramName')}</div>;
};

// App Component
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/users/:userId" component={UserDetails} />
          <Route path="/query" component={QueryComponent} />
          <Route path="/old-page">
            <Redirect to="/new-page" />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));


