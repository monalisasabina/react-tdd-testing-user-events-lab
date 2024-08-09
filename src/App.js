import { useState } from "react";

function App() {

  const [email, setEmail] = useState("");
  const [name, setName]=useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [interests, setInterests] = useState({
    interest1: false,
    interest2: false,
    interest3: false,
  });


  const updateNameField = (e) => {
    setName(e.target.value);
  };
  const updateEmailField = (e) => {
    setEmail(e.target.value);
  };
  const updateInterestField = (e) => {
    setInterests({...interests, [e.target.id]: e.target.checked });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setShowMessage(true);
  };

  const displayForm = (
    <form title="signup" onSubmit={submitForm}>
      <h3>Newsletter Sign Up</h3>
      <div>
        <label htmlFor="name">Enter your name: </label>
        <input
          type="text"
          value={name}
          id="name"
          placeholder="name"
          onChange={updateEmailField}
        />
      </div>
      <div>
        <label htmlFor="email">Enter your email address: </label>
        <input
          type="text"
          value={email}
          id="email"
          placeholder="email address"
          onChange={updateEmailField}
        />
      </div>

      <div>
        <p>Select areas of interest:</p>
        <input
          type="checkbox"
          id="interest1"
          checked={interests.interest1}
          aria-checked={interests.interest1}
          onChange={updateInterestField}
        />
        <label htmlFor="interest1">Interest 1</label>
        <input
          type="checkbox"
          id="interest2"
          checked={interests.interest2}
          aria-checked={interests.interest2}
          onChange={updateInterestField}
        />
        <label htmlFor="interest2">Interest 2</label>
        <input
          type="checkbox"
          id="interest3"
          checked={interests.interest3}
          aria-checked={interests.interest3}
          onChange={updateInterestField}
        />
        <label htmlFor="interest3">Interest 3</label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );

  const displayMessage = (
    <div>
      <p>Thanks {name}! You are signed up for these newsletters:</p>
      <ul>
        {interests.interest1 ? <li>Interest 1</li> : null}
        {interests.interest2 ? <li>Interest 2</li> : null}
        {interests.interest3 ? <li>Interest 3</li> : null}
      </ul>
    </div>
  );

  return (
    <main>
      <h1>Hi, I'm Too Complicated</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      {showMessage ? displayMessage : displayForm}

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
    </main>
  );
 
  
}

export default App;
