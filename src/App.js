import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skill';
import {Projects} from './components/Projects'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Footer/>      
      </div>
  );
}

export default App;
