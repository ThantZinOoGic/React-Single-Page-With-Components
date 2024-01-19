import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import NavSection from './NavSection';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import FooterSection from './FooterSection';

function App() {
  return (
    <div className='container-fluid'>
        <div className='row'>
          <div className=''>
            <NavSection/>
            <HomeSection/>
            <AboutSection/>
            <ServicesSection/>
            <FooterSection/>
          </div>
        </div>
    </div>
  );
}

export default App;
