//Commodity Tab for Carousel in Commodities
import React, { Component } from 'react';
import { Row, Col } from 'antd';

class CommodityTab extends Component {
  render() {
    return (
      <Row className="carousel-item" type="flex" justify="center">
        <Col span={6}>
          <h3>{this.props.title}</h3>
        </Col>
        <Col span={6}>
          <h3>{this.props.date}</h3>
        </Col>
        <Col span={4}>
          <h3>{this.props.currentPrice}</h3>
        </Col>
        <Col span={6}>
          <h3>% Change</h3>
        </Col>
      </Row>
    );
  }
}

export default CommodityTab;
