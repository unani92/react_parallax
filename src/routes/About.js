import React, { useEffect } from 'react'
import './About.css'

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
      <button className='followbtn'>Launch It</button>
    </div>
  )
}

export default About