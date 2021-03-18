import React from "react";
import Doctors from "./Doctors";

const Patient = ({ patient, doctors }) => {
    const { id, first_name, last_name } = patient;
    return (
      <>
        <div className="textMove">
          <h1>{first_name} {last_name}</h1>
          <hr />
          <a href={`/patients/${id}`}></a>
          <hr />
          <h3> {first_name} {last_name}'s Doctors</h3>
          <ul>
            { doctors.map( (d) => (
              <li>
                <h6> <a href={`/doctors/${d.id}`}>{d.name}
                  </a></h6 >
              </li>
            ))}
          </ul>
          <hr />
          <a href={`/patients/${id}/edit`}>Edit</a>
         <hr />
          <a href={`/patients/${id}`} data-method="delete">
            Delete Patient
          </a>
        </div>
      </>
    );
}

export default Patient;