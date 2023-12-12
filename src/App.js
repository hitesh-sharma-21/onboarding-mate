import './App.css';
import Nav from './components/nav/Nav';
import HeroSection from './components/hero-section/HeroSection';
import Services from './components/services/Services';
import NewNav from './components/newNav/NewNav';
import About from './components/About/About';
import ChooseUs from './components/choose-section/ChooseUs';
import Slider from './components/slidersection/Slider';
import German from './components/German/German';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
  <>
  <Nav/>
  <HeroSection/>
  <Services/>
  <About/>
  <ChooseUs/>
  <Slider/>
  <German/>
  <ContactUs/>
  </>
  );
}

export default App;
