import React from 'react'
import NavBar from '../components/NavBar'
import { FaCompass } from 'react-icons/fa';

const ArtistPage = () => {
  return (
    <div>
        <nav className='flex px-20 py-5 justify-between items-center bg-blue border-b-4 border-bgc h-20'>
            <div className='logo text-2xl'>
              NFTED
            </div>
            <ul className='head font-medium flex gap-12 items-center'>
              <NavBar />
              <NavBar text={'About Us'} color={'text-lightgreen'} border={'border-b-4'} cursor={'cursor-default'}/>
              <NavBar text={'Roadmap'}/>
              <NavBar text={'Artist'}/>
            </ul>
            <div className='wallet flex gap-2 bg-green p-2 rounded-md'>
                <FaCompass className='border-4 rounded-full border-white bg-white' size={24}/>
                <h1 className='font-extrabold text-xs self-center '>Wallet Connect</h1>
            </div>
        </nav>

        <main></main>
    </div>
  )
}

export default ArtistPage