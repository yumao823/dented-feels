import React, { useState } from 'react'
import { useEtherBalance, useEthers } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import { toast } from 'react-toastify'

const Modal = ({ onClose }) => {
  const [total, setTotal] = useState(3)
  const { account, deactivate } = useEthers()
  const etherBalance = useEtherBalance(account)

  const handleDisconnect = async () => {
    await deactivate()
    toast.info("Disconnected")
  }

  return (
    <>
      <div
        className="justify-center min-w-full font-copper-black items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition duration-700 ease-in-out"
      >
        <div className="relative my-6 mx-auto max-w-3xl p-6">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between py-6 px-3">
              <p className='text-4xl mx-auto'>Mint</p>
              <button className="border border-2 border-black rounded-full ml-10 px-2" onClick={onClose}>X</button>
            </div>
            {account && (
              <div className='text-center'>
                <p className='my-3'>Address: {`${account?.slice(0, 4)}...${account?.slice(-4)}`}</p>
                <p className='my-3'>Balance: {etherBalance && formatEther(etherBalance)}</p>
              </div>
            )}
            <div className="relative flex flex-col items-center flex-auto p-6 sm:p-10">
              <div className='flex items-center'>
                <button
                  className='bg-white flex justify-center items-center w-10 h-10 border border-4 border-black rounded-full text-3xl'
                  onClick={() => setTotal(total - 1)}
                >-</button>
                <p className='text-4xl mx-5'>Total: {total}</p>
                <button
                  className='bg-white flex justify-center items-center w-10 h-10 border border-4 border-black rounded-full text-3xl'
                  onClick={() => setTotal(total + 1)}
                >
                  +
                </button>
              </div>
              <p className='my-6'>Price: 0.3ETH</p>
              <div className='flex justify-center'>
                <button className='bg-yellow-300 font-copper-black font-bold text-xl py-1 px-4 border border-4 border-black rounded-full mr-6' disabled={!account}>
                  Mint
                </button>
                <button
                  className='bg-white font-copper-black font-bold text-xl py-1 px-4 border border-4 border-black rounded-full'
                  onClick={handleDisconnect}                
                >
                  Disconnect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

const Hero = () => {
  const [showModal, setShowModal] = useState(false)
  const { account } = useEthers()

  const handleMint = () => {
    if (account) setShowModal(true)
    else toast.warn('Please connect to your wallet', {
      duration: 1,
    })
  }

  return (
    <>
      <div className='bg-yellow-100 flex justify-center item-center py-32 px-6 border-b-8 border-black'>
        <div className='text-center font-copper-black w-fit'>
          <img src='/hero.png' className='w-full max-w-screen-sm' />
          <p className='text-2xl my-4'>Emotions change, dreams are forever.</p>
          <div className='flex justify-center text-xl'>
            <button
              className='bg-yellow-300 hover:bg-yellow-500 font-copper-black font-bold py-1 px-4 border border-4 border-black rounded-full'
              onClick={handleMint}  
            >
              Mint
            </button>
            <button className='bg-white py-1 px-4 border border-4 border-black rounded-full ml-2'>
              Explore
            </button>
          </div>
        </div>
      </div>
      <img src='/cloud3.png' className='ml-auto h-40 -my-20'></img>
      <img src='/cloud1.png' className='absolute bottom-16 -left-20 md:left-0 h-40 md:h-60 lg:h-96' />
      <img src='/cloud2.png' className='absolute top-16 right-0 h-52 md:h-80 lg:h-96' />
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </>
  )
}

export default Hero