import React, { useEffect } from 'react'
import './Home.scss'
import lax from 'lax.js'
import Rellax from 'rellax'

const MyComponent = () => {
  useEffect(() => {
    let rellax = new Rellax('.rellax')
  }, [])
  return (
    <div>
      <section className="intro">
        <p className="rellax scroll-text" data-rellax-speed="6">Scroll Down</p>
      </section>
      <section className="anim">
        <h1 className="title lax">Animation</h1>
        <p className="desc"></p>
        <div className="box1 lax"></div>
        <div className="box2 lax"></div>
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
      return window.innerHeight - window.scrollY
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
            [0, 100],
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
        if (oCount >= 72) {
          const oString = arr.slice(0,oCount-72).join("")
          domElem.innerText = oString
        } else {
          domElem.innerText = ''
        }
      }
    })
  }, [])
  return (
    <MyComponent></MyComponent>
  )
}

export default Home