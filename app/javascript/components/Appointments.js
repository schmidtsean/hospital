import React from 'react';
const Appointments = ({ doctor, dates, times, patients}) =>{

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
     
      <h3>Date</h3>
      { dates.map( (date) => (
        <div>
          <p>{displayPatient(date.patient_id)}</p>
          <a href={`/doctors/${doctor.id}/appointments/${date.id}`} data-method="delete">
            delete
          </a>
        </div>
      ))}
      <h3>Time</h3>
      { times.map( (tim) => (
        <div>
          <p>{displayPatient(tim.patient_id)}</p>
          <a href={`/doctors/${doctor.id}/appointments/${tim.id}`} data-method="delete">
            delete
          </a>
        </div>
      ))}
    </>
  )
}
export default Appointments;