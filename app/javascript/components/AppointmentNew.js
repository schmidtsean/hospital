import React from 'react';

const AppointmentNew = ({ doctor, appointment, patients }) => {
  const { role, errors, patient_id } = appointment;
  const defaultRole = role ? role : "";
  const defaultPatient = patient_id ? patient_id : "";
  // const defaultTime = time_id ? time
  return(
    <div className="textMove">
      <h1>Add Appointment</h1>
      { errors && errors }
      <form action={`/doctors/${doctor.id}/appointments`} method="post">
     
        <label for="role">Choose a time:</label>
        <select 
          name="appointment[role]" 
          id="role" 
          defaultValue={defaultRole}
        >
         <option value="eight">8:00 AM</option>
          <option value="nine">9:00 AM</option>
          
        </select><button type="submit">Submit</button>
        <br />
        <label for="patient_id">Choose a patient:</label>
        <select 
          name="appointment[patient_id]" 
          id="patient_id" 
          defaultValue={defaultPatient}
        >
         { patients.map((p) => (
           <option value={p.id}>
             {`${p.first_name} ${p.last_name}`}
           </option>
         ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AppointmentNew;