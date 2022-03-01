import React from 'react'
import styled from 'styled-components';

function Projects(props) {
  return (
    <Container className='container'>

        <h1>{props.name}</h1>
    </Container>
  )
}

export default Projects

const Container = styled.div`
background-color: orange;
height: 300px;
width: 300px;
margin: 10px;

/* background-image: ${props => `url("https://bikesh1211.github.io/portfolio/img/bikesh.jpg")`} */


`