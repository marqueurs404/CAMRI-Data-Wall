//Graph for Multi-Factor model
import React, { Component } from 'react';
import {
  VictoryArea,
  VictoryChart,
  VictoryTheme,
  VictoryTooltip,
  VictoryAxis,
  VictoryVoronoiContainer,
  VictoryLabel
} from 'victory';

import './MultiFactorGraph.css';

const styles = {
  whiteStyle: {
    axis: { stroke: 'white' },
    axisLabel: { fontSize: 20, padding: 30, fill: 'white' },
    ticks: { stroke: 'white', size: 5 },
    tickLabels: { fontSize: 15, padding: 0, fill: 'white' }
  },
  title: {
    textAnchor: 'start',
    verticalAnchor: 'end',
    fill: 'white',
    fontFamily: 'inherit',
    fontSize: '24px',
    fontWeight: 'bold'
  }
};

class MultiFactorGraph extends Component {
  state = { width: 0, height: 0 };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener(
      'resize',
      this.updateWindowDimensions.bind(this)
    );
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const data = this.props.data;

    //convert date to quarterly values
    let tickValues = [];
    let tickFormat = [];
    data.forEach(element => {
      let dateParts = element.date.split('/');
      let month = dateParts[1];
      let quarters = ['3', '6', '9', '12'];
      if (quarters.indexOf(month) !== -1) {
        tickValues.push(element.date);
        let tickFormatVal = `Q${month / 3}/${dateParts[2]}`;
        tickFormat.push(tickFormatVal);
      }
    });

    return (
      <VictoryChart
        width={1250}
        height={this.state.height}
        domainPadding={{ y: 10 }}
        containerComponent={<VictoryVoronoiContainer />}>
        <VictoryAxis
          tickValues={tickValues}
          tickFormat={tickFormat}
          style={styles.whiteStyle}
        />

        <VictoryAxis
          dependentAxis
          tickFormat={x => `$${x}`}
          style={styles.whiteStyle}
        />

        <VictoryArea
          labels={d => `Price: $${d.price} \n Date: ${d.date}`}
          labelComponent={
            <VictoryTooltip cornerRadius={0} flyoutStyle={{ fill: 'white' }} />
          }
          data={data}
          x="date"
          y="price"
          style={{
            data: {
              strokeWidth: 3,
              fillOpacity: 0.7,
              fill: this.props.fill,
              stroke: this.props.stroke
            }
          }}
        />
        <VictoryLabel
          x={0}
          y={32}
          style={styles.title}
          text={this.props.title}
        />
      </VictoryChart>
    );
  }
}

export default MultiFactorGraph;
