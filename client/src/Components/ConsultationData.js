import React, { useEffect, useState } from 'react'

export default function ConsultationData() {
    const [patient,setPatient] = useState()
    console.log(patient)

    useEffect( () => {
        fetch("/consultations")
        .then ( (r) => r.json())
        .then((data) => setPatient(data)) 
        .catch(error => console.log(error))
    },[]
    )
    

  return (
    <div>
      <h4>Consultations Booking</h4>
      <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Email</th>
                    <th scope="col">Specialty</th>
                    </tr>
                </thead>
                <tbody > 

        {patient?.map((r) => {
          return  (
                 <tr>
                    <th scope="row" key={r.id}>{r.id}</th>
                    <td>{r.name}</td>
                    <td>{r.number}</td>
                    <td>{r.email}</td> 
                    <td>{r.specialty}</td> 
                  </tr>
          )
        })}

                </tbody>
                </table>
    
    </div>
  )
}
