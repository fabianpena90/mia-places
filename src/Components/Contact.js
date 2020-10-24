import React from 'react';
import "./Contact.css"

function Contact(props) {
  return (
    <div className=" contact-form">
      <h1 className="ui center aligned header">Contact Us</h1>
      <form class="ui form">
        <div class="equal width fields">
          <div class="field">
            <label>First name</label>
          <div class="ui fluid input">
            <input type="text" placeholder="First name"/>
          </div>
        </div>
        <div class="field">
          <label>Last name</label>
        <div class="ui fluid input">
          <input type="text" placeholder="Last name"/>
        </div>
        </div>
        <div class="field">
        </div>
        </div>
        <div class="field">
          <label>Messsage</label>
          <textarea placeholder="Tell us more about you..." rows="3"></textarea>
        </div>
        <div class="field">
          <button class="ui button">Submit</button>
        </div>
      </form>

    </div>
  );
}

export default Contact;