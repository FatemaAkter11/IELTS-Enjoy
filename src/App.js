import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
