import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200 flex justify-center' style={{ backgroundColor: color }}>
        <div className='flex flex-wrap justify-center p-4 bg-white fixed bottom-22 rounded-4xl shadow-lg'>
          <button onClick={() => setColor("red")} className='px-4 py-1 mx-1 outline-0 rounded-4xl text-white cursor-pointer' style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("green")} className='px-4 py-1 mx-1 outline-0 rounded-4xl text-white cursor-pointer' style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("blue")} className='px-4 py-1 mx-1 outline-0 rounded-4xl text-white cursor-pointer' style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => setColor("purple")} className='px-4 py-1 mx-1 outline-0 rounded-4xl text-white cursor-pointer' style={{ backgroundColor: "purple" }}>Purple</button>
          <button onClick={() => setColor("pink")} className='px-4 py-1 mx-1 outline-0 rounded-4xl text-black cursor-pointer' style={{ backgroundColor: "pink" }}>Purple</button>
        </div>
      </div>
    </>
  )
}

export default App
