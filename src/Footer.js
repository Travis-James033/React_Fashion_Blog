import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer className="Footer">
      <nav role="navigation" aria-label="Footer Navigation">
        <a href="index.html">Home</a>
        |
        <a href="#">Women’s</a>
        |
        <a href="#">Men’s</a>
        |
        <a href="#">On the Street</a>
        |
        <a href="#">The Catwalk</a>
        |
        <a href="#">AdWatch</a>
        |
        <a href="#">About</a>
        |
        <a href="#">Tips</a>
      </nav>
      <p>&copy; 2013 Valet Industries, Inc</p>
    </footer>
  );
}

export default Footer;
