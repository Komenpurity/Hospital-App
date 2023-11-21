import React from 'react'

export default function ConsultationForm() {
  return (
    <div className='container'>
        <h4 classNameName='display-4'>Book an Appointment</h4>

        <p>Please fill out the details below and a member of our team will get back to you to confirm your
        appointment booking.</p>

        <form className='m-3 justify-content-center'>
            <div className="form-group m-2">
                <label for="name">Patient's Name</label>
                <input type="text" className="form-control" placeholder="Patient's Name"  /> 
            </div>

            <div className="form-group m-2">
                <label for="phone">Phone Number</label>
                <input type="text" className="form-control" placeholder="Phone Number"/>
            </div>

            <div className="form-group m-2">
                <label for="email">Email Address</label>
                <input type="text" className="form-control" placeholder="Email Address"/>
            </div>
            
            <div className="form-group m-2"> 
                <label for="selectspecialty">Select Specialty</label> 
                <select className="form-control">
                <option>General Practioner</option>
                <option>Breast Clinic</option>
                <option>Eye Clinic</option>
                <option>Cardiology</option>
                <option>Dental Clinic</option> 
                <option>General Surgery</option>
                <option>Obstetrics and Gynaecology</option>
                <option>Psychiatry</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary m-2">Submit</button>
        </form>
    </div>
  )
}
