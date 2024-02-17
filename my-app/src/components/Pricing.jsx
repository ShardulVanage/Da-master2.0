import React from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'
const tiers = [
    {
        id: 'tier-hobby',
        name: 'For Indian student',
        href: 'https://pages.razorpay.com/ZepDAM',
        priceMonthly: "₹4999",
        ndprice: "₹9999",

        features: [
            'Self Paced', 'Intense Syllabus', '24/7 WhatsApp Support', 'Interview Prep Kit', 'Course & Internship Certificate', 'Resume Preparation',
        ],
    },
    
]

function Pricing() {
   
  return (
    <section id='price' className=''>
        <div name='pricing' className="bg-gray-900">
            <div className="relative overflow-hidden pt-32 pb-96 lg:pt-12 bg-gradient-to-t from-blue-950  to-gray-900">
                <div className='rotate-180  '>
                    <img
                        className="absolute bottom-0 left-1/2 w-full max-w-none -translate-x-1/2 hidden sm:block opacity-30 "
                       src='https://res.cloudinary.com/dtsuvx8dz/image/upload/v1708190341/ctdrtmmxbqcekug96mc6.png'
                        alt=""
                    />
                </div>
                <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        <h2 className="text-6xl font-bold leading-8 bg-clip-text text-transparent bg-gradient-to-t from-blue-400 to-blue-700 py-8 ">Pricing</h2>
                        <p className="mt-2 text-4xl font-bold tracking-tight text-white drop-shadow-xl">
                            The right price for you, <br className="hidden sm:inline lg:hidden" />
                            whoever you are
                        </p>
                        <p className="mt-6 text-lg leading-8 text-white/60">
                            Unlock your learning potential with affordable prices that fit every budget!
                        </p>
                    </div>
                </div>
            </div>
            <div className="flow-root bg-white pb-32 lg:pb-40">
                <div className="relative -mt-80">
                    <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-sm lg:grid-cols-1 lg:gap-8">
                            {tiers.map((tier) => (
                                <div key={tier.name} className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10">
                                    <div className="p-8 sm:px-10 sm:pt-9">
                                        
                                        <div className="mt-4 flex items-baseline text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
                                            {tier.priceMonthly}

                                            <span className='pl-2 text-2xl sm:text-3xl text-blue-600'><del >{tier.ndprice}</del><span className='text-lg text-black pl-2'>50%</span><span className=' pl-0.5 text-lg text-black '>Off</span> </span>
                                        </div>

                                    </div>
                                    <div className="flex flex-1 flex-col p-2 pt-0">
                                        <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
                                            <ul role="list" className="space-y-6">
                                                {tier.features.map((feature) => (
                                                    <li key={feature} className="flex items-start">
                                                        <div className="flex-shrink-0">
                                                            <CheckIcon className="h-6 w-6 text-blue-500" aria-hidden="true" />
                                                        </div>
                                                        <p className="ml-3 text-sm leading-6 text-gray-600">{feature}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="mt-8">
                                                <a
                                                    href={tier.href}
                                                    className="inline-block w-full rounded-lg bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-indigo-700"
                                                    aria-describedby={tier.id}
                                                >
                                                    Buy Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Pricing