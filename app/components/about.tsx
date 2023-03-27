import Image from 'next/image'
import React from 'react'

export default function about() {
  return (
    <div className='mt-10 '>
      <div className='space-x-3 flex justify-center'>
      <Image src='/Images/person.png' alt='girl image' width={30} height={30}/>
        <h1 className='item-center text-4xl font-bold'>About</h1>
        <h1 className='item-center text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900'>  Me!</h1>
      </div>
      <div className='lg:flex lg:ml-40 ml-10 lg:mr-20 mr-10 mt-10'>
        <div className='transition duration-300 ease-in-out hover:scale-110'>
          <Image src='/Images/girl.png' alt='girl image' width={1050} height={1050}/>
        </div>
        <div className='pt-28 lg:w-1/2 w-full mr-10'>
          <h1 className='font-bold text-2xl'>I am Maria Fajruddin</h1>
          <h4 className='text-xl font-semibold'>Web Developer</h4>
          <p className='text-md text-left mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam recusandae fuga quaerat omnis maiores, itaque consequatur odio hic eveniet laborum cupiditate explicabo dolorem, harum corrupti ullam? Vitae quod voluptates nulla
          </p>
          <button type="button" className="mt-5 py-2.5 px-5 text-md font-medium text-black focus:outline-none bg-transparent rounded-full border border-black hover:bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 hover:text-white hover:border-none   focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Contact Me</button>
        </div>
      </div>
    </div>
  )
}
