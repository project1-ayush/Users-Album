import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UsersComponent from "./userscomponent";
import AlbumsComponent from "./albumscomponent";
import PhotosComponent from "./photoscomponent";

class ApplicationIndex extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <UsersComponent />
            </Route>

            <Route exact path="/albumscomponent/:id">
              <AlbumsComponent />
            </Route>
            <Route exact path="/photoscomponent/:idd">
              <PhotosComponent />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default ApplicationIndex;
