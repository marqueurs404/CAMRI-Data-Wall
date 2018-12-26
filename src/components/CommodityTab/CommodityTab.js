//Commodity Tab for Carousel in Commodities
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Moment from 'react-moment';
import upArrowImg from '../../assets/up.png';
import downArrowImg from '../../assets/down.png';

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
    width: 120,
    height: 120,
    boxShadow: '1px 1px 1px 1px #101010'
  },
  imageStyle: {
    width: 300,
    height: 300,
    boxShadow: '1px 1px 1px 1px #101010'
  }
};

class CommodityTab extends Component {
  render() {
    let arrowImg = this.props.netChange > 0 ? upArrowImg : downArrowImg;

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
              <Moment format="DD MMM YYYY, hh:mm:ss A" tz={this.props.tz}>
                {new Date(this.props.timeRetrieved)}
              </Moment>
            </h2>

            <h2
              style={{ ...styles.textStyle, ...styles.dataStyle }}>{`$${Number(
              this.props.lastPrice
            ).toFixed(2)}`}</h2>

            <h2 style={styles.textStyle}>Price Change (%) </h2>

            <Col span={8}>
              <img style={styles.arrowStyle} src={arrowImg} alt="" />
            </Col>

            <Col span={12}>
              <h2 style={{ ...styles.textStyle, ...styles.dataStyle }}>
                {`${Number(this.props.netChange).toFixed(2)}`}
              </h2>
              <h2 style={{ ...styles.textStyle, ...styles.dataStyle }}>
                {`(${Number(this.props.pctChange).toFixed(2)}%)`}
              </h2>
            </Col>
          </Col>
        </Row>
      </Row>
    );
  }
}

export default CommodityTab;
