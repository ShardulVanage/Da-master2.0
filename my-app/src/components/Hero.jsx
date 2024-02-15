import React from 'react'

function Hero() {
  return (
    <section className='w-screen sm:h-screen bg-slate-300 flex flex-col justify-center items-center '>
        <div className='flex flex-row  justify-center items-center py-8'>
            <img className='h-12 m-1 bg-transparent ' src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1707751033/nkl97npsivikvukvvcbi.png" alt="" />
            <h1 className=' text-3xl font-extrabold font-mono text-white '>Zep Analytics</h1>
        </div>
            <h2 className='text-3xl md:text-6xl w-full sm:w-4/6 font-bold py-4 text-center'>Unleash Your Data Superpowers and Guarantee Your Career Success with a <span className='bg-clip-text text-transparent  bg-gradient-to-r from-rose-400/60 via-fuchsia-500/60 to-indigo-500/60'>100%</span> Placement Promise</h2>
 <div className= 'bg- flex  flex-col sm:flex-row  justify-center items-center'>
    <div className='w-screen  sm:w-5/12 border-t-2 border-l-2 border-solid p-8 sm:ml-0 pl-4 '>
        
        <h2 className='text-base sm:text-2xl  font-bold text-left py-2'>
         Master Every Tool in the Data Science, Analytics, and Engineering Arsenal and Secure Your Dream Job Upon Course Completion.   
        </h2>
        <p className='text-base   text-clip text-left py-2'>
Acquire a comprehensive and Hands-on Learning Experience with daily 1-1 Chat Support for Doubt Resolution and Career Advancement Techniques.
        </p>
        <div className='flex'>
        <button className='  py-4 bg-gradient-to-r from-rose-400/60 via-fuchsia-500/60 to-indigo-500/60 px-24 rounded-2xl font-medium text-white border-double border-8'>
            Endroll Know
        </button>
        </div>
    </div>
    <div className=''>
        <img className='' src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1707745259/od4kggpbo1pdotplc1ox.png" alt="" />
    </div>
 <div>

 </div>
 </div>
    </section>
  )
}

export default Hero