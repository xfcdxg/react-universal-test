export const defineApi = server => {
  server.get('/api/test', (req, resp) => {
    resp.json('api test')
  })
  return server
}
