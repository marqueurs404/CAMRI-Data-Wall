import React from 'react';
import { Layout } from 'antd';
import PoweredByImage from '../../assets/powered2.png';

let imageStyle = {
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

const LayoutFooter = props => (
  <Layout.Footer
    style={{
      position: 'fixed',
      width: '100%',
      left: 0,
      bottom: 0,
      height: '10vh',
      padding: '12px 20px'
    }}>
    <span style={{ fontSize: '16px', color: '#002A94' }}>
      Centre for Asset Management Research and Investments <br /> NUS Business
      School
    </span>
    <img style={imageStyle} src={PoweredByImage} alt="" />
  </Layout.Footer>
);

export default LayoutFooter;
