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

function App() {
  return (
    <div className="w-screen h-screen">
     
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
