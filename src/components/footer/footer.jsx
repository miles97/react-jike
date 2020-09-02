import React, { Component } from 'react';
import { is, fromJS } from 'immutable';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './footer.less';

export default class PublicFooter extends Component {
  //组件之间的传值
  static propTypes = {
    record: PropTypes.any,
    // title: PropTypes.string.isRequired,
    confirm: PropTypes.any,
  }

  state = {
    navState: false, //导航栏是否显示
    curent: 0,//
  };

  // 切换左侧导航栏状态
  toggleNav = () => {
    this.setState({ navState: !this.state.navState });
  }
  // css动画组件设置为目标组件
  FirstChild = props => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }

  render() {
    return (
      <footer className="footer-container">
        <div className="nav-slide-list">
          <NavLink to="/jikepage" exact className="nav-link icon-jiantou-copy-copy"
            activeClassName="activeclass"
          >推荐</NavLink>
          <NavLink to="/moment" exact className="nav-link icon-jiantou-copy-copy"
            activeClassName="activeclass"
            >动态</NavLink>
          <NavLink to="/jikepage?name=1231" exact className="nav-link icon-jiantou-copy-copy" 
          ><span className="icon-plus">+</span></NavLink>
          <NavLink to="/jikepage?name=12" exact className="nav-link icon-jiantou-copy-copy"
           activeClassName="activeclass"
          >推送</NavLink>
          <NavLink to="/balance" exact className="nav-link icon-jiantou-copy-copy"
           activeClassName="activeclass"
          >我</NavLink>
        </div>
      </footer>
    );
  }
}