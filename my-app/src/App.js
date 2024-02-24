import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Form from './components/Form';
import Brocher from './components/Brocher';
import JobReady from './components/JobReady';
import Pricing from './components/Pricing';
import Author from './components/Author';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Certificate from './components/Certificate';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    
    <div className="w-full h-screen">
    <a href=' https://api.whatsapp.com/send/?phone=%2B917978652529&text&type=phone_number&app_absent=0' className='flex flex-col justify-items-end items-end z-50 fixed  bottom-2 right-2 sm:bottom-8 sm:right-8 drop-shadow-2xl  '>
                <img alt="whatsappicon"  src={"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1706986988/ee8gvpxhvyi2ktrxqiqi.png"} height={70} width={70} className='object-right-bottom' />
              </a>
     <ToastContainer position='top-center'/>
     <Hero/>
     <Features/>
     <Form/>
     <JobReady/>
     <Brocher/>
     <Pricing/>
     <Author/>
     <Testimonials/>
     <Certificate/>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
