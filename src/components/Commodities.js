//Commodities Page for CAMRI Data Wall
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Col, Row, Carousel } from 'antd';

import MainLayout from './MainLayout/MainLayout';
import Clock from './Clock/Clock';
import CarouselItem from './CarouselItem/CarouselItem';
import CommodityTab from './CommodityTab/CommodityTab';

import StockImage from '../assets/others.png';
import BalticImage from '../assets/Baltic.png';
import GoldImage from '../assets/gold.png';
import WheatImage from '../assets/wheat.png';
import OilImage from '../assets/oil.png';

class Commodities extends Component {
  onChange(a, b, c) {
    console.log(a, b, c);
  }

  render() {
    let commodityData = [
      {
        title: 'Straits Times Index',
        currentPrice: 700.55,
        previousPrice: 100,
        date: '10/09/18',
        image: StockImage
      },
      {
        title: 'S&P500',
        currentPrice: 1200.51,
        previousPrice: 100,
        date: '10/09/18',
        image: StockImage
      },
      {
        title: 'Gold',
        currentPrice: 1900.77,
        previousPrice: 100,
        date: '10/09/18',
        image: GoldImage
      },
      {
        title: 'Wheat',
        currentPrice: 1400.01,
        previousPrice: 100,
        date: '10/09/18',
        image: WheatImage
      },
      {
        title: 'Crude Oil',
        currentPrice: 1100.99,
        previousPrice: 100,
        date: '10/09/18',
        image: OilImage
      },
      {
        title: 'Baltic Dry Index',
        currentPrice: 1500.12,
        previousPrice: 100,
        date: '10/09/18',
        image: BalticImage
      }
    ];

    let clocks = [
      { country: 'London', tz: 'Europe/London' },
      { country: 'Mumbai', tz: 'Asia/Kolkata' },
      { country: 'Singapore', tz: 'Asia/Singapore' },
      { country: 'Tokyo', tz: 'Asia/Tokyo' },
      { country: 'New York', tz: 'America/New_York' }
    ];

    // Commodity data
    commodityData = commodityData.map(element => {
      return (
        <CarouselItem key={element.title}>
          <CommodityTab
            title={element.title}
            currentPrice={element.currentPrice}
            previousPrice={element.previousPrice}
            date={element.date}
            image={element.image}
          />
        </CarouselItem>
      );
    });

    // Clocks
    clocks = clocks.map(element => {
      return (
        <Col span={3} key={element.country}>
          <Clock country={element.country} tz={element.tz} />
        </Col>
      );
    });

    return (
      <MainLayout>
        <Helmet>
          <title>Commodities</title>
        </Helmet>
        <div style={{ background: '#ECECEC', padding: '12px', height: '20vh' }}>
          <Row gutter={16}>{clocks}</Row>
        </div>
        <Carousel
          autoplay
          autoplaySpeed={5000}
          swipe
          draggable
          afterChange={this.onChange}>
          {commodityData}
        </Carousel>
      </MainLayout>
    );
  }
}

export default Commodities;
