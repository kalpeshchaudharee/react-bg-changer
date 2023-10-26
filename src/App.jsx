import { useState } from 'react'

function App() {
  const colorArray = [
    'red', 'green', 'blue', 'orange'
  ];
  const [color, setColor] = useState("olive")
  return (
    <div className='h-screen w-screen duration-500' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0'>
        <div className='p-2 bg-white rounded-md'>
          {
            colorArray.map((item, index) => (
              <button key={index} onClick={() => setColor(item)} style={{ backgroundColor: item }} className='rounded-lg text-white py-2 px-4 mx-2'>{item}</button>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
