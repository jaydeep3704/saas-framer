import Button from '@/components/Button'
import React from 'react'
import DesignExample1Image from "@/assets/images/design-example-1.png"
import DesignExample2Image from "@/assets/images/design-example-2.png"
import Image from 'next/image'


const Hero = () => {
  return (
    <section className='py-24 overflow-x-clip'> 
      <div className='px-4 relative'>
            <div className='absolute -top-16 -left-32 hidden lg:block'>
              <Image src={DesignExample1Image} alt='design_example_1_alt'/>
            </div>
            <div className='absolute -top-16 -right-64 hidden lg:block'>
              <Image src={DesignExample2Image} alt='design_example_2_alt'/>
            </div>



            <div className='flex justify-center'>
            <div className='inline-flex py-1 px-3 bg-gradient-to-r  from-purple-400 to bg-pink-400 rounded-full text-neutral-950 font-semibold'>✨ $7.5 Million seed round raised</div>
            </div>
            <h1 className='text-6xl font-medium text-center mt-6 md:text-7xl lg:text-8xl max-w-4xl mx-auto'>Impactful design, created effortlessly</h1>
            <p className='text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto'>Design Tools shouldn't slow you down. Layers combine powerful features with intuitive interface that keeps you in creative flow</p>
            <form action="" className='rounded-full border border-white/15 p-2 mt-8 flex items-center max-w-lg mx-auto'>
              <input type="email" placeholder='Enter your email' className='bg-transparent px-4 outline-none flex-1'/>
              <Button type='submit'  variant='primary' className='whitespace-nowrap h-5' size="sm" >Sign Up</Button>
            </form>
      </div>

      
    </section>
  )
}

export default Hero
