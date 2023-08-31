import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing all the themes
import ThemeOne from "../themes/theme-one";
import BlogDetails from '../components/blogSection/blogDetails';

class MyRouts extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={ThemeOne} /> 
            <Route path="/blogSection/:id" component={BlogDetails} /> {/* Dynamic route */}           
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MyRouts;