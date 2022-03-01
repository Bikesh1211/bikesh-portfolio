import React from 'react'
import styled from 'styled-components';
import ProjectList from './ProjectList';

function Projects() {
  return (
    <Container className='container'>
        
        <ProjectList imgURL='https://bikesh1211.github.io/portfolio/img/bikesh.jpg' name='Ecommerce'/>
        
    </Container>
  )
}

export default Projects
const Container = styled.div`

    
`