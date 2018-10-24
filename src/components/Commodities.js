//Commodities Page for CAMRI Data Wall
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Col, Row, Carousel } from 'antd';

import MainLayout from './MainLayout/MainLayout';
import Clock from './Clock/Clock';
import CarouselItem from './CarouselItem/CarouselItem';
import CommodityTab from './CommodityTab/CommodityTab';

import './Commodities.css';

class Commodities extends Component {
  onChange(a, b, c) {
    console.log(a, b, c);
  }

  render() {
    return (
      <MainLayout>
        <Helmet>
          <title>Commodities</title>
        </Helmet>
        {/* Clocks */}
        <div style={{ background: '#ECECEC', padding: '20px', height: '24vh' }}>
          <Row gutter={16}>
            <Col span={3}>
              <Clock country="London" tz="Europe/London" />
            </Col>
            <Col span={3}>
              <Clock country="Mumbai" tz="Asia/Kolkata" />
            </Col>
            <Col span={3}>
              <Clock country="Singapore" tz="Asia/Singapore" />
            </Col>
            <Col span={3}>
              <Clock country="Tokyo" tz="Asia/Tokyo" />
            </Col>
            <Col span={3}>
              <Clock country="New York" tz="America/New_York" />
            </Col>
          </Row>
        </div>
        {/* Carousel */}
        <Carousel
          autoplay
          autoplaySpeed={5000}
          draggable
          afterChange={this.onChange}>
          <CarouselItem>
            <CommodityTab />
          </CarouselItem>
          <CarouselItem>
            <h3>Hello 2</h3>
          </CarouselItem>
          <CarouselItem>
            <h3>Hello 3</h3>
          </CarouselItem>
          <CarouselItem>
            <h3>Hello 4</h3>
          </CarouselItem>
        </Carousel>
      </MainLayout>
    );
  }
}

export default Commodities;
