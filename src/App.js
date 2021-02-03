import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import JobList from "./components/JobList";
import JobsDetails from "./components/JobsDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="home_container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/jobs-api">
              <JobList />
            </Route>
            <Route exact path="/jobs/:id">
              <JobsDetails />
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
