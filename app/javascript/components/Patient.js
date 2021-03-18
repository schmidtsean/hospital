import React from "react";

const Patient = ({ patient }) => {
    const { id, first_name, last_name } = patient;
    return (
      <>
        <div className="textMove">
          <h1>{first_name} {last_name}</h1>
          <hr />
          <a href={`/patients/${id}`}></a>
          <hr />
          <a href={`/doctors/${id}/appointments`}>Appointments</a>
          <hr />
          <a href={`/patients/${id}/edit`}>Edit</a>
         <hr />
          <a href={`/patients/${id}`} data-method="delete">
            Patient delete
          </a>
        </div>
      </>
    );
}

export default Patient;