import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import MyReduxSimpleAddress from '../Home/MyReduxSimpleAddress'

import { change } from 'redux-form'

const mapStateToProps = state => ({
  selectedCity: state.form.updateOrganizationForm.values.organizationCity,
  selectedDist: state.form.updateOrganizationForm.values.organizationArea,
  selectedPostalCode: state.form.updateOrganizationForm.values.organizationZIPCode,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changeCity: (value) => {
    dispatch(change('updateOrganizationForm', 'organizationCity', value))
  },
  changeDist: (value) => {
    dispatch(change('updateOrganizationForm', 'organizationArea', value))
  },
  changePostalCode: (value) => {
    dispatch(change('updateOrganizationForm', 'organizationZIPCode', value))
  },
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MyReduxSimpleAddress)
