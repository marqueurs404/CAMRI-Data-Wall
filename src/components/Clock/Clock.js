import React, { Component } from 'react';
import { Card } from 'antd';
import Moment from 'react-moment';

let style = {
  textAlign: 'center',
  fontSize: '24px',
  fontWeight: 'bold',
  width: '100%',
  padding: '16px'
};

class Clock extends Component {
  state = {
    date: new Date()
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <Card>
        <Card.Grid style={style}>{this.props.country}</Card.Grid>
        <Card.Grid style={style}>
          <Moment format="HH:mm:ss" tz={this.props.tz}>
            {this.state.date}
          </Moment>
        </Card.Grid>
      </Card>
    );
  }
}

export default Clock;
