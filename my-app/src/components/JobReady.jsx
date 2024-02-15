
import React, { useState, useEffect } from 'react';
function JobReady() {


    const date = new Date();
  const day = date.getDate() + 1;
  const month = date.toLocaleString('default', { month: 'long' });


    const [countdown, setCountdown] = useState(calculateCountdown());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  function calculateCountdown() {
    const now = new Date();
    const hours = 24 - now.getHours();
    const minutes = 60 - now.getMinutes();
    const seconds = 60 - now.getSeconds();

    return {
      hours: formatTime(hours),
      minutes: formatTime(minutes),
      seconds: formatTime(seconds)
    };
  }

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  // const step =[
  //   {
  //     head:"Start from scratch and learn everything",
  //     subhead:"Embark on a journey from fundamentals to advanced topics, engaging in hands-on assignments for comprehensive practical learning"
  // },
  //  {
  //     head:"Engage in Real-World Industrial Projects.",
  //     subhead:"Followed by Industrial Projects, Elevating Confidence and Resume"
  // }, {
  //     head:"Unlock Pro Career Growth Strategies",
  //     subhead:"Alongside the course, master LinkedIn Growth Hacks, Professional Resume Building, and Proven Job Search Techniques across diverse online platforms."
  // }, {
  //     head:" Do an Industrial Internship",
  //     subhead:"After learning all the core topics and doing projects, you can do Industrial Internship with Us and get Real-World exposure that will super enhance your skills"
  // }, {
  //     head:"Secure Your Placement",
  //     subhead:"Utilize Our Placement Guarantee Program, featuring Job Referrals, Unlimited Mock Interviews, and Company Tie-up Interviews, to Secure Your Dream Job and Launch Your Career in the Data Science & Engineering Domain"
  // }
  //   ]
  return (
    <section className='bg-slate-100'>
      <div className=' flex flex-col justify-center items-center'>
        <h1 className='text-3xl sm:text-6xl font-bold py-12'>
          Empowering You to Achieve Job Readiness.
        </h1>
        <p className='text-xl w-1/2'>
          Our courses have empowered over 2000 learners, 
          guiding them toward their dreams by elevating their skills to supreme levels through our comprehensive roadmap.
        </p>
      </div>
         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
        <div className="lg:py-6 lg:pr-16">
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="bg-gradient-to-r from-rose-400/60 via-fuchsia-500/60 to-indigo-500/60  text-white flex items-center justify-center w-10 h-10 border rounded-full">
                 <p>1</p>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Unlock Pro Career Growth Strategies</p>
              <p className="text-gray-700">
               Alongside the course, master LinkedIn Growth Hacks, Professional Resume Building, and Proven Job Search Techniques across diverse online platforms.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="bg-gradient-to-r from-rose-400/60 via-fuchsia-500/60 to-indigo-500/60  text-white flex items-center justify-center w-10 h-10 border rounded-full">
                  <p>2</p>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Engage in Real-World Industrial Projects</p>
              <p className="text-gray-700">
               Followed by Industrial Projects, Elevating Confidence and Resume
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="bg-gradient-to-r from-rose-400/60 via-fuchsia-500/60 to-indigo-500/60  text-white flex items-center justify-center w-10 h-10 border rounded-full">
                  <p>3</p>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Unlock Pro Career Growth Strategie</p>
              <p className="text-gray-700">
                Alongside the course, master LinkedIn Growth Hacks, Professional Resume Building, and Proven Job Search Techniques across diverse online platforms.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="bg-gradient-to-r from-rose-400/60 via-fuchsia-500/60 to-indigo-500/60  text-white flex items-center justify-center w-10 h-10 border rounded-full">
                <p>4</p>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Do an Industrial Internship</p>
              <p className="text-gray-700">
             Our courses have empowered over 2000 learners, 
          guiding them toward their dreams by elevating their skills to supreme levels through our comprehensive roadmap.
      
              </p>
            </div>
          </div>
           <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="bg-gradient-to-r from-rose-400/60 via-fuchsia-500/60 to-indigo-500/60  text-white flex items-center justify-center w-10 h-10 border rounded-full">
                 <p>5</p>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Secure Your Placement</p>
              <p className="text-gray-700">
           Utilize Our Placement Guarantee Program, featuring Job Referrals, Unlimited Mock Interviews, and Company Tie-up Interviews, to Secure Your Dream Job and Launch Your Career in the Data Science & Engineering Domain
      
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="bg-gradient-to-r from-rose-400/60 via-fuchsia-500/60 to-indigo-500/60  text-white flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-6 text-white"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <polyline
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      points="6,12 10,16 18,8"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="pt-1">
              <p className="mb-2 text-lg font-bold"> Get Placed</p>
              <p className="text-gray-700" />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="inset-0 sm:mt-24 object-bottom w-full sm:w-[300]  sm:h-[550px] lg:absolute "
            src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1707843696/prmuhkamju95660orip6.png"
            alt=""
          />
        </div>
      </div>
    </div>
      {/* Course Value */}
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl text-center sm:text-6xl font-bold py-12 w-4/5'>
          Access the Complete Package: <span className='bg-clip-text text-transparent  bg-gradient-to-r from-rose-400/80 via-fuchsia-500/80 to-indigo-500/80 drop-shadow-md'>24 + Chapters, Projects, and Job Hunting Tools</span> Valued at ₹50,000.
      </h1>
      <h1 className='text-3xl text-center sm:text-5xl font-bold py-12 w-4/5'>
          Available at an Offer Price of <span className='bg-clip-text text-transparent  bg-gradient-to-r from-rose-400/80 via-fuchsia-500/80 to-indigo-500/80 drop-shadow-md'> ₹4,999 </span> + GST.
      </h1>
      <a className='text-white text-xs sm:text-xl bg-gradient-to-r from-red-300 to-pink-400 my-4  py-8 px-24 sm:px-36 rounded-2xl font-medium  border-double border-8' href="">
        CLICK HERE TO ENROLL
      </a>
       <h1 className='text-3xl text-center sm:text-5xl font-bold py-12 w-4/5'>
       <span className=' text-red-500  animate-pulse '>SALE</span>  Valid Until <span className=' text-red-500  animate-pulse '>{day} {month}</span> . Act Now!
       </h1>
       
      <div className='flex flex-row justify-center items-center border-t-2 border-r-2 border-red-400 p-2 my-2 '>
            {/* <div className='flex flex-col justify-center items-center  font-semibold '>
              <p className='sm:text-8xl text-6xl'>{countdown.hours} : </p>
              <p className='text-2xl pr-8 '>Hours</p>
            </div>
            <div className='flex flex-col justify-center items-center  font-semibold '>
              <p className='sm:text-8xl text-6xl'> {countdown.minutes} : </p>
              <p className='text-2xl pr-8'>Minutes</p>
            </div>
            <div className='flex flex-col justify-center items-center  font-semibold '>
              <p className='sm:text-8xl text-6xl'> {countdown.seconds}</p>
              <p className='text-2xl pr-0'>Seconds</p>
            </div> */}
            <div class="  flex items-center justify-center px-5 py-5" x-data="beer()" x-init="start()">
    <div class="text-slate-100">
        <h1 class="text-3xl text-center mb-3 font-extralight">When will pubs open in England?*</h1>
        <div class="text-6xl text-center flex w-full items-center justify-center pl-12">
           
            <div class="w-24 mx-1 p-2 bg-slate-300 text-white rounded-lg sm:block hidden">
                <div class="font-mono leading-none bg-clip-text text-transparent  bg-gradient-to-r from-rose-400/60 via-fuchsia-500/60 to-indigo-500/60" x-text="days">00</div>
                <div class="font-mono uppercase text-sm leading-none">Days</div>
            </div>
            <div class="w-24 mx-1 p-2 bg-slate-300 text-white rounded-lg">
                <div class="font-mono leading-none bg-clip-text text-transparent  bg-gradient-to-r from-rose-400/60 via-fuchsia-500/60 to-indigo-500/60" x-text="hours">{countdown.hours}</div>
                <div class="font-mono uppercase text-sm leading-none">Hours</div>
            </div>
            <div class="w-24 mx-1 p-2 bg-slate-300 text-white rounded-lg">
                <div class="font-mono leading-none bg-clip-text text-transparent  bg-gradient-to-r from-rose-400/60 via-fuchsia-500/60 to-indigo-500/60" x-text="minutes">{countdown.minutes}</div>
                <div class="font-mono uppercase text-sm leading-none">Minutes</div>
            </div>
            <div class="w-24 mx-1 p-2 bg-slate-300 text-white rounded-lg">
                <div class="font-mono leading-none bg-clip-text text-transparent  bg-gradient-to-r from-rose-400/60 via-fuchsia-500/60 to-indigo-500/60" x-text="seconds">{countdown.seconds}</div>
                <div class="font-mono uppercase text-sm leading-none">Seconds</div>
            </div>
            <div class="text-2xl mx-1 font-extralight"></div>
            
        </div>
       
    </div>
</div>



      </div>
      
<h1 className='text-3xl sm:text-6xl font-bold py-12 w-4/5'>
  Today Only Receive Our <span className='bg-clip-text text-transparent bg-gradient-to-tl from-yellow-200 via-yellow-400 to-yellow-300 drop-shadow-md'>Power Bi</span>  Course Valued at <span className='bg-clip-text text-transparent  bg-gradient-to-r from-rose-400/80 via-fuchsia-500/80 to-indigo-500/80 drop-shadow-md'>₹10,000</span> Absolutely <span className='bg-clip-text text-transparent  bg-gradient-to-r from-rose-400/80 via-fuchsia-500/80 to-indigo-500/80 drop-shadow-md'>Free!</span> Don't Miss Out, Act Now!
</h1>
    </div>
    </section>
  )
}

export default JobReady