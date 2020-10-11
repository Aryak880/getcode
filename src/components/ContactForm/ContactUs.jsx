import React from 'react';
import emailjs from 'emailjs-com';
import './contactStyle.css';

// import './ContactUs.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_cgdy16h', 'template_0q5sk95', e.target, 'user_xvZfgihw5Zh22WtD2qKzh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
      alert("Email has been sended");
  }

  return (
    <div className="contactFormContainer">

      <form className="contactForm" onSubmit={sendEmail}>
          <h1>Contact form</h1>
          <span>Fill the form in disent manner</span>
          <br />

          <label>Name</label>
          <input type="text" name="name" placeholder="Name" required/>

          <br />

          <label>Email</label>
          <input type="email" name="email" placeholder="Email" required/>

          <br />

          <label>Subject</label>
          <input type="text" name="subject" placeholder="Subject" required/>

          <br />

          <label>Message</label>
          <textarea name="message" placeholder="Enter your message" required/>

          <br />

          <input type="submit" value="Send message" />
      </form>
    </div>
  );
}