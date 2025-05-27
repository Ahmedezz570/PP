import React from 'react'
import './LeftBar.css'
const LeftBar = () => {
  return (
    <div className='leftBar'>
      <div className='menuIcons'>
        <a href='' className='icons' >
          <img src='/general/logo.png' alt='home'className='logo'/>
        </a>
        <a href='' className='icons'>
          <img src='/general/home.svg' alt='home' className='icon'/>
        </a>
        <a href='' className='icons'>
          <img src='/general/create.svg' alt='home' className='icon'/>
        </a>
        <a href='' className='icons'>
          <img src='/general/updates.svg' alt='home' className='icon'/>
        </a>
        <a href='' className='icons'>
          <img src='/general/messages.svg' alt='home' className='icon'/>
        </a>
      </div>
      <a href='' className='icons'>
            <img src='/general/settings.svg' alt='home' className='icon'/>
          </a>
    </div>
  )
}

export default LeftBar
