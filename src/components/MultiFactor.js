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
    return (
      <MainLayout>
        <Helmet>
          <title>Multi Factor Model</title>
        </Helmet>
        <div
          style={{
            background: '#ECECEC',
            padding: '20px',
            height: '10vh'
          }}>
          <h1>Multi Factor Model</h1>
        </div>

        {/* Carousel */}
        <Carousel
          autoplay
          autoplaySpeed={5000}
          draggable
          dots={false}
          afterChange={this.onChange}>
          <CarouselItem>
            <MultiFactorGraph title="Profitability" />
          </CarouselItem>
          <CarouselItem>
            <MultiFactorGraph title="BSE" />
          </CarouselItem>
          <CarouselItem>
            <MultiFactorGraph title="Valuation" />
          </CarouselItem>
          <CarouselItem>
            <MultiFactorGraph title="ERM" />
          </CarouselItem>
          <CarouselItem>
            <MultiFactorGraph title="LNS" />
          </CarouselItem>
          <CarouselItem>
            <MultiFactorGraph title="CAM" />
          </CarouselItem>
        </Carousel>
      </MainLayout>
    );
  }
}

export default MultiFactor;
