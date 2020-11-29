import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'

const Ul = styled.ul`
  display: flex;
  justify-content: center
  position: sticky;
  top: 0
`
const Li = styled.li`
  margin: 0 1rem;
  list-style-type: none;
  
  a {
    text-decoration: none;
  }
  a:visited {
    color: black
  }
`

const NavBar = () => {
  return (
    <Ul>
      <Li>
        <Link to='/'>Home</Link>
      </Li>
      <Li>
        <Link to="/about">About</Link>
      </Li>
    </Ul>
  )
}

export default withRouter(NavBar)