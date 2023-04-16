import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>VIDEO PLAYER</h1>
      <video controls src="https://media.istockphoto.com/id/1070580916/es/v%C3%ADdeo/t-l-grupo-de-personas-caminando-en-las-escaleras-por-la-noche.mp4?s=mp4-640x640-is&k=20&c=2RixD3-bwJQQ345Ys4vXqCVwbyDZcvGH7IRUJV5pXAs="></video>
    </div>
  )
}

export default App
