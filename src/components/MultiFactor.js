//Multi-Factor Model Page for CAMRI Data Wall
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import MainLayout from './MainLayout/MainLayout';
import MultiFactorGraph from './MultiFactorGraph/MultiFactorGraph';

class MultiFactor extends Component {
  render() {
    return (
      <MainLayout>
        <Helmet>
          <title>Multi Factor Model</title>
        </Helmet>
        <div style={{ background: '#ECECEC', padding: '20px', height: '10vh' }}>
          <h1>Multi Factor Model</h1>
        </div>
        <div
          style={{
            background: '#FAFAFA',
            padding: '20px',
            textAlign: 'center'
          }}>
          <MultiFactorGraph />
        </div>
      </MainLayout>
    );
  }
}

export default MultiFactor;
