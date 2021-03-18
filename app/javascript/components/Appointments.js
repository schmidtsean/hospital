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
      { eights.map( (e) => (
        <div>
          <h5>{displayPatient(e.patient_id)}</h5>
          <a href={`/doctors/${doctor.id}/appointments/${e.id}`}  data-method="delete">
            delete
          </a>
        </div>
      ))}
      <h4>9:00 AM</h4>
      <p>{nines.length <= 0 ? "No Appointments" : ""}</p>
      { nines.map( (n) => (
        <div>
          <h5>{displayPatient(n.patient_id)}</h5>
          <a href={`/doctors/${doctor.id}/appointments/${n.id}`}  data-method="delete">
            delete
          </a>
        </div>
      ))}
    </>
  )
}
export default Appointments;