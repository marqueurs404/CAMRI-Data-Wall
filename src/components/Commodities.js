//Commodities Page for CAMRI Data Wall
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Col, Row, Carousel, message } from 'antd';

import MainLayout from './MainLayout/MainLayout';
import Clock from './Clock/Clock';
import CarouselItem from './CarouselItem/CarouselItem';
import CommodityTab from './CommodityTab/CommodityTab';

import StockImage from '../assets/others.png';
import BalticImage from '../assets/Baltic.png';
import GoldImage from '../assets/gold.png';
import WheatImage from '../assets/wheat.png';
import OilImage from '../assets/oil.png';

const API = 'http://172.29.27.115:5000/';
const FETCH_INTERVAL = 1000;
const CAROUSEL_INTERVAL = 5000;

const SECURITIES_IMAGES = {
  'XAU Curncy': GoldImage,
  'COA Comdty': OilImage,
  'GI1 Index': WheatImage,
  'SPX INDEX': StockImage,
  'FSSTI Index': StockImage,
  'HSI Index': StockImage,
  'BDIY Index': BalticImage
};
const SECURITIES_FULL_TITLES = {
  'XAU Curncy': 'Gold',
  'COA Comdty': 'Brent Oil',
  'GI1 Index': 'Goldman Commodity Index',
  'SPX INDEX': 'S&P 500 Index',
  'FSSTI Index': 'Straits Times Index',
  'HSI Index': 'Hang Seng Index',
  'BDIY Index': 'Baltic Dry Index'
};

const DEFAULT_DATA = [
  {
    TITLE: 'Straits Times Index',
    LAST_PRICE: 700.55,
    NET_CHANGE: 100,
    PCT_CHANGE: 0.07,
    TIME_RETRIEVED: '10/09/18',
    IMAGE: StockImage
  },
  {
    TITLE: 'S&P500',
    LAST_PRICE: 1200.51,
    NET_CHANGE: 100,
    PCT_CHANGE: 0.07,
    TIME_RETRIEVED: '10/09/18',
    IMAGE: StockImage
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
    TITLE: 'Wheat',
    LAST_PRICE: 1400.01,
    NET_CHANGE: 100,
    PCT_CHANGE: 0.07,
    TIME_RETRIEVED: '10/09/18',
    IMAGE: WheatImage
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
      console.log('fetching');
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
                TITLE: SECURITIES_FULL_TITLES[security],
                IMAGE: SECURITIES_IMAGES[security]
              }
            };
            data_arr.push(security_obj);
          }
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
