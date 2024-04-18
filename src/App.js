import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './homepage/Home';
import About from './aboutpage/About';
import Destinations from './destinationspage/Destinations';
import Booking from './bookingpage/Booking';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
     <BrowserRouter>
        <Navbar/>     
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/destinations' element={<Destinations />} />
          <Route path='/booking' element={<Booking/>} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
