import React from 'react'

function Faq() {
    const faq =[
        {
            q:"I don't have coding background or experience in IT as such how this will help me ?",
            a:"Our beginner-friendly course welcomes learners from diverse backgrounds, with 30% coming from non-coding fields like mechanical, civil, commerce, arts, MBA, BCA, bio-tech, etc. Many graduates secure jobs and benefits after completion. Our Data Engineering Course provides ample support for job readiness."
        },
        {
            q:"What is the method of learning?",
            a:"The course includes video tutorials and assignments. You'll find tutorial links and coding questions in each assignment. Teaching Assistants are available for support from 6 PM to 9 AM daily, with a live doubt session on Zoom from 8-9 PM. Submit your assignments for solutions."

        },
         {
            q:"Is this one time payment or monthly subscription ?",
            a:"It’s one time payment and you will get lifetime access to this course experience."
        }, {
            q:"Do you have refund policy?",
            a:"We do not have refund policy. Please visit our page for more details"
        },
    ]
  return (
  <section class="pt-28 bg-white overflow-hidden">
  <div class="container px-4 mx-auto">
    <div class="flex flex-wrap -m-8">
      <div class="w-full md:w-1/2 p-8">
        <div class="flex flex-col justify-between h-full">
          <div class="md:max-w-md block">
            <h2 class="mb-4 text-gray-900 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">Frequently Asked Questions</h2>
            <p class="mb-12 text-gray-600 font-medium leading-relaxed">Find answers to common queries about our courses, assignments, and support services</p>
          </div>

          <div class="block">
            <div class="mb-7 flex flex-wrap">
              <div class="w-full">
                {faq.map((faqs)=>(
<div key={faqs.q} class="pb-5 border-b border-gray-300 py-3">
                  <div class="flex flex-wrap -m-1.5">
                    <div class="flex-1 p-1.5">
                      <h3 class="mb-5 text-lg text-gray-950 font-bold font-heading leading-normal">{faqs.q}</h3>
                      <p class="text-gray-600 font-medium leading-relaxed">{faqs.a}</p>
                    </div>
                    <div class="w-auto p-1.5">
                      <a href="#">
                        {/* <svg class="relative top-1.5" width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="9" cy="9" r="9" fill="#2563EB"></circle>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M6 9.00002C6 8.66865 6.26863 8.40002 6.6 8.40002L11.4 8.40002C11.7314 8.40002 12 8.66865 12 9.00002C12 9.3314 11.7314 9.60002 11.4 9.60002L6.6 9.60002C6.26863 9.60002 6 9.3314 6 9.00002Z" fill="white"></path>
                        </svg> */}
                      </a>
                    </div>
                  </div>
                </div>
                ))}
                
              </div>
              {/* <div class="w-full">
                <a class="block border-b border-gray-300" href="#">
                  <div class="flex flex-wrap justify-between py-7 -m-1.5">
                    <div class="flex-1 p-1.5">
                      <h3 class="text-lg font-bold font-heading leading-normal">How does App help people in problems?</h3>
                    </div>
                    <div class="w-auto p-1.5">
                      <svg class="relative top-1.5" width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="9" r="9" fill="#2563EB"></circle>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00078 4.79999C9.33215 4.79999 9.60078 5.06862 9.60078 5.39999V8.39999H12.6008C12.9322 8.39999 13.2008 8.66862 13.2008 8.99999C13.2008 9.33136 12.9322 9.59999 12.6008 9.59999H9.60078V12.6C9.60078 12.9314 9.33215 13.2 9.00078 13.2C8.66941 13.2 8.40078 12.9314 8.40078 12.6V9.59999H5.40078C5.06941 9.59999 4.80078 9.33136 4.80078 8.99999C4.80078 8.66862 5.06941 8.39999 5.40078 8.39999L8.40078 8.39999V5.39999C8.40078 5.06862 8.66941 4.79999 9.00078 4.79999Z" fill="white"></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div class="w-full">
                <a class="block border-b border-gray-300" href="#">
                  <div class="flex flex-wrap justify-between py-7 -m-1.5">
                    <div class="flex-1 p-1.5">
                      <h3 class="text-lg font-bold font-heading leading-normal">Why we are so confident about the future projects?</h3>
                    </div>
                    <div class="w-auto p-1.5">
                      <svg class="relative top-1.5" width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="9" r="9" fill="#2563EB"></circle>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00078 4.79999C9.33215 4.79999 9.60078 5.06862 9.60078 5.39999V8.39999H12.6008C12.9322 8.39999 13.2008 8.66862 13.2008 8.99999C13.2008 9.33136 12.9322 9.59999 12.6008 9.59999H9.60078V12.6C9.60078 12.9314 9.33215 13.2 9.00078 13.2C8.66941 13.2 8.40078 12.9314 8.40078 12.6V9.59999H5.40078C5.06941 9.59999 4.80078 9.33136 4.80078 8.99999C4.80078 8.66862 5.06941 8.39999 5.40078 8.39999L8.40078 8.39999V5.39999C8.40078 5.06862 8.66941 4.79999 9.00078 4.79999Z" fill="white"></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div> */}
            </div>
            <p class="font-medium text-xl text-gray-900">
              <span>Still have any questions?</span>
              <a class="text-indigo-600 hover:text-indigo-700 font-semibold" href="#free-chapters">Contact us</a>
            </p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 p-8 flex justify-end items-end">
        <img class="mx-auto transform h-3/4 transition ease-in-out duration-1000" src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1708866970/fxwmyf9wdiswpf8e6kfk.png" alt=""/>
      </div>
    </div>
  </div>
</section>
  )
}

export default Faq