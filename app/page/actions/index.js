const server = path => `http://localhost:9033/api${ path }`

export const fetchName = () => dispatch => (
  fetch(server('/name'))
  .then(resp => resp.json())
  .then(({ name }) => {
    dispatch({ type: 'CHANGE_NAME', name })
  })
)

export const fetchList = () => dispatch => (
  fetch(server('/list'))
  .then(resp => resp.json())
  .then(list => {
    dispatch({ type: 'FETCH_LIST_SUCCESS', list })
  })
)
