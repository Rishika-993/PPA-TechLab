import React from 'react'
import Icon from '../../assets/Icon2.svg';
import S1 from '../../assets/footer/S1.png'
import S2 from '../../assets/footer/S2.png'
import S3 from '../../assets/footer/S3.png'
import S4 from '../../assets/footer/S4.png'
import send from '../../assets/footer/send.png'


function Footer() {
  return (
    <div>
      <div className="bg-gray-100 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#263238] px-10 md:px-40 lg:px-96">
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <button className="mt-8 bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
          Get a Demo →
        </button>
      </div>
      <footer className="bg-[#263238] text-white py-16">
        <div className="container mx-auto px-8">
          <div className="flex flex-wrap justify-between">
            <div className="mb-6 flex flex-col space-y-4 md:space-y-8">
            <div className='flex space-x-2 items-center'>
                <img className="h-8 w-12" src={Icon} alt="Icon" />
                <div className='text-4xl font-bold'>Nexcent</div>
            </div>
              <p>Copyright © 2020 Nexcent ltd.<br></br>All rights reserved</p>
              <div className="flex mt-4 space-x-4">
                <a href="#" aria-label="Instagram">
                  <img src={S1} alt="Instagram" className="h-6 lg:h-8" />
                </a>
                <a href="#" aria-label="Dribbble">
                  <img src={S2} alt="Dribbble" className="h-6 lg:h-8" />
                </a>
                <a href="#" aria-label="Twitter">
                  <img src={S3} alt="Twitter" className="h-6 lg:h-8" />
                </a>
                <a href="#" aria-label="YouTube">
                  <img src={S4} alt="YouTube" className="h-6 lg:h-8" />
                </a>
              </div>
            </div>
            <div className="flex flex-wrap justify-between my-10 lg:my-0 md:space-x-16 lg:space-x-24 w-full md:w-auto">
              <div className="w-1/2 md:w-auto mb-6 md:mb-0">
                <h3 className="font-bold mb-2 text-xl">Company</h3>
                <ul className='flex flex-col md:space-y-4 md:py-4'>
                  <li><a href="#" className="hover:text-white">About us</a></li>
                  <li><a href="#" className="hover:text-white">Blog</a></li>
                  <li><a href="#" className="hover:text-white">Contact us</a></li>
                  <li><a href="#" className="hover:text-white">Pricing</a></li>
                  <li><a href="#" className="hover:text-white">Testimonials</a></li>
                </ul>
              </div>
              <div className="w-1/2 md:w-auto mb-6 md:mb-0">
                <h3 className="font-bold mb-2 text-xl">Support</h3>
                <ul className='flex flex-col md:space-y-4 md:py-4'>
                  <li><a href="#" className="hover:text-white">Help center</a></li>
                  <li><a href="#" className="hover:text-white">Terms of service</a></li>
                  <li><a href="#" className="hover:text-white">Legal</a></li>
                  <li><a href="#" className="hover:text-white">Privacy policy</a></li>
                  <li><a href="#" className="hover:text-white">Status</a></li>
                </ul>
              </div>
              <div className="w-full md:w-auto flex flex-col md:space-y-4">
                <h3 className="font-bold mb-2 text-xl">Stay up to date</h3>
                <form className="flex">
                  <input type="email" placeholder="Your email address" className="px-4 py-2 rounded-l bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none" />
                  <button type="submit" className="bg-gray-700 text-white px-4 py-2 rounded-r hover:bg-gray-600 focus:outline-none">
                    <img src={send} alt="Send" className="h-6" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
