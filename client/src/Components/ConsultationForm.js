import React,{useState} from 'react'
import ConsultationData from './ConsultationData'

export default function ConsultationForm() {

    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")
    const [specialty,setSpecialty] = useState("")

    function handleSubmit(event){ 
        event.preventDefault()
        const formData = {
            name:name,
            phone:phone,
            email:email,
            specialty:specialty
        }

        fetch("/consultations", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then((r) => r.json())
            .then((data) => console.log(data)) 
            .catch(error => console.log(error))
    }

  return (
    <div className='container'>
        <h4 className='display-4'>Book an Appointment</h4>

        <p>Please fill out the details below and a member of our team will get back to you to confirm your
        appointment booking.</p>

        <form className='m-3 justify-content-center' onSubmit={handleSubmit} >
            <div className="form-group m-2">
                <label>Patient's Name</label>
                <input type="text" className="form-control" placeholder="Patient's Name"  onChange={(e) =>  setName(e.target.value)}/> 
            </div>

            <div className="form-group m-2">
                <label>Phone Number</label>
                <input type="text" className="form-control" placeholder="Phone Number"  onChange={(e) =>  setPhone(e.target.value)}/>
            </div>

            <div className="form-group m-2">
                <label>Email Address</label>
                <input type="text" className="form-control" placeholder="Email Address" onChange={(e) =>  setEmail(e.target.value)}/>
            </div>
            
            <div className="form-group m-2"> 
                <label >Select Specialty</label> 
                <input type="text" className="form-control" placeholder="Specialty eg General Practioner,Eye Clinic" onChange={(e) =>  setSpecialty(e.target.value)}/>
            </div>

            <button type="submit" className="btn btn-primary m-2">Submit</button>
        </form>

        <ConsultationData />
    </div>
  )
}
