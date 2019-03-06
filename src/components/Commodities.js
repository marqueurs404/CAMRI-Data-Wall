//Commodities Page for CAMRI Data Wall
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Col, Row, Carousel, message } from 'antd';

import MainLayout from './MainLayout/MainLayout';
import Clock from './Clock/Clock';
import CarouselItem from './CarouselItem/CarouselItem';
import CommodityTab from './CommodityTab/CommodityTab';

import SnpImage from '../assets/snp.png';
import StiImage from '../assets/sti.png';
import HsiImage from '../assets/hsi.png';
import BalticImage from '../assets/Baltic.png';
import GoldImage from '../assets/gold.png';
import WheatImage from '../assets/wheatgoldman.png';
import OilImage from '../assets/oil.png';

const API = `${window.location.hostname}:5000/`;
const FETCH_INTERVAL = 1000;
const CAROUSEL_INTERVAL = 5000;

const SECURITIES_DETAILS = {
  'FSSTI Index': { image: StiImage, title: 'Straits Times Index', order: 0 },
  'HSI Index': { image: HsiImage, title: 'Hang Seng Index', order: 1 },
  'SPX INDEX': { image: SnpImage, title: 'S&P 500 Index', order: 2 },
  'XAU Curncy': { image: GoldImage, title: 'Gold', order: 3 },
  'COA Comdty': { image: OilImage, title: 'Brent Oil', order: 4 },
  'GI1 Index': {
    image: WheatImage,
    title: 'Goldman Commodity Index',
    order: 5
  },
  'BDIY Index': { image: BalticImage, title: 'Baltic Dry Index', order: 6 }
};

const DEFAULT_DATA = [
  {
    TITLE: 'Straits Times Index',
    LAST_PRICE: 700.55,
    NET_CHANGE: 100,
    PCT_CHANGE: 0.07,
    TIME_RETRIEVED: '10/09/18',
    IMAGE: StiImage
  },
  {
    TITLE: 'Hang Seng Index',
    LAST_PRICE: 1200.51,
    NET_CHANGE: 100,
    PCT_CHANGE: 0.07,
    TIME_RETRIEVED: '10/09/18',
    IMAGE: SnpImage
  },
  {
    TITLE: 'S&P500',
    LAST_PRICE: 3014.58,
    NET_CHANGE: 100,
    PCT_CHANGE: 0.07,
    TIME_RETRIEVED: '10/09/18',
    IMAGE: SnpImage
  },
  {
    TITLE: 'Gold',
    LAST_PRICE: 1900.77,
    NET_CHANGE: 100,
    PCT_CHANGE: 0.07,
    TIME_RETRIEVED: '10/09/18',
    IMAGE: GoldImage
  },
  {
    TITLE: 'Crude Oil',
    LAST_PRICE: 1100.99,
    NET_CHANGE: 100,
    PCT_CHANGE: 0.07,
    TIME_RETRIEVED: '10/09/18',
    IMAGE: OilImage
  },
  {
    TITLE: 'Goldman Commodity Index',
    LAST_PRICE: 377.01,
    NET_CHANGE: 10,
    PCT_CHANGE: 0.1,
    TIME_RETRIEVED: '10/09/18',
    IMAGE: WheatImage
  },
  {
    TITLE: 'Baltic Dry Index',
    LAST_PRICE: 1500.12,
    NET_CHANGE: 100,
    PCT_CHANGE: 0.07,
    TIME_RETRIEVED: '10/09/18',
    IMAGE: BalticImage
  }
];

class Commodities extends Component {
  state = {
    success: false,
    data: null
  };

  componentDidMount() {
    //function which calls the api for market data
    function callApi() {
      fetch(API, { mode: 'cors' })
        .then(response => {
          if (response.ok) {
            if (this.state.success === false) {
              message.success('Successfully connected to Bloomberg API!');
            }
            return response.json();
          }
          throw new Error('Network response not ok');
        })
        .then(data => {
          // Preprocess data into a suitable format for display
          let data_arr = [];
          for (let security in data) {
            let security_obj = {};
            security_obj = {
              ...data[security],
              ...{
                TITLE: SECURITIES_DETAILS[security]['title'],
                IMAGE: SECURITIES_DETAILS[security]['image'],
                ORDER: SECURITIES_DETAILS[security]['order']
              }
            };
            data_arr.push(security_obj);
          }
          data_arr = data_arr.sort((a, b) =>
            a.ORDER > b.ORDER ? 1 : a.ORDER < b.ORDER ? -1 : 0
          );
          this.setState({ success: true, data: data_arr });
        })
        .catch(console.log);
    }

    //function which loops the carousel
    function carouselAutoplay() {
      this.slider.next();
    }

    callApi.bind(this)();
    this.fetchInterval = setInterval(callApi.bind(this), FETCH_INTERVAL);
    this.carouselInterval = setInterval(
      carouselAutoplay.bind(this),
      CAROUSEL_INTERVAL
    );
  }

  componentWillUnmount() {
    clearInterval(this.fetchInterval);
    clearInterval(this.carouselInterval);
  }

  render() {
    let clocks = [
      { country: 'Sydney', tz: 'Australia/Sydney' },
      { country: 'Tokyo', tz: 'Asia/Tokyo' },
      { country: 'Singapore', tz: 'Asia/Singapore' },
      { country: 'Mumbai', tz: 'Asia/Kolkata' },
      { country: 'London', tz: 'Europe/London' },
      { country: 'New York', tz: 'America/New_York' }
    ];

    // Carousel
    let dataTabs = DEFAULT_DATA;
    if (this.state.data) {
      dataTabs = this.state.data;
    }
    dataTabs = dataTabs.map(element => {
      return (
        <CarouselItem key={element.TITLE}>
          <CommodityTab
            title={element.TITLE}
            lastPrice={element.LAST_PRICE}
            netChange={element.NET_CHANGE}
            pctChange={element.PCT_CHANGE}
            timeRetrieved={element.TIME_RETRIEVED}
            image={element.IMAGE}
          />
        </CarouselItem>
      );
    });

    let carousel = (
      <Carousel
        ref={slider => (this.slider = slider)}
        slidesToShow={3}
        dots={false}
        speed={1500}
        pauseOnHover={false}
        infinite={true}>
        {dataTabs}
      </Carousel>
    );

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
          <title>Markets</title>
        </Helmet>
        <div
          style={{
            background: '#ECECEC',
            padding: '12px',
            height: '20vh'
          }}>
          <Row
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              width: 'auto'
            }}
            gutter={16}>
            {clocks}
          </Row>
        </div>
        {carousel}
      </MainLayout>
    );
  }
}

export default Commodities;
