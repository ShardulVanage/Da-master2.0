import React from 'react'

function Features() {
    const videos = [
  {
    title: 'Self Paced Program with 24X7 Support',
    description:
      'Learn the program at your own pace',
    image: "https://res.cloudinary.com/dtsuvx8dz/image/upload/v1706986641/d7uppu53w8rty5tbeagz.png",
    runtime: { minutes: 16, seconds: 54 },
  },
  {
    title: 'Course Completion Certificate',
    description:
      'Get yourself certified after completition of the course.',
     image: "https://res.cloudinary.com/dtsuvx8dz/image/upload/v1706986641/jwz5drl4747cn6ckfmyk.png",
    runtime: { minutes: 9, seconds: 12 },
  },
  {
    title: 'Internship Certificate',
    description:
      'Get a score of 80% in the assignments and you will be handed over an internship offer.',
    image: 'https://res.cloudinary.com/dtsuvx8dz/image/upload/v1706986640/nxdawnces4hqktiyz2vb.png',
    runtime: { minutes: 23, seconds: 25 },
  },
  {
    title:' Class Recordings.',
    description:
      ' Unlimited Hassle Free Accesst',
    image: "https://res.cloudinary.com/dtsuvx8dz/image/upload/v1706986641/tjkji3aribsc62r7qnzi.png",
    runtime: { minutes: 28, seconds: 44 },
  },
 {
    title:'24X7 chat support  ',
    description:
      ' Get unlimited chat support from our experts',
    image: "https://res.cloudinary.com/dtsuvx8dz/image/upload/v1708164754/gwohsoi1xgpuq2fmryay.png",
    runtime: { minutes: 28, seconds: 44 },
  }, {
    title:'Project Based Learning with Intense Knowledge.',
    description:
      ' Learn the skills by developing different projects throughout the sessions.',
    image: "https://res.cloudinary.com/dtsuvx8dz/image/upload/v1706986640/hjcnia3geraxdzrynkgf.png",
    runtime: { minutes: 28, seconds: 44 },
  }, 
]
  return (
    <section className='bg-slate-100 py-32 border-t-2 border-white'>
        <h1 className='text-3xl sm:text-6xl font-bold pb-8 text-center'>Discover our exclusive feature!!</h1>
        <div className='sm:px-40 flex sm:flex-row flex-col justify-between items-center h-full'>
            <div className='bg-slate-200 h-full border-4 border-double border-white py-12 w-full sm:w-1/2 flex flex-col justify-center items-center'>
                <img height={200} width={200} src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1707753152/wbsags244incans32rex.png" alt="" />
                <h1 className='py-12 text-2xl sm:text-3xl  text-center '>Experience learning through  action</h1>
                <p className='sm:w-2/3 text-clip  text-center '>
                    Embark on a journey of practical learning with hands-On assignments and Projects,
                     crafting confidence at every step.
                </p>
            </div>
         <div className= 'bg-slate-200 h-full border-4 border-double border-white py-12  sm:w-1/2 flex flex-col justify-end items-center'>
                <img height={200} width={200} src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1706986641/mvqnihoedrcvrpzixkiy.png" alt="" />
                <h1 className='py-12 text-2xl sm:text-3xl  text-center '>Receive comprehensive doubt resolution assistance</h1>
                <p className='sm:w-2/3 px-2 text-clip  text-center'>Access personalized 1-on-1 chat Support for doubt resolution daily from 6PM to 9AM,
                    including weekends. Additionally, </p>
            </div>
    
        </div>
        <div className='flex flex-col justify-center items-center text-center bg-slate-100 py-16 border-t-2 border-white'>
            <h1 className='pb-8 text-3xl  text-center'>Explore Additional Key Course Highlights</h1>
            
            <ol className=' w-3/4 grid grid-cols-1 gap-x-8 gap-y-10 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-3'>
 {videos.map((video) => (
            <li key={video.title} className="[counter-increment:video] ">
              <div
                className="bg-slate-200  relative flex h-44 items-center justify-center rounded-2xl px-6 shadow-lg"
                // style={{
                //   backgroundImage:
                //     'conic-gradient(from -49.8deg at 50% 50%, #7331FF 0deg, #00A3FF 59.07deg, #4E51FF 185.61deg, #39DBFF 284.23deg, #B84FF1 329.41deg, #7331FF 360deg)',
                // }}
              >
                <div className="flex  overflow-hidden rounded">
                  <img src={video.image}height={250} width={200} alt="" unoptimized />
                </div>
             
            </div>
              <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
                {video.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{video.description}</p>
            </li>
              ))}
            </ol>
        </div>
    </section>
  )
}

export default Features