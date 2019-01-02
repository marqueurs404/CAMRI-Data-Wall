//Commodity Tab for Carousel in Commodities
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Moment from 'react-moment';
import upArrowImg from '../../assets/up.png';
import downArrowImg from '../../assets/down.png';

let styles = {
  textStyle: {
    color: '#fff',
    fontSize: window.matchMedia('(min-height: 800px)').matches
      ? '1.5em'
      : '1em',
    textAlign: 'center'
  },
  titleStyle: {
    fontSize: window.matchMedia('(min-height: 800px)').matches ? '3em' : '2.5em'
  },
  priceStyle: {
    fontSize: window.matchMedia('(min-height: 800px)').matches
      ? '3.5em'
      : '2.5em'
  },
  priceChangeStyle: {
    textAlign: 'left',
    fontSize: window.matchMedia('(min-height: 800px)').matches
      ? '3.5em'
      : '2.5em',
    paddingLeft: 5,
    margin: 0
  },
  arrowStyle: {
    display: 'block',
    marginLeft: 'auto',
    width: window.matchMedia('(min-height: 800px)').matches ? 60 : 40,
    height: window.matchMedia('(min-height: 800px)').matches ? 60 : 40
  },
  imageStyle: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: window.matchMedia('(min-height: 800px)').matches ? 350 : 250,
    height: window.matchMedia('(min-height: 800px)').matches ? 350 : 250
  }
};

class CommodityTab extends Component {
  shouldComponentUpdate(nextProps) {
    if (
      nextProps.lastPrice !== this.props.lastPrice ||
      nextProps.netChange !== this.props.netChange
    ) {
      return true;
    } else return false;
  }

  render() {
    let arrowImg = this.props.netChange > 0 ? upArrowImg : downArrowImg;

    return (
      <Row
        className="carousel-item"
        style={{
          width: '100%',
          height: '72vh',
          paddingTop: '3vh'
        }}>
        {/* Title */}
        <Row>
          <Col span={24}>
            <h1 style={{ ...styles.textStyle, ...styles.titleStyle }}>
              {this.props.title}
            </h1>
          </Col>
        </Row>

        {/* Image */}
        <Row>
          <Col span={24}>
            <img style={styles.imageStyle} src={this.props.image} alt="" />
          </Col>
        </Row>

        <br />

        {/* Info */}
        <Row>
          {/* Data */}
          <Col span={24}>
            <h2 style={styles.textStyle}>
              {`Price as of `}
              <Moment format="DD MMM YYYY, hh:mm:ss A" tz={this.props.tz}>
                {new Date(this.props.timeRetrieved)}
              </Moment>
              {`:`}
            </h2>

            <h2
              style={{
                ...styles.textStyle,
                ...styles.priceStyle
              }}>{`$${Number(this.props.lastPrice).toFixed(2)}`}</h2>

            <h2 style={styles.textStyle}>Price Change (%) </h2>

            <Row type="flex" style={{ alignItems: 'center' }}>
              <Col span={8}>
                <img style={styles.arrowStyle} src={arrowImg} alt="" />
              </Col>

              <Col span={16}>
                <h2
                  style={{
                    ...styles.textStyle,
                    ...styles.priceChangeStyle,
                    color: this.props.netChange > 0 ? '#1dcc92' : '#ff433d'
                  }}>
                  {`${Number(this.props.netChange).toFixed(2)} `}
                  {`(${Number(this.props.pctChange).toFixed(2)}%)`}
                </h2>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    );
  }
}

export default CommodityTab;
