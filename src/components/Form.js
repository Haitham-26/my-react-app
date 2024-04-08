import React from "react";
import "../css/main.css";
export default function Form() {
  const [firstName, setFirst] = React.useState("");
  const [LastName, setLast] = React.useState("");
  const [email, setEmail] = React.useState("");
  return (
    <div className="all">
      <form className="form">
        <label htmlFor="firstName" className="d-block">
          First Name
        </label>
        <input
          type="text"
          id="name"
          value={firstName}
          onChange={(e) => setFirst(e.target.value)}
        />
        <label htmlFor="lastName" className="d-block">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          value={LastName}
          onChange={(e) => setLast(e.target.value)}
        />
        <label htmlFor="email" className="d-block">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" className="sbmt" />
      </form>
      <div className="result">
        <span id="nn">
          First name is: <span className="d-i">{firstName}</span>
        </span>
        <span>
          Last name is: <span className="d-i">{LastName}</span>
        </span>
        <span>
          Email is: <span className="d-i">{email}</span>
        </span>
      </div>
    </div>
  );
}
