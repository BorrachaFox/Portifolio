import React from 'react'

export const Perfil = ({ image, alt, children }) => {
  return (
    <div className='relative h-fit w-80'>
      <img className='mx-auto min-w-[12.5rem] max-w-[12.5rem]' src={image} alt={alt}/> 
      <h2 className='whitespace-nowrap absolute uppercase -translate-x-1/2 left-1/2 -bottom-16 text-center text-[80px] text-white font-bebas'>
        {children}
      </h2>
    </div>
  )
}

// achar uma maneira de alt. o tamanho da div pai de acordo com o h2