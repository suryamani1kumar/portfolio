
import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Education from './component/Education';
import Experience from './component/Experience';
import Header from './component/header';
import Home from './component/Home';
import Skill from './component/Skill';
import { Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/education' element={<Education />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
