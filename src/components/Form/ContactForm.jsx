
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./ContactForm.css"

function ContactForm() {
  const [state, handleSubmit] = useForm("meqnrznp");
  if (state.succeeded) {
      return <p className='succeedSubmit'>Thanks for joining!</p>

      // <div className="card" style={{color: "red"}} >

      // </div>
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">How do we address you?</label>
      <input 
      id="name"
      type="text"
      name="name"
       />
         <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <label htmlFor="email">
        Your E-mail
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">What would you like to say?</label>
      <textarea
        id="message"
        name="message"
        required
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function Form() {
  return (
    <ContactForm />
  );
}
export default Form;
