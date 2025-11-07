import React from 'react';
import './Makeup.css';

// Header: muestra el título, una breve descripción y una imagen hero.
export default function Header() {
  const hero = process.env.PUBLIC_URL + '/img/2d45.avif';
  return (
    <header className="makeup-header makeup-hero">
      <div className="hero-inner">
        <img src={hero} alt="Maquillaje hero" className="hero-image" />
        <div className="hero-text">
          <h1>Bobble Maquillaje</h1>
          
        </div>
      </div>
    </header>
  );
}
