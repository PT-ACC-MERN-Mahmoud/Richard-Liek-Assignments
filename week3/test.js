// create a form that that sends a request with name and email
// to the server and displays the response
// 1. create a form
// 2. create a button
// 3. create a text input
// 4. create a label
// 5. create a paragraph
// 6. create a function that sends the request
// 7. create a function that displays the response
// 8. add an event listener to the button
// 9. add an event listener to the form
// 10. add an event listener to the input
// 11. add an event listener to the label
// 12. add an event listener to the paragraph

//function that creates useState for name and email
//function that sends the request
//function that displays the response

import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
