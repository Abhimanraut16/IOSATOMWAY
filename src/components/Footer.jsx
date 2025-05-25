import React from 'react'
import '../pages/css/footer.css'

function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="container footer__container">
          <div class="footer__1">
            <a href="index.html" class="footer">
              <h4>IOSAT</h4>
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div class="footer__2">
            <h4>Permalinks</h4>
            <ul class="permalink">
              <li><a href="index.html">Home</a></li>
              <li><a href="About.html">About</a></li>
              <li><a href="Courses.html">Courses</a></li>
              <li><a href="Contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="footer__3">
            <h4>Primmacy</h4>
            <ul class="primmacy">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms and conditions</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>
          <div class="footer__4">
            <h4>Coutact Us</h4>
            <div>
              <p>9851079343</p>
              <p>info@iosat</p>
            </div>
            <ul class="footer__socials">
              <li>
                <a href="#"><i class="uil uil-facebook"></i></a>
                <a href="#"><i class="uil uil-instagram-alt"></i></a>
                <a href="#"><i class="uil uil-whatsapp"></i></a>
                <a href="#"><i class="uil uil-twitter"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer