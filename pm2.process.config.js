module.exports = (
  {
    apps: [{
      name       : "react-universal-test",
      script     : "./server.js",
      watch      : true,
      interpreter: './node_modules/.bin/babel-node',
      log_date_format: 'MM-DD HH:mm:ss'
    }]
  }
)
