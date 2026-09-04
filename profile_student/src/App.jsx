
import React from "react";

function Student(props) {
  return (
    <div>
      <h2>👨‍🎓 Student Profile</h2>
      <p><b>Name:</b> {props.name}</p>
      <p><b>Course:</b> {props.course}</p>
      <p><b>College:</b> {props.college}</p>
      <button>View Profile</button>
      <hr />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>🎓 Student Information</h1>

      <Student
        name="Udai Kumar"
        course="B.Tech Computer Science"
        college="GIET"
      />

      <Student
        name="Rahul Kumar"
        course="B.Tech Information Technology"
        college="ABC College"
      />
    </div>
  );
}

export default App;

