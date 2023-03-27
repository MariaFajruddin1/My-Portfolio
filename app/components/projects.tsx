import Image from 'next/image'
import React from 'react'

export default function projects() {
  return (
    <div className=''>
      <div className='mt-10'>
        <h1 className='text-4xl font-bold text-center'>My Projects</h1>
        <p className='text-center lg:pr-80 pr-9 lg:pl-80 pl-14 pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptate nesciunt sunt cum aut deserunt ullam, sint eos earum dignissimos saepe odio deleniti ipsam unde, totam maiores alias cupiditate quo.</p>
      </div>
      <div className='lg:flex space-x-8 lg:ml-60  mt-20 ml-10 mr-10'>
        <a href='https://panaverse-website-o6a51awpc-mariafajruddin-gmailcom.vercel.app/'>
          <div className='max-w-xs transition duration-300 ease-in-out hover:scale-110'>
          <Image className="rounded-t-xl " src="/Images/project1.png" alt="image" height={500} width={500}/>
            <h1 className='text-center font-bold text-2xl mt-5'>Project 01</h1>
            <p className='text-center text-lg'>Panaverse dao Website using chakra UI</p>
            <button type="button" className="mt-5 ml-20 py-2.5 px-5 mr-10 mb-2 text-md font-medium text-black bg-transparent rounded-full border border-gray-200 hover:bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 hover:text-white hover:border-none  ">Have a Look</button>
          </div>
        </a>
        <a href='https://pricingui-fawn.vercel.app/'>
          <div className='max-w-xs transition duration-300 ease-in-out hover:scale-110'>
            <Image className="rounded-t-xl " src="/Images/project02.jpg" alt="image" height={500} width={500}/>
            <h1 className='text-center font-bold text-2xl mt-5'>Project 02</h1>
            <p className='text-center text-lg'>Pricing UI using Chakra UI</p>
            <button type="button" className="mt-5 ml-20 py-2.5 px-5 mr-10 mb-2 text-md font-medium text-black bg-transparent rounded-full border border-gray-200 hover:bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 hover:text-white hover:border-none  ">Have a Look</button>
          </div>
        </a>
        <a href='https://www.npmjs.com/settings/mariafajruddin/packages'>
          <div className='max-w-xs transition duration-300 ease-in-out hover:scale-110'>
          <Image className="rounded-t-xl " src="/Images/npm1.png" alt="image" height={500} width={500}/>
            <h1 className='text-center font-bold text-2xl mt-5'>Project 03</h1>
            <p className='text-center text-lg'>My NPM all Packages</p>
            <button type="button" className="mt-5 ml-20 py-2.5 px-5 mr-10 mb-2 text-md font-medium text-black bg-transparent rounded-full border border-gray-200 hover:bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 hover:text-white hover:border-none  ">Have a Look</button>
          </div>
        </a>
      </div>
    </div>
  )
}
