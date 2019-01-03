//Commodity Tab for Carousel in Commodities
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Moment from 'react-moment';
import upArrowImg from '../../assets/up.png';
import downArrowImg from '../../assets/down.png';

class CommodityTab extends Component {
  state = {
    isTall: window.matchMedia('(min-height: 1000px)').matches
  };

  updateDimensions() {
    this.setState({
      isTall: window.matchMedia('(min-height: 1000px)').matches
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.lastPrice !== this.props.lastPrice ||
      nextProps.netChange !== this.props.netChange ||
      nextState.isTall !== this.state.isTall
    ) {
      return true;
    } else return false;
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  render() {
    let arrowImg = this.props.netChange > 0 ? upArrowImg : downArrowImg;
    let isTall = this.state.isTall;

    const styles = {
      textStyle: {
        color: '#fff',
        fontSize: isTall ? '1.5em' : '1em',
        textAlign: 'center'
      },
      titleStyle: {
        fontSize: isTall ? '3em' : '2.5em'
      },
      priceStyle: {
        fontSize: isTall ? '4.5em' : '3.5em',
        fontWeight: 'bold'
      },
      priceChangeStyle: {
        textAlign: 'left',
        fontSize: isTall ? '3em' : '2.5em',
        fontWeight: 'bold',
        paddingLeft: 5,
        margin: 0
      },
      arrowStyle: {
        display: 'block',
        marginLeft: 'auto',
        width: isTall ? 60 : 40,
        height: isTall ? 60 : 40
      },
      imageStyle: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: isTall ? 300 : 220,
        height: isTall ? 300 : 220
      },
      timeStyle: {
        fontSize: isTall ? '2em' : '1.5em'
      }
    };

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
            <h2
              style={{
                ...styles.textStyle,
                ...styles.priceStyle
              }}>{`$${parseFloat(this.props.lastPrice).toLocaleString('en', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}`}</h2>

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
                  {`${parseFloat(this.props.netChange).toFixed(2)} `}
                  {`(${parseFloat(this.props.pctChange).toFixed(2)}%)`}
                </h2>
              </Col>
            </Row>
            <h2 style={{ ...styles.textStyle, ...styles.timeStyle }}>
              {`as of `}
              <Moment format="DD MMM YYYY, hh:mm:ss A" tz={this.props.tz}>
                {new Date(this.props.timeRetrieved)}
              </Moment>
            </h2>
          </Col>
        </Row>
      </Row>
    );
  }
}

export default CommodityTab;
