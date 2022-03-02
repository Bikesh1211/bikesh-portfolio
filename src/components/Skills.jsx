import React from 'react'
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';

function Skills() {
    
  return (
    <Container className='container'>

        <Zoom>

        <h1>Skills</h1>
                <h2>Technical Skills </h2>
        </Zoom>
        <div className="row justify-content-center">
        <div className="row">
            <div className="col">
                <Zoom>
                <p>HTML, CSS, JavaScript, MongoDb, Express, Node, React, AWS, Flutter, PHP, Java, C#, Figma, Photoshop</p>
                </Zoom>
                    <ul>
                        <li>CSS</li>
                        <li>HTML</li>
                        <li>JavaScript</li>
                        <li>MongoDb</li>
                        <li>Express</li>
                        <li>Node</li>
                        <li>React</li>
                        <li>AWS</li>
                        <li>Flutter</li>
                        <li>PHP</li>
                        <li>Java</li>
                        <li>C#</li>
                        <li>.Net</li>
                        <li>Photoshop</li>
                    </ul>
            </div>
            </div>
            <Zoom>
            <div className="row">

            <div className="col">
                <i className='fab fa-node'></i>
                </div>
                <div className="col">
                <i class="fa-brands fa-php"></i>
                </div>
                <div className="col">
                <i className="fa-brands fa-envira"></i>
                </div>
                <div className="col">
                <i className="fa-brands fa-bootstrap"></i>
                </div>
                <div className="col">
                <i className="fa-brands fa-html5"></i>
                </div>

                <div className="row">
                <div className="col">       
                     <i className="fa-brands fa-css3-alt"></i>
                    </div>
                    <div className="col">
                    <i className="fa-brands fa-git-square"></i>
                    </div>

                    <div className="col">
                    <i className="fa-brands fa-react"></i>
                    </div>

                    <div className="col">
                    <i className="fa-brands fa-js-square"></i>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <i className="fa-brands fa-js-square"></i>
                    </div>

                    <div className="col">
                    <i class="fa-brands fa-github"></i>
                    </div>
                    
                    <div className="col">
                    <i class="fa-brands fa-sass"></i>
                    </div>

                </div>
                <div className="row">
                <div className="col">
                <i class="fa-brands fa-java"></i>
                    </div>
                </div>


            </div>

            </Zoom>
        </div>
    </Container>
  )
}

export default Skills
const Container = styled.div`
height: 700px;
h1,h2{
    margin-bottom: 10px;
    margin-top: 10px;
}
h2{
    font-family: 'Kalam', cursive;
    color: #a6d303;


}
        p{
            font-size: 26px;
            font-family: 'Aclonica', sans-serif;
            letter-spacing: 2px;

        }

        li{
            list-style: none;
            font-size: 20px;
            text-align: center;
            margin: 10px;
            font-family: 'Aclonica', sans-serif;
display: none;


        }
        ul{
            /* display: flex; */

        }

  h1{
    font-family: 'Road Rage', cursive;
    font-size: 70px;
    color: #a6d303;
    letter-spacing: 5px;

}
color: white;
text-align: center;
margin-top: 50px;
height: 700px;

img{
    width: 100px;
}
.col{
    font-size: 100px;
}

@media (max-width: 700px) {
    i{
        font-size: 60px;
    }
}
    
`