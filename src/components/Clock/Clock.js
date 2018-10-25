import React, { Component } from 'react';
import { Card } from 'antd';
import Moment from 'react-moment';

const styles = {
  cardStyle: {
    textAlign: 'center',
    fontSize: '24px',
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
    return (
      <Card>
        <Card.Grid style={{ ...styles.cardStyle, ...styles.headerStyle }}>
          {this.props.country}
        </Card.Grid>
        <Card.Grid style={{ ...styles.cardStyle, ...styles.bodyStyle }}>
          <Moment format="HH:mm:ss" tz={this.props.tz}>
            {this.state.date}
          </Moment>
        </Card.Grid>
      </Card>
    );
  }
}

export default Clock;
