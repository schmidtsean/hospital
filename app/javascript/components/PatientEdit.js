import React from 'react';

const PatientEdit = ({ patient }) => {
  const { first_name, last_name, id } = patient
  const defaultFName = first_name ? first_name : ""
  const defaultLName = last_name ? last_name : ""
  return(
    <>  
      <h1>Edit Patient</h1>
      <form action={`/patients/${id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <input
          placeholder="First Name"
          type="text"
          defaultValue={defaultFName}
          name="patient[first_name]"
        />
        <input
          placeholder="Last Name"
          type="text"
          defaultValue={defaultLName}
          name="patient[last_name]"
        />
        <button type="submit" name="action">Update
  </button>
      </form>
    </>
  )
}
export default PatientEdit;