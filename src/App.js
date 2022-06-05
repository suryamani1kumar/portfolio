
import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Education from './component/Education';
import Experience from './component/Experience';
import Header from './component/header';
import Home from './component/Home';
import Skill from './component/Skill';



function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <About/>
      <Skill/>
      <Education/>
      <Experience/>
      <Contact/>


    </div>
  );
}

export default App;
