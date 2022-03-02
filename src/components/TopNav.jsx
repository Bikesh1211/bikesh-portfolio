import React from 'react'
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';


function TopNav() {
  return (
    <Container>
<Slide right>
        <Nav>

        <ul>

            <li><a href="#home">Home</a></li>
            <li><a href="#skill">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#contact">About</a></li>
        </ul>
        
        </Nav>
</Slide>
    </Container>
  )
}

export default TopNav
const Nav = styled.div`
background-color: #24263A;
border-radius: 10px;

`
const Container = styled.div`
z-index: 1;
background-color: #1D1E2C;
font-family: 'Satisfy', cursive;
padding-top: 10px;
border-radius: 10px;
margin-left: auto;
margin-right: auto;
width: 90%;
margin-top: 30px;
position: sticky;
top: 0;
text-align: center;
    ul{
        display: flex;
        justify-content: center;
    }
    
    li{
        margin: 10px;
        list-style: none;
    }
    a{
        color: white;
        text-decoration: none;
        padding: 15px;
        margin: 0;

    }
    a:hover{
        background: white;
        color: #1D1E2C;
        border-radius: 10px;
    }

    @media (max-width: 678px) {
        display: none;
    }
`