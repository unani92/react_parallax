import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'

const Div = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99999;
`

const Ul = styled.ul`
  display: flex;
  justify-content: center
  top: 0
`
const Li = styled.li`
  margin: 0 1rem;
  list-style-type: none;
  
  a {
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }
  a:visited {
    color: white;
  }
`

const NavBar = () => {

  return (
    <Div>
      <Ul>
        <Li>
          <Link to='/'>Home</Link>
        </Li>
        <Li>
          <Link to="/about">About</Link>
        </Li>
      </Ul>
    </Div>
  )
}

export default withRouter(NavBar)