import React from 'react'

export default function MaternityCard() {
  return (
    <div className="card col-4 bg-dark text-white ">
        <h6 className='display-6'>Maternity Packages</h6> 
        <div className="card-body">
            <p className="card-text"> Comprehensive Maternal and Child care:</p>
            <ul>
                <li>Antenatal Package</li>
                <li>Normal Delivery Package</li>
                <li>Elective Caeseran Package</li>
            </ul>

            <p className="card-text"> Eligibility of the package depend on:</p>
            <ul>
                <li>Your choice of maternity care</li>
                <li>Complications pertaining to a previous preganancy</li>
                <li>Current medical conitions if any</li>
                <li>Possible conditions that may arise out of your current pregnancy</li>
            </ul>
        </div>
    </div>
  )
}
