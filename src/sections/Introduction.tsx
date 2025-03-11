import React from 'react'
import Tag from '@/components/Tag';
const Introduction = () => {
    const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

  return (

    <section className=' py-28 lg:py-40'>
        <div className='container mx-auto'>
            <div className='w-full flex justify-center'>
            <Tag className='text-center'>Introducing Layers</Tag>
            </div>
         
          <div className='mt-10 text-4xl md:text-6xl lg:text-7xl text-center font-medium'>{" "}
            <span className='text-white'>Your creative process deserves better. </span>
            <span className='text-white/50'>{text}</span>
            <span className='text-lime-400 block'>That's why we built Layers.</span>
            </div>
        </div>

    </section>
  )
}
export default Introduction
