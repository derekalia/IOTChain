import React, { Component } from 'react';
import styled from 'styled-components';

class Login extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <LoginBox>
            <div style={{ fontSize: '18px', marginBottom: '20px' }}>Login</div>

            <div style={{ textAlign: 'left', fontSize: '16px', marginBottom: '5px' }}>Username</div>
            <InputStyle type="text" />
            <div style={{ textAlign: 'left', fontSize: '16px', marginBottom: '5px' }}>Password</div>
            <InputStyle type="password" />

            <BtnSubmit onClick={this.props.onLogin}>Submit</BtnSubmit>
          </LoginBox>
        </div>
      </div>
    );
  }
}

export default Login;

const LoginBox = styled.div`
  width: 300px;
  margin-top: 70px;
  display: flex;
  padding: 20px;
  box-shadow: 0 0.125rem 0.9375rem 0 rgba(0, 0, 0, 0.1);

  align-content: center;
  justify-content: center;
  flex-direction: column;
  /* border: solid 1px black; */
  border-radius: 9px;
`;

const BtnSubmit = styled.div`
  padding: 10px;
  width: 100px;
  color: white;
  background-color: #2980b9;
  border-radius: 6px;
  align-items: center;
  margin-left: 85px;
  margin-top: 20px;
`;

const InputStyle = styled.input`
  font-size: 16px;
  margin-bottom: 20px;
  width: 200px;
`;
