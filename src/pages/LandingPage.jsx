import React from 'react'

import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaCompass } from 'react-icons/fa';
import NavBar from '../components/NavBar';

const LandingPage = () => {
  return (
    <div>
        <nav className='flex px-20 py-5 justify-between items-center bg-blue border-b-4 border-bgc h-[70px]'>
            <Link to={'/landing'}>
              <div className='logo text-2xl cursor-pointer'>
                NFTED
              </div>
            </Link>
            <ul className='head font-medium flex gap-12 items-center'>
              <Link to={'/landing'}>
                <NavBar color={'text-lightgreen'} border={'border-b-4'} cursor={'cursor-default'}/>
              </Link>
              <Link to={'/landing/about-us'}>
                <NavBar text={'About Us'}/>
              </Link>
              <Link to={'/landing/roadmap'}>
                <NavBar text={'Roadmap'}/>
              </Link>
              <Link to={'/landing/artist'}>
                <NavBar text={'Artist'}/>
              </Link>
            </ul>
            <div className='wallet flex gap-2 bg-green p-2 rounded-md'>
                <FaCompass className='border-4 rounded-full border-white bg-white' size={24}/>
                <h1 className='font-extrabold text-xs self-center '>Wallet Connect</h1>
            </div>
        </nav>
        
        <main className='bg-blue h-screen'>
            <Outlet />
        </main>
    </div>
  )
}

export default LandingPage