
'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useScroll,motion, useMotionValue, useMotionValueEvent, useTransform } from 'framer-motion';
import Tag from '@/components/Tag';

import { twMerge } from 'tailwind-merge';
const Introduction = () => {
  const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

  const words=text.split(' ')
  const scrollTarget=useRef<HTMLDivElement>(null)
  const[currentWord,setCurrentWord]=useState(0)
  const {scrollYProgress}=useScroll({target:scrollTarget,offset:['start end','end start']})
  const wordIndex=useTransform(scrollYProgress,[0,1],[0,words.length])
 

  useEffect(()=>{
    wordIndex.on('change',(value)=>{
      setCurrentWord(value)
    })
  },[wordIndex])


  return (

    <section className=' py-28 lg:py-40 px-4'>
      <div className='container mx-auto'>

        <div className='sticky top-20 md:top-28 lg:top-40'>
          <div className=' flex justify-center'>
            <Tag className='text-center'>Introducing Layers</Tag>
          </div>

          <div className='mt-10 text-4xl md:text-6xl lg:text-7xl text-center font-medium'>{" "}
            <span className='text-white'>Your creative process deserves better. </span>
            <span className=''>{words.map((word,index)=>(
              <span key={index} className={twMerge('text-white/15 transition duration-00 ease-in-out',index<currentWord && "text-white")}>{`${word} `}</span>
            ))}</span>
            <span className='text-lime-400 block'>That's why we built Layers.</span>
          </div>
       

        </div>
        <div className='h-[150vh]' ref={scrollTarget}></div>

      </div>
     
    </section>
  )
}
export default Introduction
