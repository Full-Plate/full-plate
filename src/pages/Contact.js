import React from "react";

import "../styles/Contact.css";



function Contact() {
  return (
    <div className="contact">
    <h1>We´d love to hear from you!</h1>
    <p>Got Something you can´t wait to share with us?
    </p>
    < br />
    <p>Be it Suggestions, feedback, business opportunities or even how our recipes made you hungry, we´d love to hear from you!</p>
< container >
<form>
     
  <input name="name" type="text" class="feedback-input" placeholder="How do we address you?" />   
  <input name="email" type="text" class="feedback-input" placeholder="Your Email" />
  <textarea name="text" class="feedback-input" placeholder="What would you like to say?"></textarea>
  <input type="submit" value="Send"/>
  
</form>
</container> 

      
    </div>
  );
}

export default Contact;
