import React from 'react'

const CallToAction = () => {
  return (
    <section className='py-24 px-4'>
      <div className=' flex overflow-x-clip gap-6 p-4'>
        <div className='flex flex-none gap-16'>
        {Array.from({length:10}).map((_,index)=>{
                return(
                    <div className=' inline-flex gap-6 text-7xl items-center font-medium' key={index}>
                    <span className=' text-lime-400  text-5xl'>&#10038;</span> Try it for free
                    </div>
                )
           })}
           
        </div>
          
           
      </div>
    </section>
  )
}

export default CallToAction
