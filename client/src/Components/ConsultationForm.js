import React,{useState} from 'react'

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
        <h4 classNameName='display-4'>Book an Appointment</h4>

        <p>Please fill out the details below and a member of our team will get back to you to confirm your
        appointment booking.</p>

        <form className='m-3 justify-content-center' onSubmit={handleSubmit} >
            <div className="form-group m-2">
                <label for="name">Patient's Name</label>
                <input type="text" className="form-control" placeholder="Patient's Name"  onChange={(e) =>  setName(e.target.value)}/> 
            </div>

            <div className="form-group m-2">
                <label for="phone">Phone Number</label>
                <input type="text" className="form-control" placeholder="Phone Number"  onChange={(e) =>  setPhone(e.target.value)}/>
            </div>

            <div className="form-group m-2">
                <label for="email">Email Address</label>
                <input type="text" className="form-control" placeholder="Email Address" onChange={(e) =>  setEmail(e.target.value)}/>
            </div>
            
            <div className="form-group m-2"> 
                <label for="selectspecialty" onChange={(e) =>  setSpecialty(e.target.value)}>Select Specialty</label> 
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
