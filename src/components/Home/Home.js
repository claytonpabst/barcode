import React, { Component } from 'react';
import Barcode from 'react-barcode';
import {QRCode} from 'react-qr-svg';
import QRReader from 'react-qr-reader';

import './Home.css';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 500,
      result: "No result",
      qrValue:"",
    };
  }

  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data
      });
    }
  }
  handleError = (err) => {
    console.error(err);
  }

  render() {
    return (
      <div className="home">
        <p>This Input will create a QR code that holds the string value typed out.</p>
        <input placeholder="Type Here" style={{width:"200px", height:"30px"}} onChange={(e) => this.setState({qrValue: e.target.value})}/>
        <QRCode
          style={{width:256}}
          value={this.state.qrValue}
        />
        <QRReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: 320, height: 240 }}
        />
        <p>{this.state.result}</p>
        <p>{this.state.result}</p>
        <p>{this.state.result}</p>
        <p>{this.state.result}</p>
        <p>{this.state.result}</p>
        <p>{this.state.result}</p>
        <p>{this.state.result}</p>
        <p>{this.state.result}</p>
        <p>{this.state.result}</p>
      </div>
    );
  }
}


export default Home;