import React, { useEffect } from 'react'
import './About.css'
import { Link } from 'react-router-dom'
// import { gsap } from 'gsap'

const About = () => {
  useEffect(() => {
    let btn = document.querySelector('button')
    document.addEventListener('pointermove', e => {
      let { clientX, clientY } = e
      btn.style.transform = `translate(${clientX-50}px, ${clientY-20}px)`;
      btn.style.display = 'block'
    })
  })
  return (
    <div className='about'>
      <button className='followbtn'>
        <Link to="/">Launch It</Link>
      </button>
    </div>
  )
}

export default About