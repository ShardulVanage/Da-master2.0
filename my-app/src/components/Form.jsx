
import { useState } from "react";
import {react, useRef} from 'react'
import emailjs from '@emailjs/browser';
import Pattern from "./Pattern.jsx";
import Button from "./Button.jsx";
import { Container } from "./Container.jsx";



const initValues = { name: "", email: "", phnumber: "", message: "",Whatsapp_No:"" };

const initState = { isLoading: false, error: "", values: initValues };

export default function Form() {
 const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_2iu0c69', 'template_54c57ul', form.current, 'C8dPWZXnl8qXkxHD8')
      .then((result) => {

          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));


  return (
    <section
      id="free-chapters"
      aria-label="Free preview"
      className="scroll-mt-14 bg-gradient-to-r from-blue-700 via-blue-900 to-gray-900 sm:scroll-mt-32"
    >
      <div className="overflow-hidden lg:relative">
        <Container
          size="md"
          className="relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
        >
          <Pattern className="absolute -top-32 left-0 w-full sm:-top-5 sm:left-3/4 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:left-2/3 xl:right-auto" />
          <div className="flex flex-col justify-between items-start ">
            <div className='flex flex-row justify-start items-center drop-shadow-2xl py-2 bg-slate-100/20 rounded-full px-4 w-2/4 '>
              <a href='https://api.whatsapp.com/send/?phone=%2B917978652529&text&type=phone_number&app_absent=0' className='flex flex-col justify-center items-c'>
                <img alt="whatsappicon"  src={"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1706986988/ee8gvpxhvyi2ktrxqiqi.png"} height={50} width={50} />
              </a> <a href='https://www.linkedin.com/company/zep-analytics/' className='flex flex-col justify-center items-c'>
                <img alt="whatsappicon"  src={"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1706986989/by6dakpcnvg3bn5ckvx9.png"} height={50} width={50}/>
              </a> <a href='https://www.instagram.com/zep.analytics/' className='flex flex-col justify-center items-c'>
                <img alt="whatsappicon"  src={"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1706986986/fwbmcyknxvfibcmbwst3.png"} height={50} width={50}/>
              </a> <a href='https://www.youtube.com/@SatyajitPattnaik' className='flex flex-col justify-center items-c'>
                <img alt="whatsappicon"  src={"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1706986985/ao08nawgunhmhqferr97.png"} height={50} width={50}/>
              </a>
            </div>
            <h2 className="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
            Ditch the doubts, get your questions answered.
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-200">
             Enter your details, and we will get back to you with course details!!
            </p>
          </div>

          <form className="lg:px-16 sm:py-12 border-r-2 border-b-2 pr-2 pb-2 sm:mt-12 border-white  "  ref={form} onSubmit={sendEmail}>
           
            <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5 ">
              <div className="relative sm:static sm:flex-auto">
                <input
                 
                  type="text"
                  id="name"
                  name='name'
                  required
                  aria-label="name"
                  placeholder="Name"
                  className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:outline-none sm:py-3"
                />
                <div className="absolute inset-0 rounded-md border border-white/20 peer-focus:border-blue-300 peer-focus:bg-slate-500/40 peer-focus:ring-1 peer-focus:ring-blue-300 sm:rounded-xl" />
              </div>
              {/* <Button
                type="submit"
                color="white"
                className="mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none"
              >
                Get free chapters
              </Button> */}
            </div>

            <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
              <div className="relative sm:static sm:flex-auto">
                <input
                 name='email'
                  type="email"
                  id="email"
                  required
                  aria-label="Email "
                  placeholder="Email"
                  className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:outline-none sm:py-3"
                />
                <div className="absolute inset-0 rounded-md border rounded-r-none border-white/20 peer-focus:border-blue-300 peer-focus:bg-slate-500/40 peer-focus:ring-1 peer-focus:ring-blue-300 sm:rounded-xl" />
              </div>
           
            </div>
             <div className="flex flex-row">
            <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5 w-1/4">
              <div className="relative sm:static sm:flex-auto">
                <input
                 name='countrycode'
                  type="text"
                  id="countrycode"
                  
                  aria-label="countrycode "
                  placeholder="+91"
                  className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:outline-none sm:py-3"
                />
                <div className="absolute inset-0 rounded-md border border-white/20 peer-focus:border-blue-300 peer-focus:bg-slate-500/40 peer-focus:ring-1 peer-focus:ring-blue-300 sm:rounded-xl" />
              </div>
           
            </div>

            <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5 w-full">
              <div className="relative sm:static sm:flex-auto">
                <input
                 name='phnumber'
                  type="text"
                  id="phnumber"
                  required
                  aria-label="phnumber"
                  placeholder="Phone"
                  className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:outline-none sm:py-3"
                />
                <div className="absolute inset-0 rounded-md border border-white/20 peer-focus:border-blue-300 peer-focus:bg-slate-500/40 peer-focus:ring-1 peer-focus:ring-blue-300 sm:rounded-xl" />
              </div>
           
            </div>
            </div>    

            <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
              <div className="relative sm:static sm:flex-auto">
                <input
                name='whatsapp'
                  type="text"
                  id="Whatsapp"
                  required
                  aria-label="Whatsapp"
                  placeholder="Whatsapp"
                  className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:outline-none sm:py-3"
                />
                <div className="absolute inset-0 rounded-md border border-white/20 peer-focus:border-blue-300 peer-focus:bg-slate-500/40 peer-focus:ring-1 peer-focus:ring-blue-300 sm:rounded-xl" />
              </div>
           
            </div>
            <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
              <div className="relative sm:static sm:flex-auto">
                <textarea
                name='message'
                  type="text"
                  id="message"
                  required
                  aria-label="message"
                  placeholder="Message"
                  className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:outline-none sm:py-3"
                />
                <div className="absolute inset-0 rounded-md border border-white/20 peer-focus:border-blue-300 peer-focus:bg-slate-500/40 peer-focus:ring-1 peer-focus:ring-blue-300 sm:rounded-xl" />
              </div>
           
            </div>
<div className='flex flex-row justify-evenly items-center mt-6'>
          <a
                type="submit"
                color="white"
                className=" w-full text-center   py-4 bg-gradient-to-r from-gray-100/20 to-gray-300/30 px-24 rounded-2xl font-medium border-double border-8 text-slate-50 hover:text-slate-100   sm:relative sm:z-10  sm:flex-none"
                
        
              >
                Submit
              </a> 
            
</div>
          </form>
        </Container>
      </div>
    </section>
  )
}