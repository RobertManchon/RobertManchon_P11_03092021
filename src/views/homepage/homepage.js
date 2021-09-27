import React, { Component } from 'react'
import HeroBanner from '../../components/herobanner/herobanner'
import ApartmentCard from '../../components/apartmentcard/apartmentcard'
import { data } from '../../datas/data'
import './homepage.css'

class HomePage extends Component {
  render () {
    return (
      <main>
        <HeroBanner />
        <section className='galleryApartmentCard'>
          {data.map((apartment) => {
            return <ApartmentCard key={apartment.id} id={apartment.id} cover={apartment.cover} title={apartment.title} />
          })}
        </section>
      </main>
    )
  }
}
export default HomePage
