import React from "react";

const Patients = ({ patients }) => {
  return (
    <div className="textMove">
      <h1>Patients</h1>
      <a className="addPt" href="/patients/new">Add Patient</a>
      <br />
      <h2>{ patients.length <= 0 ? "No Patients" : "" }</h2> 
      { patients.map((patient) => (
        <div>
          <a href={`/patients/${patient.id}`}>{patient.first_name} {patient.last_name}</a>
        </div>
      ))}
    </div>
  )
}

export default Patients;