import Image from 'next/image'
import React from 'react'

export default function form() {
  return (
<>
<div className="mt-20 min-w-screen min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center px-5 py-5">
    <div className="bg-transparent text-gray-500 rounded-3xl w-full overflow-hidden style:max-width:1000px">
        <div className="lg:flex w-full">
            <div className="hidden md:block w-1/2 py-10 px-10 transition duration-300 ease-in-out hover:scale-110">
            <Image src='/Images/form.png' alt='girl image' width={1050} height={1050}/>
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="mb-10">
                    <h1 className="font-bold text-5xl text-white">Get in Touch</h1>
                </div>
                <div>
                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text" className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="First Name"></input>
                         </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text" className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Last Name"></input>
                          </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text" className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Email Address"></input>
                         </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text" className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Phone Number"></input>
                          </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                                <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <textarea className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Message"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                        <button type="button" className="py-2.5 px-5 mr-10 mb-2 text-md font-medium text-white focus:outline-none bg-transparent rounded-full border border-gray-200 hover:bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 hover:text-white hover:border-none   focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Sent Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
  )
}
