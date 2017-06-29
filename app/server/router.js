// import ReactDOM from 'react-dom/server'
// import Demo from '../views/demo'
// import { match } from 'react-router'

export const defineRouter = router => {
  router.get('/', (req, resp) => {
    resp.json('test')
    // resp.render(`${ ASSET_PATH }/index.ejs`,
    //   { reactComponent: ReactDOM.renderToString(Demo({ name: 'demo' })) })
  })
  return router
}
