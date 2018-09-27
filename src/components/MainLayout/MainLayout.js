import React, { Component, Fragment } from 'react';
// import { Layout } from 'antd';

import LayoutFooter from '../LayoutFooter/LayoutFooter';
import AffixMenu from '../AffixMenu/AffixMenu';

class MainLayout extends Component {
  render() {
    return (
      <Fragment>
        <div>{this.props.children}</div>
        <LayoutFooter />
        <AffixMenu />
      </Fragment>
    );
  }
}

export default MainLayout;
