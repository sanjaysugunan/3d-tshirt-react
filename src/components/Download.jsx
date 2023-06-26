import React from 'react';

const Download = ({downloadCanvasToImage}) => {
  return (
    <div className='filepicker-container'>
      <h2 className='text-center py-10 font-black text-base	'>Get a copy of your favorite Tshirt...</h2>
      <button className='rounded-full shadow-xl bg-cyan-950 text-slate-50 py-4 font-black' onClick={downloadCanvasToImage}>Download</button>
    </div>
  )
}

export default Download