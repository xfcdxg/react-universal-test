const proxy = path => `/api${ path }`

export const defineApi = server => {
  server.get(proxy('/name'), (req, resp) => {
    const reply = { name: 'universal test' }
    resp.json(reply)
  })
  server.get(proxy('/list'), (req, resp) => {
    const reply = []
    for (let i = 1; i <= 20; i++) {
      reply.push({
        name : `测试数据${ i }`,
        value: i
      })
    }
    resp.json(reply)
  })
  return server
}
