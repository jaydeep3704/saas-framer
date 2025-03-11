import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const Tag = (props:HTMLAttributes<HTMLDivElement>) => {
    const {className,children,...otherProps}=props
  return (
    <div className={twMerge("border border-lime-400 rounded-full inline-flex px-3 py-1 gap-2 text-lime-400 uppercase items-center",className)} {...otherProps}>
        <span className='text-sm'>&#10038;</span>
        <span>{children}</span>
    </div>
  )
}

export default Tag
