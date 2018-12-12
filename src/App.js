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
      <SetFont className="App">
        <Header>
          <div>
            <div style={{ color: 'white', fontWeight: 'bold' }}>Airlytics</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '15%' }}>
            {/* <div>About</div> */}
            <div style={{ color: 'white' }}>Explore</div>
          </div>
        </Header>

        {this.state.loggedIn ? <Dashboard /> : <Login onLogin={this.onLogin} />}
      </SetFont>
    );
  }
}

export default App;

const Header = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  border-bottom: solid 1px black;
  background-color: #3d69ab;
`;

const SetFont = styled.div`
  font-family: 'Proxima Soft', sans-serif;

  /* margin: -8px; */
  /* background-color: #f7f7f8; */
`;
