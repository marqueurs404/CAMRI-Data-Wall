//Commodity Tab for Carousel in Commodities
import React, { Component } from 'react';
import { Row, Col } from 'antd';

class CommodityTab extends Component {
  render() {
    return (
      <Row className="carousel-item" type="flex" justify="center">
        <Col span={6}>
          <h3>Title</h3>
        </Col>
        <Col span={4}>
          <h3>Price</h3>
        </Col>
        <Col span={6}>
          <h3>Date</h3>
        </Col>
      </Row>
    );
  }
}

export default CommodityTab;
