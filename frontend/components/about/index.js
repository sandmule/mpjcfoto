import "./about.css";
import Gallery from '../photography/Gallery'

import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
        <main role="main">
          <section className="about">
            <div className="video-wrapper">
              <div className="video-wrapper">
              </div>
              <div className="about__statement">
                <p id="test" className="about__statement__1">MPJC Foto.</p>
                <p className="about__statement__2">Photo nonsense buzzwords more silly words.</p>
              </div>
              </div>
          </section>
          <Gallery />
        </main>
    );
  }
}

export default About;
