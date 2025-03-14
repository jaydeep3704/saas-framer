import FeatureCard from '@/components/FeatureCard';
import Tag from '@/components/Tag';
import React from 'react'
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg"
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg"
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg"
import Image from 'next/image';
import Avatar from '@/components/Avatar';
import Key from '@/components/Key';
const Features = () => {

    const features = [
        "Asset Library",
        "Code Preview",
        "Flow Mode",
        "Smart Sync",
        "Auto Layout",
        "Fast Search",
        "Smart Guides",
    ];


  return (
    <section className='py-24 px-4'>
      <div className='container mx-auto'>
        <div className='flex justify-center'>
        <Tag >Features</Tag>
        </div>
      
        <h2 className='text-6xl md:text-7xl  font-medium text-center mt-6 max-w-2xl mx-auto'>Where power meets <span className='text-lime-400 block'>simplicity</span></h2>

        {/* Feature Cards */}
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 '>

          <FeatureCard title='Real-time Collaboration' description='Work together seamlessly with conflict-free team editing' className='md:col-span-2 lg:col-span-1'>
            <div className='aspect-video flex justify-center items-center'>
            <Avatar className='z-40 '>
              <Image src={avatar1} alt='avatar1' className='rounded-full'/>
            </Avatar>
            <Avatar className='-ml-6 z-30 border-indigo-500'>
              <Image src={avatar2} alt='avatar2' className='rounded-full'/>
            </Avatar>
            <Avatar className='-ml-6 z-20 border-amber-500'>
              <Image src={avatar3} alt='avatar3' className='rounded-full'/>
            </Avatar>
            <Avatar className='border-none size-16 flex justify-center items-center -ml-5 z-10 '>
               <div className='size-full bg-neutral-700 rounded-full inline-flex justify-center items-center gap-1'>
                  {
                    Array.from({length:3}).map((_,i)=>{
                      return <span key={i} className='inline-flex size-1.5 bg-white rounded-full'></span>
                    })

                  }

               </div>
            </Avatar>
            </div>
          </FeatureCard>


          <FeatureCard title='Interactive Prototyping' description='Engage your clients with prototypes that react to user actions' className='md:col-span-2 lg:col-span-1'>
            <div className='aspect-video flex items-center justify-center'>
            <p className='text-4xl font-extrabold text-center flex flex-col text-white/20'>
              We've achieved {" "}
              <span className='bg-gradient-to-r from-purple-400 to bg-pink-400 bg-clip-text text-transparent'>incredible </span>{" "}
              growth this year
            </p>
            </div>
           
          </FeatureCard>

          
          <FeatureCard title='Keyboard Quick Actions' description='Powerful commands to help you create designs more quickly' className='lg:col-span-1 md:col-span-2 md:col-start-2'>
           
                <div className='flex justify-center items-center aspect-video gap-4'>
                    <Key className='w-28'>shift</Key>
                    <Key>alt</Key>
                    <Key>C</Key>
                   
                </div>
            
          </FeatureCard>

        </div>
         
        



        {/* features */}
        <div className='mt-10 max-w-5xl mx-auto'>
          <div className='flex gap-4 flex-wrap justify-center'>
          {
           features.map((feature)=>{
              return( 
              <div className=' gap-3 items-center px-3 py-2 rounded-2xl bg-neutral-900 border border-white/10 inline-flex md:px-5 lg:px-7' key={feature}>
                  <span className='text-xl h-5 w-5 flex justify-center items-center text-black bg-lime-400 rounded-full'>&#10038;</span>
                  <div className='text-white md:text-lg font-medium'>{feature}</div>
              </div>)
           })
          }
          </div>
         
        </div>
      </div>
    </section>
  )
}

export default Features
