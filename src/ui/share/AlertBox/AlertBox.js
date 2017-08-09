import React, { Component } from 'react'
import './alertbox.css'
import { connect } from 'react-redux'
import store from '../../../store'

class AlertBox extends Component {

  closeAlert = () => {
    console.log('closeAlert....')
    this.props.dispatch({ type: 'HIDE_ALERT' })
  }

  componentWillMount() {
    console.log(store.getState())
  }

  render() {
    console.log('render...', this.props.showAlert)
    return(
      <div className={  this.props.showAlert ? "alert-box show" : "alert-box" }>
        <div className="alert-content-card">
          <div className="alert-msg">
            {this.props.alertMsg}
          </div>
          <div onClick={this.closeAlert}
            className="alert-close-button">
            关闭
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  showAlert: state.user.showAlert,
  alertMsg: state.user.alertMsg
})

export default connect(mapStateToProps)(AlertBox)