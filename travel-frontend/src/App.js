import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Containers/DashboardContainer/Dashboard'
import NavBar from './Containers/DashboardContainer/NavContainer'
import TripDetails from './Containers/TripsContainer/TripDetailContainer'
import LoginContainer from './Containers/AuthContainer/LoginContainer'
import RegisterContainer from './Containers/AuthContainer/RegisterContainer'
import TripCreate from './Containers/TripsContainer/TripCreateContainer'
import UserEdit from './Containers/UserContainer/UserEditContainer'
import TripEdit from './Containers/TripsContainer/TripEditContainer'
import UserMain from './Containers/UserContainer/UserMainContainer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/trip/:id" component={TripDetails} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/register" component={RegisterContainer} />
            <Route path="/create" component={TripCreate} />
            <Route path="/user" component={UserMain} />
            <Route path="/user/edit" component={UserEdit} />
            <Route path="/edit" component={TripEdit} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
