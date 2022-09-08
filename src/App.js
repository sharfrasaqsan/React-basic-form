import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [fname, setFname] = useState("");

  const [lname, setLname] = useState("");

  const [email, setEmail] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (e) => {
    setFname(e.target.value);
  };

  const handleLasttNameInputChange = (e) => {
    setLname(e.target.value);
  };

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fname && lname && email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">
            Success! Thank you for register!
          </div>
        ) : null}
        <input
          onChange={handleFirstNameInputChange}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={fname}
        />
        {submitted && !fname ? <span>Please enter first name</span> : null}

        <input
          onChange={handleLasttNameInputChange}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={lname}
        />
        {submitted && !lname ? <span>Please enter last name</span> : null}

        <input
          onChange={handleEmailInputChange}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
        />
        {submitted && !email ? <span>Please enter email</span> : null}

        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default App;
