import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";

// 有了这个Provider  就不用再给每个组件传递store了
// 引用了react-redux之后 不用再自己监测更新了
import {Provider} from 'react-redux'


ReactDOM.render(
  // 此处需要Provider包裹App,目的是让App所有的后代容器
  // 组件都能接收到store
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("root")
  );

