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
import { ASSET_PATH, DIST_PATH } from '../../path.config'
import fetchDataBeforeRender     from '../page/common/fetchDataBeforeRender'

const compiler = webpack(webpackConfig)
const { publicPath } = webpackConfig.output

let compiledBundle = []

compiler.plugin('compilation', (compilation, callback) => {
  compilation.plugin('after-optimize-assets', assets => {
    const keys = Object.keys(assets).filter(o => o.indexOf('.json') < 0)
    if (keys.length > 1) {
      // console.log('assets', keys)
      compiledBundle = keys
    }
  })
})
export const configServer = () =>
compose(
  matchPageRoute,
  defineApi,
  configWebpack,
  configViewEngine
)(express())
// 使用ejs模板引擎解析html视图文件
const configViewEngine = server => {
  server.engine('.html', ejs.__express)
  server.set('view engine', 'html')
  return server
}
// 配置 webpack
const configWebpack = server => {
  if (process.env.NODE_ENV !== 'production') {
    server.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath }))
    server.use(webpackHotMiddleware(compiler))
  } else {
    server.use('/', express.static(DIST_PATH));
  }
  return server
}
const matchPageRoute = server => {

  server.use((req, res) => {
    // console.log(compiler)
    match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
      if (err) {
        res.status(500).end(`Internal Server Error ${ err }`)
      } else if (redirectLocation) {
        const { pathname, search } = redirectLocation
        res.redirect(`${ pathname }${ search }`)
      } else if (renderProps) {
        const store = createStore()
        const state = store.getState()
        const { components, params } = renderProps
        const reactComponent = renderToString(
          <Provider store={store}>
            <RouterContext { ...renderProps } />
          </Provider>
        )
        const [bundleJs = '', vandorBundleJs = ''] = compiledBundle
        fetchDataBeforeRender(store.dispatch, components, params)
        .then(() => {
          res.render(`${ ASSET_PATH }/index.ejs`, {
            reactComponent,
            initialState: JSON.stringify(store.getState()),
            bundleJs,
            vandorBundleJs,
            publicPath
          })
        })
      } else {
        res.status(404).end('Not found')
      }
    })
  })
  return server
}
