import './App.css';
import Nav from './components/nav/Nav';
import HeroSection from './components/hero-section/HeroSection';
import Services from './components/services/Services';
import NewNav from './components/newNav/NewNav';

function App() {
  return (
  <>
  <Nav/>
  {/* <NewNav/> */}
  <HeroSection/>
  <Services/>
  </>
  );
}

export default App;
