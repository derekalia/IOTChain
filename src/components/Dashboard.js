import React, { Component } from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Hour 1', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Hour 2', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Hour 3', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Hour 4', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Hour 5', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Hour 6', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Hour 7', uv: 3490, pv: 4300, amt: 2100 }
];

class Dashboard extends Component {
  render() {
    return (
      <Holder>
        <div>
          <div style={{ textAlign: 'left', marginTop: '30px', marginBottom: '10px' }}>Overview</div>
          <Overview>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '50px', marginBottom: '10px' }}>3</div>
              <div>Visitors</div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: '20px',
                marginRight: '20px'
              }}
            >
              <div style={{ fontSize: '50px', marginBottom: '10px' }}>23</div>
              <div>Noise(db)</div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: '20px',
                marginRight: '20px'
              }}
            >
              <div style={{ fontSize: '50px', marginBottom: '10px' }}>Low</div>
              <div>Smoke level</div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: '20px',
                marginRight: '20px'
              }}
            >
              <div style={{ fontSize: '50px', marginBottom: '10px' }}>0</div>
              <div>Bikes Used</div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: '20px',
                marginRight: '20px'
              }}
            >
              <div style={{ fontSize: '50px', marginBottom: '10px' }}>23</div>
              <div>Checkout(hr)</div>
            </div>
          </Overview>
        </div>
        <div style={{ display: 'flex' }}>
          <div>
            <GraphTitle> Visitors</GraphTitle>
            <div>
              <LineChart width={400} height={150} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                {/* <YAxis /> */}
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                {/* <Legend /> */}
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
              </LineChart>
            </div>
          </div>
          <div>
            <GraphTitle> Noise</GraphTitle>
            <div>
              <LineChart width={400} height={150} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                {/* <YAxis /> */}
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                {/* <Legend /> */}
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
              </LineChart>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div>
            <GraphTitle> Power consumption</GraphTitle>
            <div>
              <LineChart width={400} height={150} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                {/* <YAxis /> */}
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                {/* <Legend /> */}
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
              </LineChart>
            </div>
          </div>
          <div>
            <GraphTitle> Smoke Detector</GraphTitle>
            <div>
              <LineChart width={400} height={150} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                {/* <YAxis /> */}
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                {/* <Legend /> */}
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
              </LineChart>
            </div>
          </div>
        </div>
      </Holder>
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

const Overview = styled.div`
  display: flex;
  padding: 20px;
  box-shadow: 0 0.125rem 0.9375rem 0 rgba(0, 0, 0, 0.1);
  justify-content: center;
  /* width: 520px; */
  /* border: solid 1px black; */
  border-radius: 9px;
`;
const Holder = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const GraphTitle = styled.div`
  margin-top: 40px;
  margin-bottom: 10px;
  text-align: left;
  margin-left: 22px;
  font-size: 20px;
  font-weight: bold;
`;
