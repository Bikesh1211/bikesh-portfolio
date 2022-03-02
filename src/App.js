import './App.css'
import styled from 'styled-components';
import TopNav from './components/TopNav';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Slide from 'react-reveal/Slide';


function App() {
  return (
    <div className="App">
        <TopNav/>
          <Home/>
          <About/>
          <Skills/>
          <Projects/>

<Slide left>

          <Footer className='container'>
            <p>&copy; 2022 All Right Reserved by bikeshchaudhary1211@gmail.com</p>

          </Footer>
</Slide>
    </div>
  );
}

export default App;
const Footer = styled.div`
p{
  padding: 0;
  padding-top: 10px;
  padding-bottom: 10px;
}
text-align: center;
background-color: #24263A;
font-size: 18px;
margin-bottom: 30px;
font-family: 'Satisfy', cursive;
border-radius: 15px;

`

