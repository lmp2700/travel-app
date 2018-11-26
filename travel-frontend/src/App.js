import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Containers/DashboardContainer/NavContainer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
