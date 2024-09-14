import { useState } from 'react'
import './App.css'
function App() {
  const [title] = useState("card")

  return (
    <>
      <div className="container w-full h-screen flex justify-center items-center gap-8">
        <div className="card w-80 h-96 relative cursor-pointer rounded-[20px]">
          <div className="top absolute top-1/2 -translate-y-1/2 w-full h-52 bg-[#5f7adb] rounded-[20px] flex justify-center items-center duration-1000 z-10">
            <i className="text-9xl text-white">🔥</i>
          </div>
          <div className="bottom absolute top-1/2 -translate-y-1/2 w-full h-45 p-4 text-justify bg-white rounded-[20px] flex flex-col justify-start items-start duration-1000">
            <h1 className="text-3xl mb-2 text-left">{title}</h1>
            <p>Card content goes here. This is some description inside the card that appears when hovered.</p>
            <button className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 mt-2 px-8 rounded'>Click</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
