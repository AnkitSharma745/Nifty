import React from "react";
import './bookADemo.css'
function BookADemo(){

  return (
    <>
   <div className="book-demo-container">
      <div className="book-demo-content">
        <h1>Book a Demo</h1>
        <form className="demo-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company:</label>
            <input type="text" id="company" name="company" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}
export default BookADemo;