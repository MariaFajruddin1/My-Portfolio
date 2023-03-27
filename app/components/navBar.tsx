import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function navBar() {
    return (
        <>
        <div className="bg-[url('/Images/banner-bg.png')] pb-10">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1 lg:ml-20">
                        <a href="#" className="m-1 p-4">
                            <span className="sr-only">Your Company</span>
                            <h1 className='text-white text-5xl font-semibold'>Maria</h1>
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <a href="#" className="text-md font-semibold leading-6 text-gray-400 hover:text-white">Home</a>

                        <a href="" className="text-md font-semibold leading-6 text-gray-400 hover:text-white">Skills</a>

                        <a href="#" className="text-md font-semibold leading-6 text-gray-400 hover:text-white">Projects</a>

                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <div className="sm:flex sm:items-center sm:justify-between pb-3">
                            <div className="flex mt-5 space-x-6 sm:justify-center sm:mt-0">
                                <a href="#" className="text-gray-400 hover:text-white dark:hover:text-white">
                                    <svg className="w-8 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                </a>
                                <a href="https://twitter.com/MariaFajruddin" className="text-gray-400 hover:text-white dark:hover:text-white">
                                    <svg className="w-8 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                </a>
                                <a href="https://github.com/MariaFajruddin1" className="text-gray-400 hover:text-white dark:hover:text-white">
                                    <svg className="w-8 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>

                                </a>
                            </div>
                        </div>
                        <div>
                            <button type="button" className="ml-5 py-2.5 px-5 mr-10 mb-2 text-md font-medium text-white focus:outline-none bg-transparent rounded-full border border-gray-200 hover:bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 hover:text-white hover:border-none   focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Contact Me</button>
                        </div>

                    </div>
                </nav>
                {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
                {/* <div className="lg:hidden" role="dialog" aria-modal="true"> */}
                    {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
                    {/* <div className="fixed inset-0 z-50"></div>
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img className="h-8 w-auto" src="/Images/logo.png" alt=""></img>
                            </a>
                            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                                <span className="sr-only">Close menu</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-black hover:bg-gray-50">Home</a>

                                    <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-black hover:bg-gray-50">Skills</a>

                                    <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-black hover:bg-gray-50">Projects</a>
                                </div>
                                <div className="sm:flex sm:items-center sm:justify-between pb-3">
                                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                                        <a href="#" className="text-black dark:hover:text-white">
                                            <svg className="w-8 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                        </a>
                                        <a href="#" className="text-black dark:hover:text-white">
                                            <svg className="w-8 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                        </a>
                                        <a href="#" className="text-black dark:hover:text-white">
                                            <svg className="w-8 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>

                                        </a>
                                    </div>
                                </div>
                                <div className="py-6">
                                    <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-black rounded-full border border-gray-200 hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Contact Me</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>*/}
            </header> 

            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <svg className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
                        <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                        <defs>
                            <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#9089FC" />
                                <stop offset="1" stop-color="#FF80B5" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className='lg:flex'>
                    <div className='text-white mt-60 lg:ml-20 lg:mr-40'>
                        <p className='mt-5 pt-2 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-xl font-semibold text-center box-border h-12 w-80 border-2 '>Welcome to My Portfolio</p>
                        <h1 className='mt-5 text-5xl font-bold'>Hi! I am Maria Fajruddin,</h1>
                        <h1 className='mt-5 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900'>A Web Developer</h1>
                        <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quaerat nobis hic culpa suscipit omnis officiis placeat similique. Rem quia, consequatur reprehenderit aut explicabo quaerat exercitationem corporis suscipit praesentium alias</p>
                        <br/>
                        <br/>
                        <a className='' href=''>Contact Me <span aria-hidden="true">→</span></a>
                    </div>
                    <div className='mt-40 transition duration-300 ease-in-out hover:scale-110'>
                    <Image src='/Images/header-img.png' alt='image' width={1070} height={1070}/>
                    </div>
                </div>



                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                    <svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
                        <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                        <defs>
                            <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#9089FC" />
                                <stop offset="1" stop-color="#FF80B5" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
        </>
    )
}
