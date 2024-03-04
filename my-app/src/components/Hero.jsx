import React from 'react'

function Hero() {
    // const pcontent =[
    //     {
    //         url:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1709559533/arw7ka4mcnibtjembgct.png",
    //         text:"5 Days"
    //     },
    //      {
    //         url:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1709559663/oxaavu4qlyfqxh2iwynb.png",
    //         text:"Pre-recorded videos  "
    //     },
    //      {
    //         url:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1709559662/zhtlnnejfk9cznpn0vly.png",
    //         text:"Project Based Learning "
    //     },
    //      {
    //         url:"   https://res.cloudinary.com/dtsuvx8dz/image/upload/v1709559754/kgcwrbarigzxp6wrkqft.png",
    //         text:"QnA"
    //     }
    // ]
  return (
    <section className='text-white w-screen sm:h-screen bg-gradient-to-r from-gray-950  via-blue-900 to-blue-900/90 flex flex-col justify-center items-center '>
        <div className='flex flex-row  justify-center items-center py-8'>
            <img className='drop-shadow-2xl h-12 m-1 bg-transparent ' src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1706986565/hqatxpsjdg3zeql20jfe.png" alt="" />
            <h1 className=' text-3xl font-extrabold font-mono text-white '>Zep Analytics</h1>
        </div>
       
            <h2 className='text-3xl md:text-6xl  sm:w-4/6 font-bold py-4 text-center'>Unleash Your Data Superpowers and Become a  <span className='bg-clip-text text-transparent bg-gradient-to-tr from-violet-500 to-orange-300'> Data Analytics </span>Superstar</h2>
            <div className='bg- flex  flex-col sm:flex-row  justify-center items-center py-2'>
                <div className='bg-slate-100/20 p-4 rounded-xl m-2  '>
                        {/* <div className='grid grid-rows-2 grid-flow-col gap-4'>
                            {pcontent.map(pcontents =>(
                                <div  key={pcontents.url} className=' flex justify-start items-center bg-white/20 p-2 rounded-2xl sm:text-base text-xs py-3 '>
                                        <img src={pcontents.url} height={30} width={30} alt="pp" />
                                        <h1 className='sm:text-xl pl-4  text-xs'>{pcontents.text}</h1>
                                 </div>
                            ))}
                        </div> */}

                        <div className='flex flex-row justify-center items-center'>
                            <img src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1709556612/cnkb4zr9felsyt4mywhr.png" height={200} width={200} alt="" />
                             <div>
                            <h1 className='text-xl font-semibold pb-1'>Satyajit Pattnaik</h1>
                            <p className='text-sm'>Certified Data Scientist & <br /> Tensorflow Certified Developer</p>
                            </div>       
                        </div>  
                        <div className='flex flex-row  justify-between'>
                            <div className='bg-slate-100/20 py-8 px-2 flex flex-col w-1/2 justify-between items-center mx-1 rounded-3xl'>
                                <h1 className='text-4xl font-semibold'>30k+</h1>
                                <p className='text-center'>Linkedin Followers</p>
                            </div>
                            <div className='bg-slate-100/20 py-8 px-2 flex flex-col w-1/2 justify-between items-center mx-1 rounded-3xl'>
                                <h1 className='text-4xl font-semibold'>65k+</h1>
                                <p className='text-center'>Youtube subscribers</p>
                            </div>
                        </div>  

                </div>
                
                <div className='w-screen  sm:w-2/6  p-8 sm:ml-0 pl-8 4 '>
                        
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
                    <div className=' bg-white/30 p-4 rounded-lg'>
        <video src='https://res.cloudinary.com/dtsuvx8dz/video/upload/v1709562852/jujruw095co3l8qna670.mp4' height={300} width={300} className='rounded-lg' autoPlay controls loop />
    </div>
                
            </div>
 {/* <div className= 'bg- flex  flex-col sm:flex-row  justify-center items-center'>
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
 </div> */}
    </section>
  )
}

export default Hero