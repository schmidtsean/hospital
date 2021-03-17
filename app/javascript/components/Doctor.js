import React from "react";


const Doctor = ({ doctor }) => {
    const { name, id } = doctor;
    return (
      <>
      
        <div>
          <h1>Dr. {name}</h1>
         
          <hr />
          <a href={`/doctors/${id}/appointments`}>Appointments</a>
          <hr />
          <a href={`/doctors/${id}`} data-method="delete">
            delete this doctor
          </a>
        </div>
      </>
    );
}

export default Doctor;