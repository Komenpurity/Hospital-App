import React from 'react'
import PharmacyCard from './PharmacyCard'
import ConsultationCard from './ConsultationCard'
import MaternityCard from './MaternityCard'
import AboutUs from './AboutUs'
import Footer from './Footer'

export default function Home() {
  return (
    <div className='container'>
        <div className='landing container'> 
          <h1 className='display-1'>Matter Hospital</h1>
          <h3>Virtual Consultation</h3>
          <p>Talk with qualified doctors now</p>
          <button className="btn btn-primary" type='submit'>Book an Appointment now</button>
        </div>

        <main>
          <div className='row m-3'>
            <PharmacyCard />
            <ConsultationCard />
            <MaternityCard />
          </div>

          <div>
            <AboutUs />
          </div>

          <Footer />
          
        </main>
    </div>
  )
}
