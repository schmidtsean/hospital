import React from 'react';

const DoctorEdit = ({ doctor }) => {
  const defaultName = doctor.name ? doctor.name : "";
  return(
    <div className="textMove">
      <h1> Edit Doctor Info Below: </h1>
      <form action={`/doctors/${doctor.id}`} method="post">
        <input type="hidden" name="_method" value="patch"/>
        Name: <input
        placeholder="Name"
        required
        type="text"
        defaultValue={defaultName}
        name="doctor[name]"
        />
      <button type="Submit">Update</button>
      </form>
    </div>
  )
}

export default DoctorEdit;