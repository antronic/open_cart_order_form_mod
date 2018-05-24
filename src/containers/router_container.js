import { connect } from 'react-redux'

import RouterPresenter from '../components/router'

import { goTo } from '../ducks/actions'


const mapStateToProps = state => ({
  route: state.router.route,
})

const mapDispatchToProps = dispatch => {
  return {
    onTabClick: route => {
      dispatch(goTo(route))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouterPresenter)