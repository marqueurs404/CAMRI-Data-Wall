//Item for Carousel
import React, { Component } from 'react';
import { Row, Col } from 'antd';

class CarouselItem extends Component {
  render() {
    return (
      <Row className="carousel-item" type="flex" justify="center">
        <Col span={16}>{this.props.children}</Col>
      </Row>
    );
  }
}

export default CarouselItem;
