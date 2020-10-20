import React from 'react';
import './contactStyle.css';

// import './ContactUs.css';

export default function ContactUs() {

  return (
    <div className="contactFormContainer">

      <form className="contactForm"  method="post" data-netlify="true">
          <h1>Contact form</h1>
          <span>Fill the form in decent manner</span>
          <br />

          <label>Name</label>
          <input type="text" name="name" id="name" placeholder="Name" required/>

          <br />

          <label>Email</label>
          <input type="email" name="email" id="email" placeholder="Email" required/>

          <br />

          <label>Subject</label>
          <input type="text" name="subject" id="message" placeholder="Subject" required/>

          <br />

          <label>Message</label>
          <textarea name="message" placeholder="Enter your message" required/>

          <br />

          <div className="captcha" data-netlify-recaptcha="true"></div>

          <input type="submit" value="Send Message" />
      </form>
    </div>
  );
}