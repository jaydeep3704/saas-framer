import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const Key = (props:HTMLAttributes<HTMLDivElement>) => {
    const {className,children,...otherProps}=props
    return (
    <div className={twMerge("text-neutral-950 bg-neutral-300 inline-flex items-center justify-center size-14 border-2 border-black rounded-xl py-2 px-6 text-xl font-medium",className)}>
        {children}
    </div>
  )
}

export default Key
