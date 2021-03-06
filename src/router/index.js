import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';

import Home from "@/pages/home/home"; //原来的页面首页
const record = asyncComponent(() => import("@/pages/record/record"));
// const helpcenter = asyncComponent(() => import("@/pages/helpcenter/helpcenter"));
// const production = asyncComponent(() => import("@/pages/production/production"));
// const balance = asyncComponent(() => import("@/pages/balance/balance"));
const jikepage = asyncComponent(() =>import('@/pages/homepage/jikehome')) 
const moment = asyncComponent(() =>import('@/pages/moment/moment')) 
const msg = asyncComponent(() =>import('@/pages/alertmessage/msg')) 
// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route path="/" exact component={jikepage} />
          <Route path="/record" component={record} />
          {/* <Route path="/helpcenter" component={helpcenter} />/ */}
          {/* <Route path="/production" component={production} /> */}
          <Route path="/home" component={Home} />
          <Route path="/jikepage" component={jikepage} />
          <Route path="/moment" component={moment} />
          <Route path="/msg" component={msg} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}
