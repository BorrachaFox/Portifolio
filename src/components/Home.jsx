import React from 'react'

import { Section } from './Section'

export const Home = ({ children, id }) => {
  return (
    <main id={id} className='flex h-screen w-full items-center'>
      <div className='flex justify-center items-center py-10 px-36 lg:px-40 xl:px-48 max-w-[1280px] w-full m-auto lg:justify-between '>
        {children}
      </div>
    </main>
  )
}
