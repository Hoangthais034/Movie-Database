import { useState } from 'react';
import Image from '../components/Image';
import Navigation from '../components/Navigation';
import '../shared/styles/header.css';

export default function Header() {


  return (
    <header className="header flex justify-between page-width items-center relative">
      <div className="header-logo">
        <Image
          src="/logo1.png"
          alt="Movie poster"
          className="logo-image shrink-0"
          loading="eager"
          fallback="/src/assets/react.svg"
        />
      </div>
      <Navigation />
    </header>
  );
}
