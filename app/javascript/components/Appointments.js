import React from 'react';
const Appointments = ({ doctor, appointments, patients}) =>{

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
        <p>{appointments.length <= 0 ? "No Appointments" : ""}</p>
        { appointments.map( (e) => (
          <div>
            <h5>{displayPatient(e.patient_id)}</h5>
            <a href={`/doctors/${doctor.id}/appointments/${e.id}`}  data-method="delete">
              delete
            </a>
          </div>
        ))}
    </>
  )
}
export default Appointments;