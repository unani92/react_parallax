import React, { useEffect } from 'react'
import './Home.scss'
import lax from 'lax.js'
import Rellax from 'rellax'

const clickBtn = (e) => {
  let img = document.querySelector('.gogh')
  if (img.classList.contains('clicked')) {
    e.target.innerText = '나와라 고흐'
  } else e.target.innerText = '잘가라 고흐'
  img.classList.toggle('clicked')
}

const MyComponent = () => {
  useEffect(() => {
    let rellax = new Rellax('.rellax')
  }, [])
  return (
    <div>
      <section className="intro">
        <img className="gogh" src='/images/background.jpg' alt='background'/>
        <div className="rellax" data-rellax-speed="10">
          <p className="scroll-text">안녕들 하신가요??</p>
          <button onClick={clickBtn}>나와라 고흐</button>
        </div>
      </section>
      <section className="anim rellax" data-rellax-speed="6">
        <h1 className="title lax">Animation</h1>
        <p className="desc"></p>
        <div className="box1 lax"/>
        <div className="box2 lax"/>
      </section>
    </div>
  )
}


const Home = () => {
  useEffect(() => {
    // lax JS config
    lax.init()
    lax.addDriver('scrollY', function() {
      return window.scrollY
    })
    lax.addDriver('sec2scrollY', function() {
      let val = window.innerHeight - window.scrollY - 100
      console.log(val)
      return val
    })
    lax.addElements(
      '.box1',
      {
        scrollY: {
          rotate: [
            [0, 1e9],
            [0, 1e9]
          ]
        }
      }
    )
    lax.addElements(
      '.box2',
      {
        sec2scrollY: {
          opacity: [
            [0, 300],
            [1, 0]
          ]
        }
      }
    )
    lax.addElements(
      '.title',
      {
        scrollY: {
          translateX: [
            ["elInY", "elCenterY", "elOutY"],
            [0, 'screenWidth/2', 'screenWidth']
          ]
        }
      }
    )
    lax.addElements('.desc', {}, {
      onUpdate: function (driverVal, domElem) {

        var arr = '이런것도 해봤는데 어때염??? 괜춘한가여?'.split('')
        const scrollY = driverVal.scrollY[0]
        const oCount = Math.floor((scrollY / 10) + 1)
        if (oCount >= 52) {
          const oString = arr.slice(0,oCount-52).join("")
          domElem.innerText = oString
        } else {
          domElem.innerText = ''
        }
      }
    })
  }, [])
  return (
    <MyComponent/>
  )
}

export default Home