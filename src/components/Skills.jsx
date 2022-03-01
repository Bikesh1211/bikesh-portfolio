import React from 'react'
import styled from 'styled-components';
import Bounce from 'react-reveal/Bounce';



function Skills() {
    
  return (
    <Container className='container'>

        <h1>Skills</h1>
        <Bounce>
        <div className="row justify-content-center">
        <div className="row">
            <div className="col col-xl-12">
                <h2>Technical Skills</h2>
                <p>HTML, CSS, JavaScript, MongoDb, Express, Node, React, AWS, Flutter, PHP, Java, C#, Figma, Photoshop</p>

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
                        <li>Figma</li>
                        <li>Photoshop</li>
                    </ul>
            </div>
            </div>
                <div className="col col-xl-3 col-md-3 col-sm-5">

            <i className='fab fa-node'></i>
                </div>
                <div className="col col-xl-3 col-md-3 col-sm-5">

            <i className="fa-brands fa-envira"></i>
                </div>
                <div className="col col-xl-3 col-md-3 col-sm-5">

            <i className="fa-brands fa-bootstrap"></i>
                </div>
                <div className="col col-xl-3 col-md-3 col-sm-5">

            <i className="fa-brands fa-html5"></i>
                </div>
                <div className="col col-xl-3 col-md-3 col-sm-5">

            <i className="fa-brands fa-css3-alt"></i>
                </div>

                <div className="col col-xl-3 col-md-3 col-sm-5">

            <i className="fa-brands fa-git-square"></i>
                </div>
                <div className="col col-xl-3 col-md-3 col-sm-5">

            <i className="fa-brands fa-react"></i>
                </div>
            <div className="col col-xl-3 col-md-3 col-sm-5">
            <i className="fa-brands fa-js-square"></i>

            </div>
            <div className="col col-xl-3 col-md-3 col-sm-5">
            <i class="fa-brands fa-github"></i>
            </div>

            <div className="col col-xl-3 col-md-3 col-sm-5">
            <i class="fa-brands fa-sass"></i>
            </div>
        </div>
        </Bounce>

    </Container>
  )
}

export default Skills
const Container = styled.div`
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