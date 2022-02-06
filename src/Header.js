import React from 'react'

const SOCIALS = [
  { name: 'opensea', icon: '/socials/opensea.svg' },
  { name: 'twitter', icon: '/socials/twitter.svg' },
  { name: 'discord', icon: '/socials/discord.svg' },
]

const Header = () => (
  <div className='bg-yellow-100 py-4 px-2'>
    <div className='container max-w-screen-xl mx-auto flex justify-between items-center'>
      <img src='/logo.png' alt='logo' className='w-24 sm:w-32 h-6 sm:h-8' />
      <div className='flex items-center'>
        {SOCIALS.map(item => (
          <div key={`sc-${item.name}`} className='bg-white cursor-pointer flex justify-center items-center border border-4 border-black rounded-full w-9 h-9 mr-1'>
            <img src={item.icon} alt={item.name} />
          </div>
        ))}
        <button className='bg-yellow-300 hover:bg-yellow-500 font-copper-black font-bold text-xl py-1 px-4 border border-4 border-black rounded-full'>
          Connect
        </button>
      </div>
    </div>
  </div>
)

export default Header