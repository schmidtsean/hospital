import React from 'react';
const Appointments = ({ doctor, eights, nines, patients}) =>{

    const displayPatient = (id) => {
        let fullName
        patients.map ((p) => {
            if (p.id === id){
                fullName = p.first_name + "" + p.last_name
            }
        })
        return fullName
    }

    return(
      <>
      <h1>Dr. {doctor.name} Appointments</h1>
      <a href={`/doctors/${doctor.id}/appointments/new`}>Add Appointment</a>
      <br />
     
      <h4>8:00 AM</h4>
      <p>{eights.length <= 0 ? "No Appointments" : ""}</p>
      { eights.map( (eight) => (
        <div>
          <h5>{displayPatient(eight.patient_id)}</h5>
          <a href={`/doctors/${doctor.id}/appointments/${eight.id}`}  data-method="delete">
            delete
          </a>
        </div>
      ))}
      <h4>9:00 AM</h4>
      <p>{nines.length <= 0 ? "No Appointments" : ""}</p>
      { nines.map( (nine) => (
        <div>
          <h5>{displayPatient(nine.patient_id)}</h5>
          <a href={`/doctors/${doctor.id}/appointments/${nine.id}`}  data-method="delete">
            delete
          </a>
        </div>
      ))}
    </>
  )
}
export default Appointments;