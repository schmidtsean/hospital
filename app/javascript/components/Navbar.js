import React from "react";

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <a href="/doctors">Doctor</a>
      </li>
      <li>
        <a href="/doctors/new">New Doctor</a>
      </li>
      <li>
        <a href="/patients">Patient</a>
      </li>
      <li>
        <a href="/patients/new">New Patient</a>
      </li>
    </ul>
  </nav>
)

export default Navbar;