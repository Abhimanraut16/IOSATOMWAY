import React from 'react'
import './css/services.css'
function Services() {
  return (
    <div>
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

    </div >
  )
}

export default Services