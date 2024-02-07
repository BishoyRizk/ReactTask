import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return <>
  
  <nav class="navbar  navbar-expand-lg bg-dark navbar-dark">
  <div class="container">
    <Link class="navbar-brand" to={'/'}>StartFrameWork</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink class="nav-link "  activeclassname="active" aria-current="page" to={'About'}>About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link " aria-current="page" to={'Portfolio'}>Portfolio</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link " aria-current="page" to={'Contact'}>Contact</NavLink>
        </li>
      
       </ul>
    </div>
  </div>
</nav>
  </>
}
