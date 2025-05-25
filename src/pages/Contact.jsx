import React from 'react'
import './css/Contact.css'
import logo from '../assets/c7.jpg'
function Contact() {
  return (
    <div>
      <section className="contact">
        <div className="container contact__container">
          <aside className="contact__aside">
            <div className="aside__image">
              <h2>IOSAT</h2>
            </div>
            <h2>Countact Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Itaque, blanditiis eum provident consequatu
            </p>
            <ul className="contact__derails">
              <li>
              </li><li className="uil uil-phone-time" />
              <h5>+9851079343</h5>
              <li className="uil uil-envelope">
                <h5>info@gmail.com</h5>
              </li>
              <li className="uil uil-location-point" />
              <h5>New Baneshwhor</h5>
            </ul>
            <ul className="footer__socials">
              <li>
                <a href="#"><i className="uil uil-facebook" /></a>
                <a href="#"><i className="uil uil-instagram-alt" /></a>
                <a href="#"><i className="uil uil-whatsapp" /></a>
                <a href="#"><i className="uil uil-twitter" /></a>
              </li>
            </ul>
          </aside>
          <form className="contact__form">
            <div className="form__name">
              <input type="text" name="First Name" placeholder="First Name" required />
              <input type="text" name="Last Name" placeholder="Last Name" required />
            </div>
            <input type="text" name="Email Address" placeholder="Your Email Address" required />
            <textarea name="Message" rows={7} placeholder="Message" required defaultValue={""} />
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>


    </div>
  )
}

export default Contact