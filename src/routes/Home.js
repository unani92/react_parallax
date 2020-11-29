import React, {useEffect} from 'react'
import './Home.scss'
import lax from 'lax.js'
import Rellax from 'rellax'
import ScrollOut from "scroll-out";

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
    ScrollOut({
      offset: 100
    })
  }, [])
  return (
    <div className="home">
      <section className="intro">
        <img className="gogh" src='/images/background.jpg' alt='background'/>
        <div className="rellax" data-rellax-speed="10">
          <h1 className="scroll-text">안녕들 하신가요??</h1>
          <button onClick={clickBtn}>나와라 고흐</button>
          <div className="text" style={{width: 500 + 'px'}}>
            <h2 data-scroll>고흐의 자화상</h2>
            <span data-scroll>이 그림은 고흐가 자기를 그린 그림인데 겁나 비쌉니다.</span>
          </div>

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
  window.addEventListener('scroll', e => {
    let img = document.querySelector('.gogh')
    let scrolly = window.scrollY
    if (scrolly >= window.innerHeight/10) {
      img.classList.add('clicked')
    } else {
      img.classList.remove('clicked')
    }
  })
  useEffect(() => {
    // lax JS config
    lax.init()
    lax.addDriver('scrollY', function() {
      return window.scrollY
    })
    lax.addDriver('sec2scrollY', function() {
      return window.innerHeight - window.scrollY - 100
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