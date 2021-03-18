import React from "react";

const PatientNew = ({ patient }) => {
  const { first_name, last_name, errors } = patient;
  const defaultFirstName = first_name ? first_name : "";
  const defaultLastName = last_name ? last_name : "";
  return (
  <div className="textMove">
    <h1>Add Patient</h1>
    { errors && errors }
    <form action="/patients" method="post">
      <input
        placeholder="First Name"
        type="text"
        defaultValue={defaultFirstName}
        name="patient[first_name]"
      />
      <input
        placeholder="Last Name"
        type="text"
        defaultValue={defaultLastName}
        name="patient[last_name]"
      />
      <button type="submit">Add</button>
    </form>
    </div>
  );
}

export default PatientNew;