import React from 'react'
import logo from '../assets/c7.jpg'
import team1 from '../assets/c3.jpg'
import team2 from '../assets/c4.jpg'
import team3 from '../assets/c6.jpg'
import team4 from '../assets/c7.jpg'
import './css/about.css'
function Home() {
  return (
    <div>
      <section className="about__achievements">
        <div className="container about__achievements-container">
          <div className="about__achievements-left">
            <img src={logo} alt='' />
          </div>
          <div className="about__achievements-right">
            <h1>Acheivements</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero consequuntur sint eveniet iste provident odio quae corporis.
              Quia molestiae autem rem totam. Minus impedit autem nisi cumque, quam officiis animi.
            </p>
            <div className="acheivements__cards">
              <article className="achievement__card">
                <span className="acheivement__icon">
                  <i className="uil uil-video" />
                </span>
                <h3>450+</h3>
                <p>Visiting</p>
              </article>
              <article className="achievement__card">
                <span className="acheivement__icon">
                  <i className="uil uil-users-alt" />
                </span>
                <h3>79000+</h3>
                <p>Students</p>
              </article>
              <article className="achievement__card">
                <span className="acheivement__icon">
                  <i className="uil uil-award" />
                </span>
                <h3>26+</h3>
                <p>Awards</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="container team__container">
          <article className="team__member">
            <div className="team__member-image">
              <img src={team1} alt />
            </div>
            <div className="team__member-info">
              <h4>Shatta Wala</h4>
              <p>Expert Tupor</p>
            </div>
            <div className="team__member-socials">
              <a href="https://instagram.com" target="_blank"><i className="uil uil-instagram" /></a>
              <a href="https://twitter.com" target="_blank"><i className="uil uil-twitter" /></a>
              <a href="https://facebook.com" target="_blank"><i className="uil uil-facebook-f" /></a>
            </div>
          </article>
          <article className="team__member">
            <div className="team__member-image">
              <img src={team4} alt />
            </div>
            <div className="team__member-info">
              <h4>Health Team</h4>
              <p>Expert Tupor</p>
            </div>
            <div className="team__member-socials">
              <a href="https://instagram.com" target="_blank"><i className="uil uil-instagram" /></a>
              <a href="https://twitter.com" target="_blank"><i className="uil uil-twitter" /></a>
              <a href="https://facebook.com" target="_blank"><i className="uil uil-facebook-f" /></a>
            </div>
          </article>
          <article className="team__member">
            <div className="team__member-image">
              <img src={team3} alt />
            </div>
            <div className="team__member-info">
              <h4> Education Team</h4>
              <p>Expert Tupor</p>
            </div>
            <div className="team__member-socials">
              <a href="https://instagram.com" target="_blank"><i className="uil uil-instagram" /></a>
              <a href="https://twitter.com" target="_blank"><i className="uil uil-twitter" /></a>
              <a href="https://facebook.com" target="_blank"><i className="uil uil-facebook-f" /></a>
            </div>
          </article>
          <article className="team__member">
            <div className="team__member-image">
              <img src={team4} alt />
            </div>
            <div className="team__member-info">
              <h4>IST Manger</h4>
              <p>Expert Tupor</p>
            </div>
            <div className="team__member-socials">
              <a href="https://instagram.com" target="_blank"><i className="uil uil-instagram" /></a>
              <a href="https://twitter.com" target="_blank"><i className="uil uil-twitter" /></a>
              <a href="https://facebook.com" target="_blank"><i className="uil uil-facebook-f" /></a>
            </div>
          </article>
          <article className="team__member">
            <div className="team__member-image">
              <img src={team1} alt />
            </div>
            <div className="team__member-info">
              <h4>Research Manger</h4>
              <p>Expert Tupor</p>
            </div>
            <div className="team__member-socials">
              <a href="https://instagram.com" target="_blank"><i className="uil uil-instagram" /></a>
              <a href="https://twitter.com" target="_blank"><i className="uil uil-twitter" /></a>
              <a href="https://facebook.com" target="_blank"><i className="uil uil-facebook-f" /></a>
            </div>
          </article>
          <article className="team__member">
            <div className="team__member-image">
              <img src={team4} alt />
            </div>
            <div className="team__member-info">
              <h4>Health Directr</h4>
              <p>Expert Tupor</p>
            </div>
            <div className="team__member-socials">
              <a href="https://instagram.com" target="_blank"><i className="uil uil-instagram" /></a>
              <a href="https://twitter.com" target="_blank"><i className="uil uil-twitter" /></a>
              <a href="https://facebook.com" target="_blank"><i className="uil uil-facebook-f" /></a>
            </div>
          </article>
          <article className="team__member">
            <div className="team__member-image">
              <img src={team3} alt />
            </div>
            <div className="team__member-info">
              <h4>Researcher</h4>
              <p>Expert Tupor</p>
            </div>
            <div className="team__member-socials">
              <a href="https://instagram.com" target="_blank"><i className="uil uil-instagram" /></a>
              <a href="https://twitter.com" target="_blank"><i className="uil uil-twitter" /></a>
              <a href="https://facebook.com" target="_blank"><i className="uil uil-facebook-f" /></a>
            </div>
          </article>

          <article className="team__member">
            <div className="team__member-image">
              <img src={team1} alt />
            </div>
            <div className="team__member-info">
              <h4>Researcher</h4>
              <p>Expert Tupor</p>
            </div>
            <div className="team__member-socials">
              <a href="https://instagram.com" target="_blank"><i className="uil uil-instagram" /></a>
              <a href="https://twitter.com" target="_blank"><i className="uil uil-twitter" /></a>
              <a href="https://facebook.com" target="_blank"><i className="uil uil-facebook-f" /></a>
            </div>
          </article>
        </div>
      </section>

      <section className="categories">
        <div className=" categories__container">
          <div className="categories__left">
            <h1>FORE AREAS OF FOCUS</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptates sed dignissimos
              id repellendus consequatur minus, beatae asperiores illo ea maiores vitae tempora quibusdam esse
              vel unde laboriosam.
            </p>
            <a href="#" className="btn">Learn More</a>
          </div>
          <div className="categories__right">
            <article className="category">
              <span className="category__icon"><i className="uil uil-bitcoin-circle" /></span>
              <h5>Blockain</h5>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit id repellendus.</p>
            </article>
            <article className="category">
              <span className="category__icon"><i className="uil uil-image-resize-square" /></span>
              <h5>Graphic Design</h5>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit id repellendus.</p>
            </article>
            <article className="category">
              <span className="category__icon"><i className="uil uil-bitcoin-circle" /></span>
              <h5>Finance</h5>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit id repellendus.</p>
            </article>
            <article className="category">
              <span className="category__icon"><i className="uil uil-megaphone" /></span>
              <h5>Maeketing</h5>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit id repellendus.</p>
            </article>
            <article className="category">
              <span className="category__icon"><i className="uil uil-music" /></span>
              <h5>Music</h5>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit id repellendus.</p>
            </article>
            <article className="category">
              <span className="category__icon"><i className="uil uil-puzzle-piece" /></span>
              <h5>Business</h5>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit id repellendus.</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home