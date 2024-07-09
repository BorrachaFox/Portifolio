import React from 'react'

export const Section = ({
  className,
  id,
  children
}) => {
  return (
    <div id={id}
      className={`flex justify-center items-center py-10 px-8 lg:px-28 xl:px-28 ${className} bg-2`
    }>
      <div className='w-full max-w-[1280px] [&>h2]:font-bebas [&>h2]:text-3xl [&>h2]:mb-4'>
        {children}
      </div>
    </div>
  )
}
