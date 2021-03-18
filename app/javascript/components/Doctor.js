import React from "react";


const Doctor = ({ doctor }) => {
    const { name, id } = doctor;
    return (
      <>
      
        <div className="textMove">
          <h1 id="docName">Dr. {name}</h1>
         
          <hr />
          <a href={`/doctors/${id}/appointments`}>Appointments</a>
          <hr />
          <hr />
          <a href={`/doctors/${id}/edit`}>Edit</a>
          <hr />
          <a href={`/doctors/${id}`} data-method="delete">
            delete this doctor
          </a>
        </div>
      </>
    );
}

export default Doctor;