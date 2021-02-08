import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const submitRequest = async (e) => {
    e.preventDefault();
    console.log({ email, subject, message });
    axios
      .post("/", {
        headers: { 'content-type': 'application/json' },
        data: JSON.stringify ({
        email: email,
        subject: subject,
        message: message
      })
    })   
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    
      <div>
        <form onSubmit={submitRequest}>
          <h2>Contact me via email</h2>
          <div>
            <label style={{ margin: 10}}>Your Email</label>
            <input
              style={{ width: 220, display:"center" }}
              type="text"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label style={{ margin: 10}}>Subject</label>
            <input
              style={{ width: 220, display:"center"}}
              type="text"
              name="subject"
              value={subject}
              required
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div>
            <label style={{ margin: 10}} htmlFor="message">
              Message to be sent
            </label>
            <textarea
              style={{ width: 220, padding: 50,display:"center" }}
              name="message"
              type="text"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Send A Request</button>
          </div>
        </form>
      </div>
  );
};

export default ContactForm;
