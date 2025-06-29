
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Product from './components/Product'
import Workwithus from './components/Workwithus'
import Contact from './components/Contact'
// import Navbar2 from './components/Navbar2'
import SolarPanelPage from './components/SolarPanelPage'
import SolarPumpPage from './components/SolarPumpPage'
import MicroInverter from './components/MicroInverter'
import Earthing from './components/Earthing'
import La from './components/La'
import GasGenset from './components/GasGenset'
import Diesel from './components/Diesel'
import Cursor from './components/Cursor'
import SocialIcons from './components/SocialIcons'
import ScrollToTop from './components/ScrollToTop'
import NewWorkWithUs from './components/NewWorkWithUs'
import ProjectDetails from './components/ProjectDetails'
import FiveService from './components/FiveService'
import FirstService from './components/FirstService'
import FourService from './components/FourService'
import ThirdService from './components/ThirdService'
import SecondService from './components/SecondService'
import SolarLanding from './components/SolarLanding'
import Career from './components/Career'




function App() {


  return (
    <>
      <SolarLanding />
      <Cursor />

 
      <SocialIcons />
      <ScrollToTop />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/products" element={<Product />} />
        <Route path="/career" element={<Career />} />
        <Route path="/workwithus" element={<NewWorkWithUs/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Solar-pannel" element={<SolarPanelPage />} />
        <Route path="/Solar-Pump" element={<SolarPumpPage />} />
        <Route path="/Micro-Inverter" element={<MicroInverter />} />
        <Route path="/Earthing" element={<Earthing />} />
        <Route path="/LA" element={<La />} />
        <Route path="/Gas-Genset" element={<GasGenset />} />
        <Route path="/Diesel/Petrol Genset" element={<Diesel />} />
        <Route path="/ProjectDetails" element={<ProjectDetails />} />
        <Route path="/Installation_&_Commissioning_(INC)" element={<FirstService/>} />
        <Route path="/Engineering_Procurement_and_Construction_(EPC)" element={<SecondService />} />
        <Route path="/Operations_&_Maintenance_(O&M)" element={<ThirdService />} />
        <Route path="/Recycling_&_Sustainability" element={<FourService />} />
        <Route path="/Customized_Solar_Solutions" element={<FiveService />} />
      </Routes>

    </>
  )
}

export default App
