import React from 'react';
import './contactStyle.css';

// import './ContactUs.css';

export default function ContactUs() {

  return (
    <div className="contactFormContainer">

      <form className="contactForm" name="contact" action="POST" data-netlify="true">
          <h1>Contact form</h1>
          <span>Fill the form in decent manner</span>
          <br />

          <label>Name</label>
          <input type="text" name="name" placeholder="Name" required/>

          <br />

          <label>Email</label>
          <input type="email" name="email"  placeholder="Email" required/>

          <br />

          <label>Subject</label>
          <input type="text" name="subject" placeholder="Subject" required/>

          <br />

          <label>Message</label>
          <textarea name="message" placeholder="Enter your message" required/>

          <br />

          <div className="captcha"><div data-netlify-recaptcha="true"></div></div>

          <input type="submit" value="Send Message" />
      </form>
    </div>
  );
}