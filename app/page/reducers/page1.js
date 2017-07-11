import mergeState from '../common/merge-state'

const initialState = {}

export default (
  (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_LIST_SUCCESS':
        return mergeState(state, action)
      default: return state
    }
  }
)
