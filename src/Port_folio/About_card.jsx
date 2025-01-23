import React from 'react'

export default function About_card({card}) {
    return (
      <div className='flex overflow-hidden mt-4 flex-wrap flex-col items-start font-semibold bg-black/50 justify-center p-2 w-3/5 hover:shadow-xl hover:shadow-black/40'>
            <div className='flex items-center '>
            <span className='text-4xl ' style={{color:"cyan"}}>{card.no}</span>
            <span className='text-2xl '>+</span >
            </div>
            <div>
                <span>{card.name}</span>
            </div>
     </div>
  )
}
