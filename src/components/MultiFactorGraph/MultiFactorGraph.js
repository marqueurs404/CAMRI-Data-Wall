//Graph for Multi-Factor model
import React, { Component } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

import './MultiFactorGraph.css';

class MultiFactorGraph extends Component {
  render() {
    let data = [
      { date: '11/9/17', uv: 4000, pv: 2400, amt: 2400 },
      { date: '11/10/17', uv: 3000, pv: 1398, amt: 2210 },
      { date: '11/11/17', uv: 2000, pv: 9800, amt: 2290 },
      { date: '11/12/17', uv: 2780, pv: 3908, amt: 2000 },
      { date: '11/1/18', uv: 1890, pv: 4800, amt: 2181 },
      { date: '11/2/18', uv: 2390, pv: 3800, amt: 2500 },
      { date: '11/2/18', uv: 3390, pv: 3800, amt: 2500 },
      { date: '11/2/18', uv: 2390, pv: 3800, amt: 2500 },
      { date: '11/2/18', uv: 1390, pv: 3800, amt: 2500 },
      { date: '11/2/18', uv: 2690, pv: 3800, amt: 2500 },
      { date: '11/2/18', uv: 2190, pv: 3800, amt: 2500 },
      { date: '11/2/18', uv: 4390, pv: 3800, amt: 2500 },
      { date: '11/2/18', uv: 5390, pv: 3800, amt: 2500 },
      { date: '11/3/18', uv: 3490, pv: 4300, amt: 2100 }
    ];
    return (
      <AreaChart
        width={850}
        height={550}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    );
  }
}

export default MultiFactorGraph;
