import React from 'react'
import express          from 'express'
import ejs              from 'ejs'
import { compose }      from 'ramda'
import { match }        from 'react-router'
// import Routes           from '../page/routes'
import { defineRouter } from './router'


export const configServer = () =>
compose(
  setRouter(express.Router()),
  setViewEngine
)(express())
// 设置路由
const setRouter = router => server => {
  // server.use('/*', defineRouter(router))
  return server
}
// 使用ejs模板引擎解析html视图文件
const setViewEngine = server => {
  server.engine('.html', ejs.__express)
  server.set('view engine', 'html')
  return server
}
// const matchPageRoute = server => {
//   server.use((req, res) => {
//     console.log(<Routes />, req.url)
//     match({ routes: <Routes />, location: req.url }, (err, redirectLocation, renderProps) => {
//       console.log(err, redirectLocation, renderProps)
//       // if (err) {
//       //   res.status(500).end(`Internal Server Error ${err}`);
//       // } else if (redirectLocation) {
//       //   res.redirect(redirectLocation.pathname + redirectLocation.search);
//       // } else if (renderProps) {
//       //   const store = configureStore();
//       //   const state = store.getState();
//       //   res.end(renderFullPage(html, store.getState()))
//       // } else {
//       //   res.status(404).end('Not found');
//       // }
//     })
//   })
//   return server
// }
