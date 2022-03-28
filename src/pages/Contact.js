import React from "react";

import "../styles/Contact.css";

function Contact() {
  return (
    <>
    <div className="contact-container">
       <h1 className="contact-header">We would love to hear from you!</h1>
       </div>
       <div>
         <p className= "contact-text"> Got Something you can not wait to share with us </p>
          <p className = "contact-text" > Be it Suggestions, feedback, business opportunities or
             even how our recipes made you hungry, we would love to hear from you!</p>
             </div>
     <div className="card">
  <h2>Contact Us</h2>
  <div className="row">
    <div className="col">
      <div className="form-group">
        < label > How do we address you ? </label>
        <input type="text"/>
      </div>
    </div>

    <div className="col">
      <div className="form-group">
        <label>Your E-mail</label>
        <input type="text"/>
      </div>
    </div>
    <div className="col">
      <div className="form-group">
        <label>What would you like to say?</label>
        <textarea></textarea>
      </div>
    </div>

    <div className="col">
      <input type="submit" value="Send" />
    </div>
  </div>
</div> 
    </>
  );
}

export default Contact;
