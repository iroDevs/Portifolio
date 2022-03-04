import React from 'react'
import NavBar from './NavBar';

import './HeroPage.css'
import 'animate.css';

export default function HeroPage() {
  return (
    <div className="hero-page container-fluid">
      <NavBar />
     <div className="container hero-page-container-titles">
    <h1 className="display-1 hero-page-title">Web Developer</h1>
    <h2 className="display-4 hero-page-sub-title">Pedro Henrque Loures Oliveira</h2>
    <p className="lead hero-page-paragh">FullStack Developer</p>
      </div>
    </div>
  )
}
