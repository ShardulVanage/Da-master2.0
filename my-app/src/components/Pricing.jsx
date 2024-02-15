import React from 'react'

function Pricing() {
  return (
    <section id='price' className='py-24 flex flex-col justify-center items-center bg-gradient-to-r from-rose-400/90 via-fuchsia-500/60 to-indigo-500/60'>
        <div className=' border-double border-8 bg-white px-4 h-full rounded-3xl sm:w-5/12  w-screen '>
             <h1 className='text-3xl text-center tracking-wide font-extrabold py-4 pt-8'>Data Master Placement Guarantee <br /> Course</h1>
             <p className='text-2xl text-center'>( Get More Than 80% Discount Today )</p>
             <div className='flex flex-row justify-center items-baseline py-2 pl-12 mr-4' >
                <h1 className='text-xl pr-1 font-medium '><del>50,000₹</del></h1>
                <h1 className='text-5xl font-bold bg-clip-text text-transparent  bg-gradient-to-r from-rose-400/80 via-fuchsia-500/80 to-indigo-500/80 drop-shadow-md'>4,999₹ </h1>
                 <h1 className='text-4xl pr-1 font-bold pl-2 bg-clip-text text-transparent  bg-gradient-to-r from-rose-400/80 via-fuchsia-500/80 to-indigo-500/80 drop-shadow-md'><span className='text-black'>(</span>70$<span className='text-black'>)</span></h1>
             </div>
             <p className='text-2xl font-medium pb-2 text-center'>+ 18% GST</p>
             <hr />
             <ul className='[&>li]:py-2 text-base text-center '>
                <li>Exclusive Industrial Internship Opportunities</li>
                <li>Real-World Industrial End-to-End Projects</li>
                <li>Comprehensive Job Hunting Topics Coverage</li>
                <li>Personalized 1-1 Doubt Clearance Support</li>
                <li>Tailored LinkedIn Profile & Resume Review</li>
                <li>Recognized Course Completion Certificate</li>
               <li> Access to Job Openings & Referral Mails</li>
                <li>Hands-On Guided Practice Assignments</li>
                <li>Engaging Structured Tutorial Videos</li>
                <li>Unlimited Mock Interview Sessions</li>
                <li>Lifetime Access to Course Content</li>
               <li> Direct Company Tie-up Interviews</li>
                <li>Guaranteed Placement Assistance</li>
                <li>Access to Free Future Updates</li>
             </ul>
             <hr />
             <div  className=' text-sm sm:text-xl bg-gradient-to-r from-red-300 to-pink-400 my-2  py-7 px-12 sm:px-24 rounded-2xl font-medium  border-double border-8'>
                <a href="https://pages.razorpay.com/ZepDAM" className='text-white font-bold'>INDIAN Student</a> <span className='text-white'>/</span>
                <a href="https://pages.razorpay.com/ZepDAMINT" className='text-white font-bold'> INTERNATION Student </a>
             </div>
             
        </div>
    </section>
  )
}

export default Pricing