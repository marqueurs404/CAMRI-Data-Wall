import React, { Component } from 'react';
import { Card } from 'antd';
import Moment from 'react-moment';

const styles = {
  shortCardStyle: {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    width: '100%',
    padding: '12px'
  },
  tallCardStyle: {
    textAlign: 'center',
    fontSize: '36px',
    fontWeight: 'bold',
    width: '100%',
    padding: '16px'
  },
  headerStyle: {
    background: '#455c93',
    color: 'white'
  },
  bodyStyle: {
    background: '#34383b',
    color: 'white'
  },
  tallClockStyle: {
    marginTop: '2vh'
  },
  shortClockStyle: {
    marginTop: '1vh'
  }
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
    let isTall = window.matchMedia('(min-height: 1000px)').matches;

    return (
      <Card
        style={{
          ...(isTall ? styles.tallClockStyle : styles.shortClockStyle)
        }}>
        <Card.Grid
          style={{
            ...(isTall ? styles.tallCardStyle : styles.shortCardStyle),
            ...styles.headerStyle
          }}>
          {this.props.country}
        </Card.Grid>
        <Card.Grid
          style={{
            ...(isTall ? styles.tallCardStyle : styles.shortCardStyle),
            ...styles.bodyStyle
          }}>
          <Moment format="HH:mm" tz={this.props.tz}>
            {this.state.date}
          </Moment>
        </Card.Grid>
      </Card>
    );
  }
}

export default Clock;
