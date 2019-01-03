import React from 'react';
import { Layout } from 'antd';
import PoweredByImage from '../../assets/powered.png';
import CamriImage from '../../assets/CAMRI-logo2.png';

const styles = {
  poweredByImgStyle: {
    position: 'absolute',
    left: '80%',
    transform: 'translate(-50%, -17%)',
    height: '60px'
  },
  CamriImgStyle: {
    position: 'absolute',
    left: '0%',
    transform: 'translate(3%, -25%)',
    height: '80px'
  }
};

const LayoutFooter = props => (
  <Layout.Footer
    style={{
      position: 'fixed',
      width: '100%',
      left: 0,
      bottom: 0,
      height: '12vh',
      padding: '4px 20px'
    }}>
    <span style={{ fontSize: '16px', color: 'white' }}>
      Centre for Asset Management Research and Investments <br /> NUS Business
      School
    </span>
    <img style={styles.CamriImgStyle} src={CamriImage} alt="" />
    <img style={styles.poweredByImgStyle} src={PoweredByImage} alt="" />
  </Layout.Footer>
);

export default LayoutFooter;
