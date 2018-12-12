import React, { Component } from 'react';
import styled from 'styled-components';

class Dashboard extends Component {
  render() {
    return (
      <div className="App">
        <div>Overview</div>
        <div>Visitors</div>
        <div>Noise Level</div>
      </div>
    );
  }
}

export default Dashboard;

const Header = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
`;
const LoginBox = styled.div`
  width: 300px;
  margin-top: 70px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  border: solid 1px black;
`;

const BtnSubmit = styled.div`
  padding: 10px;
  width: 200px;
  color: white;
  background-color: blue;
  align-items: center;
`;
