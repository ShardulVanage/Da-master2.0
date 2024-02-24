import React from 'react'

function Brocher() {
  return (
   <section className='bg-gradient-to-b from-blue-950  to-gray-900 text-white'>
    <div className='py-8 flex flex-col justify-between items-center'>
        <h1 className='py-4 sm:text-6xl text-3xl font-semibold '>
            What Are You Getting?
        </h1>
        <a href="/syllabus.pdf" className=' text-sm sm:text-xl bg-gradient-to-r from-gray-100/20 to-gray-300/30  my-2  py-7 px-12 sm:px-24 rounded-2xl font-medium  border-double border-8'>
           Download Syllabus
        </a>
        
    </div>
   </section>
  )
}

export default Brocher