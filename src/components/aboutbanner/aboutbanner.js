import React, { Component } from 'react'
import about from '../../assets/about.jpeg'

class AboutBanner extends Component {
  render () {
    return (
      <section className='aboutBanner'>
        <img src={about} alt='aboutBannerImg' className='aboutBannerImg' />
        <div className='aboutBannerWrapper' />
      </section>
    )
  }
}

export default AboutBanner
