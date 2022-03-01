import './App.css'
import styled from 'styled-components';
import TopNav from './components/TopNav';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <div className="App">
        <TopNav/>
          <Home/>
          <About/>
          <Skills/>
    </div>
  );
}

export default App;

