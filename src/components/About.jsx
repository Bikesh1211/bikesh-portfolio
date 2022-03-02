import React from 'react'
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import bikesh from'./img/Bikesh1.jpg';


function About() {
  return (
    <Container className='container'>



            <Info className='row justify-content-center'>
                <Zoom>
                      <h1>About</h1>
                    <h2>Personal Information</h2>
                </Zoom>
                <div className="col-xl-8 col-sm-12">

                <Slide left>

                <ul>
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
        </Slide>
                </div>
        <Slide bottom>

                <div className="col-xl-2 col-sm-12">
                <img src={bikesh}  />
                </div>
        </Slide>



            </Info>


    </Container>
  )
}

export default About
const Container = styled.div`
text-align: center;
margin-top: 100px;
margin-bottom: 200px;

            img{
                width: 200px;
                height: 200px;
                object-fit: cover;
                filter: grayscale(0);
                border-radius: 20px;
                background-color: #1D1E2C;
                padding: 10px;
                box-shadow: rgba(108, 127, 238, 0.25) 0px 25px 50px -12px;
                box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

            }
            img:hover{
                box-shadow: #3ff8b1 0px 3px 8px;
            }
h1,h2{
    margin-bottom: 10px;
    margin-top: 10px;
}

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
/* padding: 10px; */
padding-bottom: 30px;
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
    font-size: 20px;
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