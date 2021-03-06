import mergeState from '../common/merge-state'

const initialState = {
  name: '',
}

export default (
  (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_NAME':
        return mergeState(state, action)
      default: return state
    }
  }
)
