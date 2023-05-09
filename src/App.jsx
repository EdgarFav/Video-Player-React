import React, { useState, useRef } from 'react'
import { FaPlay, FaPause, FaBackward, FaForward } from 'react-icons/fa'
import './App.css'

function App() {
  const [isPlay, setIsPlay] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const videoRef = useRef()
  //console.log("videoRef", videoRef);

  function handlePlay() {
    const video = videoRef.current
    if (video.paused) {
      setIsPlay(true)
      video.play()
    } else {
      setIsPlay(false)
      video.pause()
    }
  }

  function handleRewind() {
    const video = videoRef.current
    video.currentTime -= 10
  }

  function handleFast() {
    const video = videoRef.current
    video.currentTime += 10
  }

  function handleTime() {
    const video = videoRef.current
    setCurrentTime(video.currentTime)
    setDuration(video.duration)
  }

  function handleProgress(e) {
    const video = videoRef.current
    video.currentTime = e.target.value
  }

  return (
    <div className="container">
      <h1>VIDEO PLAYER</h1>
      <video
        onTimeUpdate={handleTime}
        ref={videoRef}
        src="https://media.istockphoto.com/id/127737092/es/v%C3%ADdeo/azul-paro-posici%C3%B3n-elevada-en-la-branch.mp4?s=mp4-640x640-is&k=20&c=87bYgDjA6NhGUts63Nt7lkdsF_nGW_aHKG2zu1SSlMg=">
      </video>
      <div>
        <progress className='progress'
          max={duration}
          value={currentTime}
          onChange={handleProgress}
        ></progress>
      </div>
      <div className='nav_controls'>
        <div>
          <button onClick={handleRewind}><FaBackward /></button>
        </div>
        <div>
          <button className='play_pause' onClick={handlePlay}>
            {
              isPlay ? <FaPause /> : <FaPlay />
            }
          </button>
        </div>
        <div>
          <button onClick={handleFast}><FaForward /></button>
        </div>
        <div className='duration'>
          {currentTime.toFixed(2)} | {duration.toFixed(2)}
        </div>
      </div>
    </div>

  )
}

export default App

/*
current -> name value play() pause () duration ()
*/