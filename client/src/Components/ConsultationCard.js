import React from 'react'

export default function ConsultationCard() {

  return (
    <div className="card col-4 bg-info text-dark"> 
        <h6 className='display-6'>Telemedicine</h6> 
        <h6 className='display-6'>Virtual Consultation</h6>
        <div className="card-body">
            <blockquote className="blockquote">
                <p>Dont delay your health concerns.</p>
                <p>Schedule an appointment and talk with qualified doctors online.</p>
            </blockquote>
                <button className="btn btn-primary" type='submit'>Book an Appointment now</button>     
            </div>
    </div>
  )
}
