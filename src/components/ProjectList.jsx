import React from 'react'
import styled from 'styled-components';
import man from './img/Bikesh.png';

function Projects(props) {
  return (
    <Container className='container'>

        <p>{props.name}</p>
        <a href="https://bikesh1211.github.io/weather-web/" target="_blank">

        <img src={props.imgURL} alt="" />
        </a>
    </Container>
  )
}

export default Projects

const Container = styled.div`
background-color: #24263A;
height: 300px;
width: 300px;
margin: 10px;
margin-bottom: 50px;
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    img{
      width: 100%;
    }

    &:hover{
      background-color: #fddf34;
      color: #24263A;
    }
    p{
      font-size: 23px;
      text-align: center;
    }
    @media (max-width: 700px) {
      .container{
        margin-top: 500px;
      }
    }


`