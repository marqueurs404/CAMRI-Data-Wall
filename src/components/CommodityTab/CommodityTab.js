//Commodity Tab for Carousel in Commodities
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Moment from 'react-moment';
import upArrowImg from '../../assets/green_arrow.png';
import downArrowImg from '../../assets/red_arrow.png';

let styles = {
  textStyle: {
    color: '#fff'
  },
  titleStyle: {
    fontSize: '3em'
  },
  dataStyle: {
    fontSize: '2.5em'
  },
  arrowStyle: {
    boxShadow: '3px 3px 5px 6px #101010'
  },
  imageStyle: {
    boxShadow: '3px 3px 5px 6px #101010'
  }
};

class CommodityTab extends Component {
  render() {
    let priceChange = this.props.currentPrice - this.props.previousPrice;
    let sign = priceChange > 0 ? '+' : '-';
    let arrowImg = priceChange > 0 ? upArrowImg : downArrowImg;

    return (
      <Row className="carousel-item" style={{ width: '100%', height: '72vh' }}>
        {/* Title */}
        <Row>
          <Col span={24}>
            <h1 style={{ ...styles.textStyle, ...styles.titleStyle }}>
              {this.props.title}
            </h1>
          </Col>
        </Row>
        {/* Info */}
        <Row>
          {/* Image */}
          <Col span={12}>
            <img style={styles.imageStyle} src={this.props.image} alt="" />
          </Col>

          {/* Data */}
          <Col span={12}>
            <h2 style={styles.textStyle}>
              {`Price as of `}
              <Moment format="DD MMM YYYY" tz={this.props.tz}>
                {this.props.date}
              </Moment>
            </h2>

            <h2 style={{ ...styles.textStyle, ...styles.dataStyle }}>{`$${
              this.props.currentPrice
            }`}</h2>

            <h2 style={styles.textStyle}>Price Change (%) </h2>

            <Col span={8}>
              <img style={styles.arrowStyle} src={arrowImg} alt="" />
            </Col>

            <Col span={12}>
              <h2 style={{ ...styles.textStyle, ...styles.dataStyle }}>
                {`${priceChange}`}
              </h2>
              <h2 style={{ ...styles.textStyle, ...styles.dataStyle }}>
                {`(${sign}${(priceChange / this.props.previousPrice) * 100}%)`}
              </h2>
            </Col>
          </Col>
        </Row>
      </Row>
    );
  }
}

export default CommodityTab;
