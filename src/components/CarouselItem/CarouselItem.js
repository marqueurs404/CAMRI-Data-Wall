//Item for Carousel in Commodities
import React, { Component } from 'react';

class CarouselItem extends Component {
  render() {
    return <div className="carousel-item">{this.props.children}</div>;
  }
}

export default CarouselItem;
