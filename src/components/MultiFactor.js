//Multi-Factor Model Page for CAMRI Data Wall
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Carousel } from 'antd';

import MainLayout from './MainLayout/MainLayout';
import MultiFactorGraph from './MultiFactorGraph/MultiFactorGraph';
import CarouselItem from './CarouselItem/CarouselItem';
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
      { date: '11/3/19', price: 17990, type: 'profitability' }
    ];

    return (
      <MainLayout>
        <Helmet>
          <title>Multi Factor Model</title>
        </Helmet>
        <div style={{ background: '#ECECEC', padding: '20px', height: '80px' }}>
          <h1>Multi Factor Model</h1>
        </div>

        {/* Carousel */}
        <Carousel
          autoplay
          autoplaySpeed={5000}
          draggable
          afterChange={this.onChange}>
          <CarouselItem>
            <MultiFactorGraph
              stroke="yellow"
              fill="yellow"
              data={data}
              title="Profitability"
            />
          </CarouselItem>
          <CarouselItem>
            <MultiFactorGraph
              stroke="cyan"
              fill="cyan"
              data={data}
              title="CAM"
            />
          </CarouselItem>
          <CarouselItem>
            <MultiFactorGraph
              stroke="lightgreen"
              fill="lightgreen"
              data={data}
              title="Valuation"
            />
          </CarouselItem>
          <CarouselItem>
            <MultiFactorGraph
              stroke="white"
              fill="white"
              data={data}
              title="BSE"
            />
          </CarouselItem>
          <CarouselItem>
            <MultiFactorGraph stroke="red" fill="red" data={data} title="UFR" />
          </CarouselItem>
          <CarouselItem>
            <MultiFactorGraph
              stroke="violet"
              fill="violet"
              data={data}
              title="LNS"
            />
          </CarouselItem>
        </Carousel>
      </MainLayout>
    );
  }
}

export default MultiFactor;
