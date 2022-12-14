import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center h-100 d-flex align-items-center justify-content-center">
        <img src={loading} alt="loading"/>
      </div>
    )
  }
}

export default Spinner
