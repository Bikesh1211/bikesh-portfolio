import React from 'react'
import styled from 'styled-components';

function SideNav() {
  return (
    <Container>
      <Link>

      <h1>Porfolio</h1>

      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
      </Link>
    </Container>
  )
}

export default SideNav

const Link = styled.div`
  
`
const Container = styled.div`
  background-color: #24263A;
  width: 200px;
  height: 100vh;
  display: flex;
  align-items: center;
  /* position: fixed; */

  li{
    list-style: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    padding: 20px;
  }
  li:hover{
    background-color: white;
    color: #24263A;
    border-radius: 10px;

  }
`