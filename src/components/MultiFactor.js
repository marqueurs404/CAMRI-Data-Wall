//Multi-Factor Model Page for CAMRI Data Wall
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Carousel } from 'antd';

import MainLayout from './MainLayout/MainLayout';
import MultiFactorGraph from './MultiFactorGraph/MultiFactorGraph';
import CarouselItem from './CarouselItem/CarouselItem';

// import './MultiFactor.css';
class MultiFactor extends Component {
  render() {
    const data = [
      { date: '11/9/17', price: 4000, type: 'profitability' },
      { date: '11/10/17', price: 3000, type: 'profitability' },
      { date: '11/11/17', price: 2000, type: 'profitability' },
      { date: '11/12/17', price: 2780, type: 'profitability' },
      { date: '11/1/18', price: 1890, type: 'profitability' },
      { date: '11/2/18', price: 2390, type: 'profitability' },
      { date: '11/3/18', price: 3390, type: 'profitability' },
      { date: '11/4/18', price: 2390, type: 'profitability' },
      { date: '11/5/18', price: 1390, type: 'profitability' },
      { date: '11/6/18', price: 2690, type: 'profitability' },
      { date: '11/7/18', price: 2190, type: 'profitability' },
      { date: '11/8/18', price: 4390, type: 'profitability' },
      { date: '11/9/18', price: 5390, type: 'profitability' },
      { date: '11/10/18', price: 7490, type: 'profitability' },
      { date: '11/11/18', price: 8490, type: 'profitability' },
      { date: '11/12/18', price: 11490, type: 'profitability' },
      { date: '11/1/19', price: 15590, type: 'profitability' },
      { date: '11/2/19', price: 20990, type: 'profitability' },
      { date: '11/3/19', price: 17990, type: 'profitability' },
      { date: '11/9/17', price: 5690, type: 'CAM' },
      { date: '11/10/17', price: 3690, type: 'CAM' },
      { date: '11/11/17', price: 2690, type: 'CAM' },
      { date: '11/12/17', price: 1690, type: 'CAM' },
      { date: '11/1/18', price: 6690, type: 'CAM' },
      { date: '11/2/18', price: 7690, type: 'CAM' },
      { date: '11/3/18', price: 8690, type: 'CAM' },
      { date: '11/4/18', price: 9690, type: 'CAM' },
      { date: '11/5/18', price: 11490, type: 'CAM' },
      { date: '11/6/18', price: 13690, type: 'CAM' },
      { date: '11/7/18', price: 14690, type: 'CAM' },
      { date: '11/8/18', price: 16690, type: 'CAM' },
      { date: '11/9/18', price: 13690, type: 'CAM' },
      { date: '11/10/18', price: 17690, type: 'CAM' },
      { date: '11/11/18', price: 1990, type: 'CAM' },
      { date: '11/12/18', price: 21690, type: 'CAM' },
      { date: '11/1/19', price: 17690, type: 'CAM' },
      { date: '11/2/19', price: 25690, type: 'CAM' },
      { date: '11/3/19', price: 19690, type: 'CAM' }
    ];

    let carouselItems = [
      {
        stroke: 'yellow',
        fill: 'yellow',
        title: 'Profitability',
        data: data.filter(e => e.type === 'profitability')
      },
      {
        stroke: 'cyan',
        fill: 'cyan',
        title: 'CAM',
        data: data.filter(e => e.type === 'CAM')
      },
      {
        stroke: 'lightgreen',
        fill: 'lightgreen',
        title: 'Valuation',
        data: data.filter(e => e.type === 'profitability')
      },
      {
        stroke: 'white',
        fill: 'white',
        title: 'BSE',
        data: data.filter(e => e.type === 'profitability')
      },
      {
        stroke: 'red',
        fill: 'red',
        title: 'UFR',
        data: data.filter(e => e.type === 'profitability')
      },
      {
        stroke: 'violet',
        fill: 'violet',
        title: 'LNS',
        data: data.filter(e => e.type === 'profitability')
      }
    ];

    carouselItems = carouselItems.map(e => {
      return (
        <CarouselItem key={e.title}>
          <MultiFactorGraph
            stroke={e.stroke}
            fill={e.fill}
            data={e.data}
            title={e.title}
          />
        </CarouselItem>
      );
    });

    return (
      <MainLayout>
        <Helmet>
          <title>Multi Factor Model</title>
        </Helmet>
        <div style={{ background: '#ECECEC', padding: '20px', height: '80px' }}>
          <h1>Multi Factor Model</h1>
        </div>

        <Carousel
          autoplay
          autoplaySpeed={5000}
          draggable
          dots={false}
          afterChange={this.onChange}>
          {carouselItems}
        </Carousel>
      </MainLayout>
    );
  }
}

export default MultiFactor;
