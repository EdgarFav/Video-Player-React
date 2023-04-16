import React, { useState, useRef } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'
import './App.css'

function App() {
  const [isPlay, setIsPlay] = useState(false)
  const videoRef = useRef()
  console.log("videoRef", videoRef);

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

  return (
    <div className="App">
      <h1>VIDEO PLAYER</h1>
      <video ref={videoRef} src="https://media.istockphoto.com/id/1070580916/es/v%C3%ADdeo/t-l-grupo-de-personas-caminando-en-las-escaleras-por-la-noche.mp4?s=mp4-640x640-is&k=20&c=2RixD3-bwJQQ345Ys4vXqCVwbyDZcvGH7IRUJV5pXAs="></video>
      <div className='nav_controls'>
        <div>
          <button className='play_pause' onClick={handlePlay}>
            {
              isPlay ? <FaPause /> : <FaPlay />
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