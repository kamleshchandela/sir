import React from 'react'
import { services } from '../assets/assets.js'

export default function Container() {
  return (
    <div className='mt-8  w-full'>
      <div className='container mx-auto py-10 px-6 sm:px-12 md:px-24 lg:px-40 '>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {
            services.map((val,index)=>(
              <div key={val.id} className='border-2 rounded-xl border-amber-400 flex flex-col md:flex-row items-center gap-5 hover:scale-105 duration-300 transition-all'>
                
                {/* service image icon */}
                <div className='flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center'>
                  <val.icon className='w-10 h-10'/>
                </div>

                {/* service title and description */}
                <div className='text-center md:text-start'>
                    <h1 className='text-xl text-black/50'>{val.title}</h1>
                    <p>{val.description}</p>
                </div>

              </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}