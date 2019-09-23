import React from "react";
import {BrowserRouter as Router,Route}  from "react-router-dom"
import { withRouter } from "react-router";
import Home from "./Home";
import MyNav from "./MyNav";
import Footer from "./Footer";
import SingleMovie from "./SingleMovie"
import AddComments from "./AddComments";

class MainPage extends React.Component {
    state = {  }
    render() { 
        var RoutedNavigation = withRouter(MyNav);
        return (
            <Router>
              <RoutedNavigation/>
              <Route path="/" exact component={Home} />
              <Route path="/SingleMovie/:_id" exact component={SingleMovie} />
              <Route path="/AddComments/:_id" exact component={AddComments} />
               <Route path="/" exact component={Footer} />
              </Router>
          );
    }
}
 
export default MainPage;
