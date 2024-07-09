import React from 'react'

import { navigation } from '../constants'

function Header() {
  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-1 backdrop-blur-sm lg:backdrop-blur-sm'>
      <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
        <nav className='hidden fixed top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent'>
          <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>  
            {navigation.map((item) => (
              <a 
                key={item.id} 
                href={item.url} 
                className={`block relative text-1xl 
                uppercase text-4 transition-colors 
              hover:text-3 ${item.onlyMobile ? 'lg:hidden' : ''}
                px-6 py-6 md:py-8 lg:-mr-0.25
                lg:text-sm lg:font-semibold`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
        
      </div>   
    </header>
  )
}

export default Header


/* header {
  height: 80px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  position: fixed;
  background-color: #1A1A1A;
}

header a {
  font-weight: 500;
} */