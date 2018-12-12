import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
class App extends Component {
  state = {
    loggedIn: false
  };

  onLogin = () => {
    this.setState({ loggedIn: true });
  };

  render() {
    return (
      <div className="App">
        <Header>
          <div>
            <div>Airlytics</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '15%' }}>
            <div>About</div>
            <div>Explore</div>
          </div>
        </Header>

        {this.state.loggedIn ? <Dashboard /> : <Login onLogin={this.onLogin} />}
      </div>
    );
  }
}

export default App;

const Header = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
`;
