import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Aneesh Komanduri</h2>
        <p><a href="mailto:akomanduri124@gmail.com">akomanduri124@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Aneesh.
            I am a student at the <a href="https://www.uark.edu/">University of Arkansas</a> majoring in Computer Engineering
            and Applied Mathematics. I love solving complex and intricate mathematical problems. I enjoy programming and building websites in my free time.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}><a href={s.link} target="_blank"><FontAwesomeIcon icon={s.icon} /></a></li> 
        ))}
      </ul>
      <p className="copyright">&copy; Aneesh Komanduri <Link to="/">aneeshkomanduri.me</Link>.</p>
    </section>
  </section>
);

export default Nav;
