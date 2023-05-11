import React, { useState, useRef } from 'react'
import { FaPlay, FaPause, FaBackward, FaForward, FaVolumeMute, FaVolumeUp, FaCompress, FaExpand } from 'react-icons/fa'
import './App.css'

function App() {
  const [isPlay, setIsPlay] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isMute, setIsMute] = useState(false)
  const [volume, setVolume] = useState(1)
  const [isFull, setIsFull] = useState(false)
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

  function handleMute() {
    const video = videoRef.current
    video.muted = !video.muted
    setIsMute(!isMute)
  }

  function handleVolume(e) {
    const video = videoRef.current
    video.volume = e.target.value
    setVolume(video.volume)
  }

  function handleFullScreen(e) {
    if (!isFull) {
      setIsFull(true)
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      }
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen()
    } else if (videoRef.current.mozRequestFullscreen) {
      videoRef.current.mozRequestFullscreen()
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen()
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.mozCancelFullscreen) {
        document.mozCancelFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    }
    setIsFull(!isFull)

  }

  return (
    <div className="container">
      <h1>VIDEO PLAYER</h1>
      <video
        onTimeUpdate={handleTime}
        ref={videoRef}
        src="https://media.istockphoto.com/id/127737092/es/v%C3%ADdeo/azul-paro-posici%C3%B3n-elevada-en-la-branch.mp4?s=mp4-640x640-is&k=20&c=87bYgDjA6NhGUts63Nt7lkdsF_nGW_aHKG2zu1SSlMg=">
      </video>
      <div className='progress'>
        <progress
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
        <div className='volume'>
          <button onClick={handleMute}>
            {isMute ? <FaVolumeMute /> : <FaVolumeUp />}
          </button >
          <input
            type="range"
            onChange={handleVolume}
            value={volume}
            name='volume_slide'
            min="0"
            max="1"
            step="0.1"
          />
        </div>
        <div className='duration'>
          {currentTime.toFixed(2)} | {duration.toFixed(2)}
        </div>
        <div>
          <button onClick={handleFullScreen}>
            {
              isFull ? <FaCompress /> : <FaExpand />
            }
          </button>
        </div>
      </div>
    </div>

  )
}

export default App

/*
current -> name value play() pause () duration ()
*/