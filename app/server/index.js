import express  from 'express'
import ejs      from 'ejs'
import { defineRouter } from './router'

import { PORT } from '../../server.config'

const router = express.Router()
const server = express()

server.engine('.html', ejs.__express)   //使用ejs模板引擎解析html视图文件
server.set('view engine', 'html')

server.use('/*', defineRouter(router))

server.listen(PORT, () => {
  console.log('server run at %s', PORT)
})
