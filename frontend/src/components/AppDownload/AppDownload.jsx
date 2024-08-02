/* eslint-disable no-unused-vars */
import React from 'react'
import './AppDownload.css'
import { assets } from '../../frontend_assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
    <p>For Better Experience Download <br /> FlavorFly App </p>
    <div className='app-download-platforms'>
        <img src={assets.play_store} />
        <img src={assets.app_store} />

    </div> 
      
    </div>
  )
}

export default AppDownload
