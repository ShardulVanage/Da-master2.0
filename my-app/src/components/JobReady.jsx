
import React, { useState, useEffect } from 'react';
function JobReady() {
  function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth()+1; // 👈️ months are 0-based
// console.log(currentMonth)
// 👇️ Current Month
const daysInCurrentMonth = getDaysInMonth(
  currentYear,
  currentMonth,
);
// console.log(daysInCurrentMonth); // 👉️ 31

// 👇️ Other Months
const daysInJanuary = getDaysInMonth(2025, currentMonth);



  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });


const [timeLeft, setTimeLeft] = useState(getTimeLeft());

   

 useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

    function getTimeLeft() {
    const now = new Date();
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59); // Last day of current month at 23:59:59
    const timeDifference = endOfMonth.getTime() - now.getTime();

 if (timeDifference <= 0) {
      // If current time is past the end of the month, calculate time until the end of next month
      const nextMonth = new Date(now.getFullYear(), now.getMonth() + 2, 0, 23, 59, 59); // Last day of next month at 23:59:59
      const nextTimeDifference = nextMonth.getTime() - now.getTime();

      const days = Math.floor(nextTimeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((nextTimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((nextTimeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((nextTimeDifference % (1000 * 60)) / 1000);

      return {
        days,
        hours,
        minutes,
        seconds
      };
    }
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

     return {
      days,
      hours,
      minutes,
      seconds
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
        <h1 className='text-3xl sm:text-6xl font-bold py-12 text-center'>
          Empowering You to Achieve Job Readiness.
        </h1>
        <p className='text-xl w-4/5 sm:w-1/2 text-center'>
          Our courses have empowered over 2000 learners, guiding them towards their dreams by elevating their skills to supreme levels through our comprehensive roadmap.
        </p>
      </div>
         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
        <div className="lg:py-6 lg:pr-16">
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="bg-gradient-to-r from-blue-400 to-blue-900  text-white flex items-center justify-center w-10 h-10 border rounded-full">
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
                <div className="bg-gradient-to-r from-blue-400 to-blue-900  text-white flex items-center justify-center w-10 h-10 border rounded-full">
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
                <div className="bg-gradient-to-r from-blue-400 to-blue-900  text-white flex items-center justify-center w-10 h-10 border rounded-full">
                  <p>3</p>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Master pro Career Growth Hacks</p>
              <p className="text-gray-700">
               Simultaneously with the course, you will be learning Linkedin Growth Hacks, Pro Resume Building and Proven techniques to find jobs through various online platforms.

              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="bg-gradient-to-r from-blue-400 to-blue-900  text-white flex items-center justify-center w-10 h-10 border rounded-full">
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
                <div className="bg-gradient-to-r from-blue-400 to-blue-900  text-white flex items-center justify-center w-10 h-10 border rounded-full">
                 <p>5</p>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Secure Your Placement</p>
              <p className="text-gray-700">
           With our Resume guidance and Interview preparation series, you will be able to get your dream job and you can start your career in Data Analytics Domain.

      
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="bg-gradient-to-r from-blue-400 to-blue-900  text-white flex items-center justify-center w-10 h-10 border rounded-full">
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
      <h1 className='text-3xl text-center sm:text-6xl font-bold py-12 sm:w-4/6'>
          Access the Complete Package: <br className=' hidden sm:block' /> <span className='bg-clip-text text-transparent bg-gradient-to-t from-blue-400 to-blue-700 drop-shadow-md'>55+ hours contents, 200+ quizes,  <br className=' sm:hidden block' />5 Industry level projects</span> Valued at ₹50,000.
      </h1>
      <h1 className='text-3xl text-center sm:text-5xl font-bold py-12 w-4/5'>
          Available at an Offer Price of <span className='bg-clip-text text-transparent  bg-gradient-to-r from-blue-400 to-blue-800 drop-shadow-md'> ₹4,999 </span> .
      </h1>
      <a href='#free-chapters' className='text-white text-xs sm:text-xl bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 my-4  py-8 px-24 sm:px-36 rounded-2xl font-medium  border-double border-8' >
        CLICK HERE TO ENROLL
      </a>
       <h1 className='text-3xl text-center sm:text-5xl font-bold pt-12 sm:py-12 w-4/5'>
       <span className=' text-red-500  animate-pulse '>SALE</span>  Valid Until <span className=' text-red-500  animate-pulse '>{daysInCurrentMonth} { month}</span> . Act Now!
       </h1>
       
      <div className='w-screen flex flex-row justify-center items-center   p-2 my-2 '>
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
            <div class=" w-screen flex items-center justify-center px-5 py-5" x-data="beer()" x-init="start()">
    <div class="text-slate-100 pb-8">
       
        <div class="text-6xl text-center flex w-full items-center justify-center sm:scale-150 ">
           <div className='flex flex-col sm:flex-row justify-between items-stretch'>
            <div className='flex flex-row  '>
<div class="w-24 mx-1 p-2 bg-slate-300 text-white rounded-lg mb-2 ">
                <div class="font-mono leading-none bg-clip-text text-transparent bg-blue-700" x-text="days">{timeLeft.days}</div>
                <div class="font-mono uppercase text-sm leading-none">Days</div>
            </div>
            <div class="w-24 mx-1 p-2 bg-slate-300 text-white rounded-lg mb-2">
                <div class="font-mono leading-none bg-clip-text text-transparent bg-blue-700" x-text="hours">{timeLeft.hours}</div>
                <div class="font-mono uppercase text-sm leading-none">Hours</div>
            </div>
            </div>
            <div className='flex flex-row '>
           <div class="w-24 mx-1 p-2 bg-slate-300 text-white rounded-lg mb-2">
                <div class="font-mono leading-none bg-clip-text text-transparent bg-blue-700" x-text="minutes">{timeLeft.minutes}</div>
                <div class="font-mono uppercase text-sm leading-none">Minutes</div>
            </div>
            <div class="w-24 mx-1 p-2 bg-slate-300 text-white rounded-lg mb-2">
                <div class="font-mono leading-none bg-clip-text text-transparent bg-blue-700" x-text="seconds">{timeLeft.seconds}</div>
                <div class="font-mono uppercase text-sm leading-none">Seconds</div>
            </div>
            </div>
           </div>
            
           
            <div class="text-2xl mx-1 font-extralight"></div>
            
        </div>
       
    </div>
</div>



      </div>
      

    </div>
    </section>
  )
}

export default JobReady