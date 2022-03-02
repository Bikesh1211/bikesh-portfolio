import React from 'react'
import styled from 'styled-components';
import ProjectList from './ProjectList';

function Projects() {
  return (
    <Container className='container'>

          <h1 className='project-heading'>Projects</h1>
          <h2>My Works</h2>
        <div className="row justify-content-around">

        <ProjectList imgURL='https://cdn.dribbble.com/users/6234/screenshots/16843254/media/16daa34ccde6dd68d699264d205c6487.png?compress=1&resize=1200x900&vertical=top' name='Simple Weather App' className=''/>
        <ProjectList imgURL='https://cdn.dribbble.com/users/6234/screenshots/17522453/media/73fc2a5e4b8584d5770df3ab24243d56.png?compress=1&resize=1200x900&vertical=top' name='Ecommerce'/>
        <ProjectList imgURL='https://cdn.dribbble.com/users/6047818/screenshots/17066956/media/03978b5ca48ad021b6dd4b58e63914d7.png?compress=1&resize=1200x900&vertical=top' name='Ecommerce'/>
        <ProjectList imgURL='https://cdn.dribbble.com/users/6047818/screenshots/15695514/media/fec8c9d6a86c3d8124dd2031f6673756.png?compress=1&resize=1200x900&vertical=top' name='Ecommerce'/>
        <ProjectList imgURL='https://cdn.dribbble.com/users/6047818/screenshots/16933165/media/1f55ed5881f5af555ed9f04a14349ffd.png?compress=1&resize=1200x900&vertical=top' name='Ecommerce'/>
        <ProjectList imgURL='https://cdn.dribbble.com/users/6047818/screenshots/17066956/media/03978b5ca48ad021b6dd4b58e63914d7.png?compress=1&resize=1200x900&vertical=top' name='Ecommerce'/>
        <ProjectList imgURL='https://cdn.dribbble.com/users/6047818/screenshots/16933165/media/1f55ed5881f5af555ed9f04a14349ffd.png?compress=1&resize=1200x900&vertical=top' name='Ecommerce'/>
        <ProjectList imgURL='https://cdn.dribbble.com/users/6234/screenshots/17522453/media/73fc2a5e4b8584d5770df3ab24243d56.png?compress=1&resize=1200x900&vertical=top' name='Ecommerce'/>
        </div>
        
    </Container>
  )
}

export default Projects
const Container = styled.div`
color: #fddf34;
h1{
  text-align: center;

}
h2{
  text-align: center;
    font-family: 'Kalam', cursive;
    color: #fddf34;
    margin-bottom: 50px;
}
.project-heading{
  font-family: 'Road Rage', cursive;
   color: #fddf34;
   font-size: 70px;
    letter-spacing: 5px;
    margin-top: 50px;
}


    
`