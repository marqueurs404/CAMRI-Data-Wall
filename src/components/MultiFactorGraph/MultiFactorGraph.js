//Graph for Multi-Factor model
import React, { Component } from 'react';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryTooltip,
  VictoryAxis
} from 'victory';

import './MultiFactorGraph.css';

class MultiFactorGraph extends Component {
  render() {
    const data = [
      { date: '11/9/17', price: 4000, label: 4000, type: 'profitability' },
      { date: '11/10/17', price: 3000, label: 3000, type: 'profitability' },
      { date: '11/11/17', price: 2000, label: 2000, type: 'profitability' },
      { date: '11/12/17', price: 2780, label: 2780, type: 'profitability' },
      { date: '11/1/18', price: 1890, label: 1890, type: 'profitability' },
      { date: '11/2/18', price: 2390, label: 2390, type: 'profitability' },
      { date: '11/3/18', price: 3390, label: 3390, type: 'profitability' },
      { date: '11/4/18', price: 2390, label: 2390, type: 'profitability' },
      { date: '11/5/18', price: 1390, label: 1390, type: 'profitability' },
      { date: '11/6/18', price: 2690, label: 2690, type: 'profitability' },
      { date: '11/7/18', price: 2190, label: 2190, type: 'profitability' },
      { date: '11/8/18', price: 4390, label: 4390, type: 'profitability' },
      { date: '11/9/18', price: 5390, label: 5390, type: 'profitability' },
      { date: '11/10/18', price: 3490, label: 3490, type: 'profitability' }
    ];
    return (
      <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={['11/9/17', '11/12/17', '11/3/18', '11/6/18', '11/9/18']}
          tickFormat={['Q3/17', 'Q4/17', 'Q1/18', 'Q2/18', 'Q3/18']}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={x => `$${x}`}
        />
        <VictoryBar
          labelComponent={<VictoryTooltip activateData={true} />}
          data={data}
          x="date"
          y="price"
        />
      </VictoryChart>
    );
  }
}

export default MultiFactorGraph;
