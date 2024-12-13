import React from 'react'
import './Support.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Support = () => {
  return (
    <>
      <div className='adjustEverything'>
        <Navbar />
        <div className='Support'>
          <h1 className='title'>Support</h1>
          <div className="separator"></div>
          <form action="#" method="get">
            <input type="text" name="name" id="name" placeholder='Name' />
            <input type="text" name="phone" id="phone" placeholder='Phone' />
            <input type="email" name="email" id="email" placeholder='Email' />
            <textarea name="message" id="message" placeholder='Message...'></textarea>
            <button>Contact us</button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Support