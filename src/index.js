import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store from "./store/index";
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//导入全局样式
import './components/index.css';

Component.prototype.$store = store;//挂载store的原型;

//在redux中，如果store的状态变化了，我们利用store.subcribble订阅的函数都会执行
// store.subscribe(()=>{
//     console.log('hahaha')
// })



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
