import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react'
import { cva } from 'class-variance-authority';

const classes=cva('px-8 font-medium border  h-12 rounded-full cursor-pointer',{
    variants:{
        variant:{
            primary:'bg-lime-400 text-neutral-950 border-lime-400',
            secondary:'border-white text-white bg-transparent'
        },
        size:{
            sm:"h-10"
        }

    }

})



const Button = (props:{variant:"primary"|"secondary",size?:"sm"} & ButtonHTMLAttributes<HTMLButtonElement>) => {
    

  
    const {variant,className,size,...otherProps}=props
    
    return (
    <button className={classes({variant,size,className})} {...otherProps}/>

  )
}

export default Button
