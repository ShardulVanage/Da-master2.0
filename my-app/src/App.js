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

function App() {
  return (
    <div className=" h-screen">
     
     <Hero/>
     <Features/>
     <Form/>
     <Brocher/>
     <JobReady/>
     <Pricing/>
     <Author/>
     <Testimonials/>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
