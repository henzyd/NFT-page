import React from 'react';

const NavBar = ({ text, color, border, cursor }) => {
  return (
    <div>
          <li className={`${color || 'text-slate-300'} ${border || 'border-none'}  hover:text-lightgreen border-green  ${cursor || 'cursor-pointer'} py-[23px]`}>{text || 'Home'}</li>
    </div>
  )         
}

export default NavBar