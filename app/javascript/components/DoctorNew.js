import React from "react";

const DoctorNew = ({ doctor }) => {
    const { name, errors } = doctor;
    const defaultName = name ? name : "";
    return (
      <>
        <h1>Add Doctor</h1>
        { errors && errors }
        <form action="/doctors" method="post">
          <input
            placeholder="Name"
            type="text"
            defaultValue={defaultName}
            name="doctor[name]"
          />
          <button type="submit">Add</button>
        </form>
      </>
    );
}

export default DoctorNew;