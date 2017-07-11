import { connect } from 'react-redux'
import wrap        from '../common/wrap'
import App         from '../components/app'
import { fetchName }   from '../actions'

const mapStateToProps = ({ app }) => {
  return {
    ...app,
  }
}

const mapDispatchToProps = dispatch => ({ dispatch })

const mapFunToComponent  = dispatch => ({
  componentWillMount: () => {
    dispatch(fetchName())
  },
})

export default
connect(mapStateToProps, mapDispatchToProps)(
  wrap(mapFunToComponent)(App)
)
