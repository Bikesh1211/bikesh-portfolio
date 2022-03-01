import React from 'react'
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';




function Details() {
  return (
    <Container>
          <div className="details container">
        <Zoom>
          <h3>Hi, I am </h3>
          

        <h1>Bikesh Chaudhary</h1>
        </Zoom>

        <h2 >Fullstack Developer | Mern Stack</h2>



        <p id='description'>Hard-working listing programmer with a flair for creating
      elegant solutions in the least amount of time. Looking to use
        my programming skills to help boost Pipe</p>

        <a href=""><i className="fa-brands fa-github"></i></a>
        <a href=""><i className="fa-brands fa-linkedin"></i></a> 
        <a href=""><i className="fa-brands fa-instagram"></i></a>

          </div>
          <button className="resume-btn">View Resume</button>

    </Container>
  )
}

export default Details
const Container = styled.div`
h3{
  margin-top: 40px;
  color: orange;
}

color: white;
text-align: center;
/* height: 700px; */
font-family: 'Shadows Into Light';
            .resume-btn{
                background-color: orange;
                border-radius: 10px;
                border: none;
                padding: 20px;
                margin: 20px;
                margin-bottom: 50px;
                padding: 10px;
                font-family:  Arial, Helvetica, sans-serif;
                transition: .5s;
            }
            .resume-btn:hover{
              transform: scale(1.3);
              background-color: white;
            }

    h1{
      font-size: 10vw;
      font-family: 'Lobster', cursive;
    }
    h2{
      color: orange;
    }

    .fa-brands{
      font-size: 50px;
      margin: 20px;
      
    }
    p{
      padding: 15px;
      margin: auto;
      font-size: 20px;
    }
    a{
      color: white;
      transition: 1s;
    }
    a:hover{
      color: orange;
      transform: scale(1.3)
    }
    i{
      transition: .5s;
    }
    i:hover{
      transform: scale(1.5);
    }
    #description{
      font-family: 'Roboto Mono', monospace;

    }
`