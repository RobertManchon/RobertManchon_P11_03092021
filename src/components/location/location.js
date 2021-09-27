import React, { Component } from 'react'

class Location extends Component {
  render () {
    return <h3 className='apartmentLocation'>{this.props.location}</h3>
  }
}

export default Location
