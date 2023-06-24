
import React from 'react'
  
export const ProgressBar = ({operativos,existentes}) => {
  var resultado = Math.round((operativos/existentes) * 100) || 0
        
    return (
      <div className='h-[78%] w-full bg-zinc-400 rounded'>
        <div className={`rounded-l h-full bg-blue-600 text-left pl-2 flex items-center`} style={{width:resultado+'%'}}>
          <span className='text-5xl font-extrabold lg:text-lg '>{`${resultado}%`}</span>
        </div>
      </div>
    )
}
  