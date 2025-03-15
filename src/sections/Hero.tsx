"use client"
import Button from '@/components/Button'
import React, { useEffect } from 'react'
import DesignExample1Image from "@/assets/images/design-example-1.png"
import DesignExample2Image from "@/assets/images/design-example-2.png"
import CursorYouImage from "@/assets/images/cursor-you.svg"
import Image from 'next/image'
import Pointer from '@/components/Pointer'
import { delay, motion } from "framer-motion"
import { useAnimate } from 'framer-motion'
const Hero = () => {


  const [leftDesignScope, leftDesignAnimate] = useAnimate()
  const [leftPointerScope, leftPointerAnimate] = useAnimate()
  const [rightDesignScope,rightDesignAnimate]=useAnimate()
  const [rightPointerScope,rightPointerAnimate]=useAnimate()

  useEffect(()=>{
    leftDesignAnimate([
      [leftDesignScope.current,{opacity:1},{duration:0.5}],
      
      [leftDesignScope.current,{x:0,y:0},{duration:0.5}],
    ])

    leftPointerAnimate([
      [leftPointerScope.current,{opacity:1},{duration:0.5}],
      [leftPointerScope.current,{x:-100,y:0},{duration:0.5}],
      [leftPointerScope.current,{x:0,y:[0,16,0]},{duration:0.5,ease:'easeIn'}],
    ])

    rightDesignAnimate([
      [rightDesignScope.current,{opacity:1},{duration:0.5,delay:1.5}],
      [rightDesignScope.current,{x:0,y:0},{duration:0.5}],
    ])

    rightPointerAnimate([
      [rightPointerScope.current,{opacity:1},{duration:0.5,delay:1.5},],
      [rightPointerScope.current,{x:175,y:0},{duration:0.5}],
      [rightPointerScope.current,{x:0,y:[0,20,0]},{duration:0.5,ease:'easeIn'}],
    ])
  },[])

  return (
    <section className='py-24  overflow-x-clip px-4' style={{cursor:`url(${CursorYouImage.src}),auto`}}>

      <div className=' relative'>
       <motion.div className='absolute -top-16 -left-32 hidden lg:block' ref={leftDesignScope} initial={{opacity:0,x:-100,y:100}} drag >

        <Image src={DesignExample1Image} alt='design_example_1_alt' draggable="false" />
      </motion.div>



      <motion.div className='absolute -top-16 -right-64 hidden lg:block'  ref={rightDesignScope} initial={{opacity:0,x:100,y:100}} drag >
        <Image src={DesignExample2Image} alt='design_example_2_alt'  draggable="false"/>
      </motion.div>

      <motion.div className='absolute top-56 left-56  hidden lg:block'  ref={leftPointerScope} initial={{opacity:0,y:100,x:-200}} >
        <Pointer name="Andrea" />
      </motion.div>


      <motion.div className='absolute  top:-8 right-80 hidden lg:block' ref={rightPointerScope} initial={{opacity:0,x:275,y:100}}>
        <Pointer name="Jason" color='red' />
      </motion.div>


      <div className='flex justify-center'>

        <div className='inline-flex py-1 px-3 bg-gradient-to-r  from-purple-400 to bg-pink-400 rounded-full text-neutral-950 font-semibold'>✨ $7.5 Million seed round raised</div>
      </div>
      <h1 className='text-5xl font-medium text-center mt-6 md:text-7xl lg:text-8xl max-w-4xl mx-auto'>Impactful design, created effortlessly</h1>
      <p className='text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto'>Design Tools shouldn't slow you down. Layers combine powerful features with intuitive interface that keeps you in creative flow</p>
      <form action="" className='rounded-full border border-white/15 p-2 mt-8 flex items-center max-w-lg mx-auto'>
        <input type="email" placeholder='Enter your email' className='bg-transparent px-4 outline-none flex-1' />
        <Button type='submit' variant='primary' className='whitespace-nowrap h-5' size="sm" >Sign Up</Button>
      </form>

    </div>

      
    </section >
  )
}

export default Hero
