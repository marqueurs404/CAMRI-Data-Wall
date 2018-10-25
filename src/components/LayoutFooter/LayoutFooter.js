import React from 'react';
import { Layout } from 'antd';
import PoweredByImage from '../../assets/powered2.png';
import CamriImage from '../../assets/CAMRI-logo2.png';

const styles = {
  poweredByImgStyle: {
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  CamriImgStyle: {
    position: 'absolute',
    left: '0%',
    transform: 'translate(5%, -50%)',
    height: '65px'
  }
};

const LayoutFooter = props => (
  <Layout.Footer
    style={{
      position: 'fixed',
      width: '100%',
      left: 0,
      bottom: 0,
      height: '8vh',
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
