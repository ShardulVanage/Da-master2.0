import React from 'react'

function Hero() {
  return (
    <section className='text-white w-screen sm:h-screen bg-gradient-to-r from-gray-950  via-blue-900 to-blue-900/90 flex flex-col justify-center items-center '>
        <div className='flex flex-row  justify-center items-center py-8'>
            <img className='drop-shadow-2xl h-12 m-1 bg-transparent ' src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1706986565/hqatxpsjdg3zeql20jfe.png" alt="" />
            <h1 className=' text-3xl font-extrabold font-mono text-white '>Zep Analytics</h1>
        </div>
       
            <h2 className='text-3xl md:text-6xl w-11/12 sm:w-4/6 font-bold py-4 text-center'>Unleash Your Data Superpowers and Become a  <span className='bg-clip-text text-transparent bg-gradient-to-tr from-violet-500 to-orange-300'> Data Analytics </span>Superstar</h2>
 <div className= 'bg- flex  flex-col sm:flex-row  justify-center items-center'>
     <img src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1687806712/whmgy2fkkrpsduevi9mk.png"  className=" sm:w-2/12 w-2/4 rounded-3xl"alt="" />
    <div className='w-screen  sm:w-5/12  p-8 sm:ml-0 pl-8 4 '>
        
        <h2 className='text-base sm:text-2xl  font-bold text-balance text-center sm:text-left py-2'>
        Master every tool in the Data Analytics domain and secure your dream job upon course completion.
        </h2>
        <p className='text-xs sm:text-base   text-clip text-center sm:text-left py-2'>
            India's No.1 Data Analytics Course having multiple features to excel and make you job ready for various roles.
        </p>
        <div className='flex flex-col justify-center'>
        <a href='#free-chapters' className=' text-center my-4   py-4 bg-gradient-to-r from-gray-100/20 to-gray-300/30 font-medium text-white border-slate-100/40 border-double border-8'>
            Enroll Now
        </a>
        </div>
    </div>
    <div className=''>
        <img  src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1708175089/r0ltfeerioe2xlbcvo2w.png" alt="" />
    </div>
 <div>

 </div>
 </div>
    </section>
  )
}

export default Hero