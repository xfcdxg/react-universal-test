import { connect }   from 'react-redux'
import wrap          from '../common/wrap'
import Page1         from '../components/page1'
import { fetchList } from '../actions/'

const mapStateToProps = ({ page1 }) => {
  return { ...page1 }
}

const mapDispatchToProps = dispatch => ({ dispatch })

const mapFunToComponent  = dispatch => ({
  componentWillMount: () => {
    dispatch(fetchList())
  },
})

export default
connect(mapStateToProps, mapDispatchToProps)(
  wrap(mapFunToComponent)(Page1)
)
