//Item for Carousel in Commodities
import React, { Component } from 'react';
import { Row, Col } from 'antd';

class CarouselItem extends Component {
  render() {
    return (
      <Row align="middle" justify="center">
        <Col>
          <div className="carousel-item">{this.props.children}</div>
        </Col>
      </Row>
    );
  }
}

export default CarouselItem;
