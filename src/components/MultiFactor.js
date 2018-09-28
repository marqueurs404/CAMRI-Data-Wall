//Multi-Factor Model Page for CAMRI Data Wall
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Carousel } from 'antd';

import MainLayout from './MainLayout/MainLayout';
import MultiFactorGraph from './MultiFactorGraph/MultiFactorGraph';
import CarouselItem from './CarouselItem/CarouselItem';
class MultiFactor extends Component {
  render() {
    return (
      <MainLayout>
        <Helmet>
          <title>Multi Factor Model</title>
        </Helmet>
        <div style={{ background: '#ECECEC', padding: '20px', height: '10vh' }}>
          <h1>Multi Factor Model</h1>
        </div>

        {/* Carousel */}
        <Carousel
          autoplay
          autoplaySpeed={5000}
          draggable
          afterChange={this.onChange}>
          <CarouselItem>
            <MultiFactorGraph />
          </CarouselItem>
          <CarouselItem>
            <MultiFactorGraph />
          </CarouselItem>
          <CarouselItem>
            <MultiFactorGraph />
          </CarouselItem>
          <CarouselItem>
            <MultiFactorGraph />
          </CarouselItem>
        </Carousel>
      </MainLayout>
    );
  }
}

export default MultiFactor;
