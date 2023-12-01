import React from 'react'

export default function PharmacyCard() {
  return (
    <div className="card col-4 bg-light text-dark">
        <h6 className='display-6'>Pharmacy Services</h6> 
        <h6 className='display-6'>Pharmacy Delivery</h6>
        <div className="card-body">
            <p className="card-text">Follow procurement steps below:</p>
            <ol> 
                <li>Call/SMS/Whatsapp your prescription on:
                +254 742 834 438 </li>
                <li>Scan your prescription to:
                    telemedicine@materhospital.org</li>
            </ol>
            <p>Place your order between 8 am and 4 pm and get YOUR delivery.  The delivery service is chargeable at Ksh. 70/km.</p>
            <p>The service is available within a radius of 40 km from the Main Hospital and Village Medical Centre.</p>
            <p> Terms and Conditions Apply.</p>
        </div>
    </div>
  )
}
