import React from 'react'
import Demon from '../img/demon.png'
import Slayer from '../video/demon-slayer.mp4'
import '../video/Video.css'

const Video = () => {
  return (
    <div class="">
      <section class="netflix-home-video">
        <div class="top"></div>
        {/* <div class="bottom"></div> */}
        <video autoPlay loop muted>
            <source src={Slayer} type="video/mp4"/>
        </video>
        <div class="content">
          <section class="left">
            <img src={Demon} alt="" />
            <div class="mt-2 d-flex">
              <button type="button" class="btn btn-light m-2">
                <i class="bi bi-play-fill" style={{color: '#000', padding: '0px'}}></i>
                Play Now
              </button>
              <button type="button" class="btn btn-secondary m-2">
                <i class="bi bi-info-circle" style={{padding: '0px'}}></i>
                More Info
              </button>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Video
    