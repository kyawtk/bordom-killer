import React, { useContext } from 'react'
import { AppContext } from './AppContext'
const InputForm = () => {
    const {fetchData} = useContext(AppContext)
  return (
    <div className='flex justify-center p-5 mb-5  w-full'>
         <button
        onClick={fetchData}
        className="animate-bounce transition hover:scale-125 active:scale-100 skew-x-2 font-bold p-3 m-6 text-center rounded-lg bg-red-600 text-white hover:bg-red-500"
      >
        I'm Bored, tell me  <span className='font-bold inline-block skew-x-2 text-red-500 bg-red-50 p-3 '>What to do</span>
      </button>
    </div>
  )
}

export default InputForm