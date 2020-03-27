import React, { Component } from 'react';
import { render } from 'react-dom';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { ResponsiveContainer, Line, LineChart, Tooltip, Legend, YAxis, XAxis, CartesianGrid } from 'recharts';

export default class Chart extends Component {
  constructor() {
    super();
    this.state = {
      rechartData: [
        {name: 'Day 1', Interest: 3, Depressed: 4, Sleep: 3, Energy:4, Appetite: 5},
        {name: 'Day 2', Interest: 6, Depressed: 6, Sleep: 5, Energy:7, Appetite: 3},
        {name: 'Day 3', Interest: 3, Depressed: 5, Sleep: 4, Energy:2, Appetite: 3},
        {name: 'Day 4', Interest: 2, Depressed: 2, Sleep: 4, Energy:1, Appetite: 4},
        {name: 'Day 5', Interest: 2, Depressed: 1, Sleep: 5, Energy:5, Appetite: 3},
        {name: 'Day 6', Interest: 5, Depressed: 2, Sleep: 3, Energy:1, Appetite: 5},
        {name: 'Day 7', Interest: 1, Depressed: 3, Sleep: 1, Energy:5, Appetite: 3},
      ],
      isActive: false,
      interest: true,
      sadness: true,
      sleep: true,
      energy: true,
      appetite: true

    };
  }

  handleChange = event => {
    console.log(event.target.name)
    this.setState({
      [event.target.name]: !this.state.interest,
      [event.target.name]: !this.state.sadness,
      sleep: !this.state.sadness,
      energy:!this.state.energy,
      appetite: !this.state.appetite
    });
  };

  onMouseDownHandler = (event, type) => {
    console.info(type, event)
    this.setState({ isActive: type })
  };

  onMouseUpHandler = () => this.setState({ isActive: false });

  onMouseMoveHandler = event => {
    if (!this.state.isActive) return;

    console.warn(event)
  }

  createLine = (type, colour) => (
    <Line 
      activeDot={{ 
        // onMouseUp: this.onMouseUpHandler,
        onMouseDown: event => this.onMouseDownHandler(type, event)
      }}
      type="natural" 
      dataKey={type} 
      stroke={colour} />
  )

  render() {
    const interest = this.state.interest ? this.createLine('Interest', 'green') : null 
    const sadness = this.state.sadness ? this.createLine('Sadness', 'black') : null 
    
    return (
      <>
      <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={this.state.interest} onChange={this.handleChange} name="interest" />}
        label="Interest"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={this.state.sadness}
            onChange={this.handleChange}
            name="sadness"
            color="primary"
          />
        }
        label="Sadness"
      />
      </FormGroup>
      
      <>
      <ResponsiveContainer height={'100%'} width={'100%'}>
        <LineChart data={this.state.rechartData}
          onMouseUp={this.onMouseUpHandler}
          onMouseMove={this.onMouseMoveHandler}
          margin={{ top: 2, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {interest}
            {sadness}
            {/* {this.createLine('Interest', 'green')} */}
            {/* {this.createLine('Sadness', 'black')} */}
            {this.createLine('Sleep', 'purple')}
            {this.createLine('Energy', 'red')}
            {this.createLine('Appetite', 'magenta')}
            
          </LineChart>
      </ResponsiveContainer>
      </>
      </>
    );
  }
}
