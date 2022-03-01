import React from 'react'
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import bikesh from './bikesh.jpg'


function About() {
  return (
    <Container className='container'>



            <Info className='row'>
                <Zoom>
                      <h1>About</h1>
                    <h2>Personal Information</h2>
                </Zoom>
                <Slide right>

                <ul className='col col-xl-8'>
                    <li>
                    <i class="fa-solid fa-square-envelope"></i>
                    &nbsp; bikeshchaudharybikesh893@gmail.com</li>

                    <li>
                    <i class="fa-solid fa-location-dot"></i>
                    &nbsp; Kalanki, Kathmandu, 44600</li>
                    <li>
                    <i class="fa-solid fa-phone"></i>
                    &nbsp;9810583110</li>

                </ul>
                <img src="{bikesh}" alt="bikesh Chaudhary" />

        </Slide>
            </Info>


    </Container>
  )
}

export default About
const Container = styled.div`
text-align: center;

            .resume-btn{
                background-color: orange;
                border-radius: 10px;
                border: none;
                padding: 20px;
            }

`
const Info = styled.div`
background-color: #24263A;
background-image: linear-gradient(to bottom, #1D1E2C, #24263A);
text-align: left;
padding: 10px;
border-radius: 10px;
font-size: 25px;

h2{
    text-align: center;
    font-family: 'Kalam', cursive;
    color: #3ff8b1;

}

h1{
    text-align: center;
    font-family: 'Road Rage', cursive;
    color: #3ff8b1;
    font-size: 70px;
    letter-spacing: 5px;



}
i{
    color: white;
}
li{
    list-style: none;
    margin: 20px;
    font-size: 2vw;
    /* color: orange; */
}
@media (max-width: 700px) {
    li,.fa-solid{
        font-size: 20px;
    }
    li{
        margin: 0;
        margin-bottom: 15px;
        margin-top: 5px;
        text-align: center;
    }
    .fa-solid{
        display: none;  
    }
}

    .fa-solid{
        font-size: 30px;
        margin-right: 20px;
    }
`