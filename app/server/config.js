import express                   from 'express'
import React                     from 'react'
import { renderToString }        from 'react-dom/server'
import { Provider }              from 'react-redux'
import ejs                       from 'ejs'
import { compose }               from 'ramda'
import { match, RouterContext }  from 'react-router'
import webpack                   from 'webpack'
import webpackDevMiddleware      from 'webpack-dev-middleware'
import webpackHotMiddleware      from 'webpack-hot-middleware'
import webpackConfig             from '../../webpack.config.babel'
import routes                    from '../page/routes'
import { defineApi }             from './api'
import createStore               from '../page/store'
import { SERVER_PATH }           from '../../path.config'

export const configServer = () =>
compose(
  matchPageRoute,
  configWebpack,
  defineApi,
  configViewEngine
)(express())
// 使用ejs模板引擎解析html视图文件
const configViewEngine = server => {
  server.engine('.html', ejs.__express)
  server.set('view engine', 'html')
  return server
}
const configWebpack = server => {
  if (process.env.NODE_ENV !== 'production') {
    const compiler = webpack(webpackConfig)
    server.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
    server.use(webpackHotMiddleware(compiler))
  }else{
    server.use('/static', express.static(__dirname + '/../../dist'));
  }
  return server
}
const matchPageRoute = server => {
  server.use((req, res) => {
    match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
      if (err) {
        res.status(500).end(`Internal Server Error ${err}`);
      } else if (redirectLocation) {
        const { pathname, search } = redirectLocation
        res.redirect(`${ pathname }${ search }`);
      } else if (renderProps) {
        const store = createStore()
        const state = store.getState()
        const reactComponent = renderToString(
          <Provider store={store}>
            <RouterContext { ...renderProps } />
          </Provider>
        )
        // 未完成
        res.render(`${ SERVER_PATH }/view/index.ejs`, {
          reactComponent,
          initialState: store.getState()
        })
      } else {
        res.status(404).end('Not found');
      }
    })
  })
  return server
}
