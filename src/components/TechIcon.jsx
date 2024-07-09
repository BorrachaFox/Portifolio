import React from 'react'

export const TechIcon = ({ image, alt }) => {
  return (
    <div className='flex justify-center items-center w-20 h-20'>
      <img className='w-3/4' src={image} alt={alt}/>
    </div>
  )
}
