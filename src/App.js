import './App.css';
import Nav from './components/nav/Nav';
import HeroSection from './components/hero-section/HeroSection';
import Services from './components/services/Services';
import About from './components/About/About';
import ChooseUs from './components/choose-section/ChooseUs';
import Slider from './components/slidersection/SliderSection';
import German from './components/German/German';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Faqs from './components/Faqs/Faqs';
import ScrollToTop from './components/usefulComponents/ScrollToTop';

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
  <Faqs/>
  <Footer/>
  <ScrollToTop/>
  </>
  );
}

export default App;
