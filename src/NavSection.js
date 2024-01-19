import React from 'react';
import blog from './blog.svg';

export default function NavSection() {
  return (
    <div className=''>
      <nav class="navbar navbar-expand-lg  navbar-light bg-light">
        <div class="container-fluid d-flex">
          <div className="align-items-center">
            <a class="" href="#" className="text-decoration-none">
              <img src={blog} className="" width={100}></img>
              <h3 className='d-inline-block'>Blog</h3>
            </a>
          </div>
          <button class="navbar-toggler" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#navbarNav" 
                  aria-controls="navbarNav" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end"
                id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link fs-4" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-4" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-4" href="#services">
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
