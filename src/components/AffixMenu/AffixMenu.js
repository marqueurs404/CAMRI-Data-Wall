import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Affix, Dropdown } from 'antd';

class AffixMenu extends Component {
  state = {
    current: null
  };

  componentDidMount() {
    this.setState({
      current: window.location.pathname.substring(1)
    });
  }

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    let menu = (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]}>
        <Menu.Item key="commodities">
          <Link to="/commodities">
            <Icon type="line-chart" />
            Commodities
          </Link>
        </Menu.Item>
        <Menu.Item key="multifactor">
          <Link to="/multifactor">
            <Icon type="appstore" />
            Multi Factor Model
          </Link>
        </Menu.Item>
      </Menu>
    );

    let dropdown = (
      <Dropdown overlay={menu} placement="topRight">
        <Icon
          type="menu-unfold"
          style={{ fontSize: '32px', cursor: 'pointer' }}
        />
      </Dropdown>
    );

    let affix = (
      <Affix style={{ position: 'absolute', bottom: 26, right: 100 }}>
        {dropdown}
      </Affix>
    );

    return <Fragment>{affix}</Fragment>;
  }
}

export default AffixMenu;
