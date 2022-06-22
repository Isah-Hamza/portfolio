import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import styles from './header.module.css';


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <header className=' shadow-md mb-8 fixed w-full px-4  z-20 bg-sky-200'>      
      <div className = 'flex justify-between w-full'>
        <div className = 'flex justify-between w-full md:w-auto py-4  bg-sky-200 items-center ' >
          <div className='flex items-center  '>
            <div className='w-10 font-extrabold h-10 mr-2 p-4 flex justify-center items-center bg-indigo-600 rounded-full text-white font-mono'>I</div>
              <p className='font-sans font-bold' >Isah Hamza</p>
          </div>
          <div className='md:hidden flex cursor-pointer'>
                  { showMenu == false && <span onClick={toggleShowMenu} className='px-2 font-bold text-xl scale-x-150' >&#9776;</span> }  
                  { showMenu == true &&  <span onClick={toggleShowMenu} className='px-2' >&#10006;</span>  } 
          </div>
        </div>
        {/* nav for desktop */}
        <nav className= {`${ styles.nav } desktop hidden  text-center bg-sky-200 flex-col md:flex md:flex-row `}>
              <ul className='pt-12 font-semibold  sm:pt-0 flex items-center w-full h-full flex-col space-x-7 md:font-normal  text-center text-slate-500  md:flex-row'   >
                <li className='text-center flex items-center hover:text-slate-900 hover: cursor-pointer'>About Me <FaCaretDown className='ml-1' /> </li>
                <li className='text-center flex items-center hover:text-slate-900 hover: cursor-pointer'>Resume </li>
                <li className='flex items-center hover:text-slate-900 hover: cursor-pointer'>Portfolio<FaCaretDown className='ml-1' /> </li>
                <li className='flex items-center hover:text-slate-900 hover: cursor-pointer'>Blog <FaCaretDown className='ml-1' /> </li>
                <li className='flex items-center hover:text-slate-900 hover: cursor-pointer'>Contact  </li>
              </ul>
          </nav>

          {/* //  nave for mobile */}
       {/* {
         showMenu == true &&  */}
          <nav className= {`${ showMenu && styles.mobile } shadow-xl mobile transition-all duration-700 ease-in text-center absolute w-full right-0 -top-96 h-auto py-8 bg-sky-200 -z-10 flex-col flex md:hidden `}>
              <ul className='font-semibold  sm:pt-0 flex items-center w-full h-full flex-col space-x-0 md:font-normal md:space-x-7 space-y-10 text-center text-slate-500  md:flex-row'   >
                <li className='text-center flex items-center hover:text-slate-900 hover: cursor-pointer'>About Me <FaCaretDown className='ml-1' /> </li>
                <li className='text-center flex items-center hover:text-slate-900 hover: cursor-pointer'>Resume </li>
                <li className='flex items-center hover:text-slate-900 hover: cursor-pointer'>Portfolio<FaCaretDown className='ml-1' /> </li>
                <li className='flex items-center hover:text-slate-900 hover: cursor-pointer'>Blog <FaCaretDown className='ml-1' /> </li>
                <li className='flex items-center hover:text-slate-900 hover: cursor-pointer'>Contact  </li>
              </ul>
          </nav>
       {/* } */}
      </div>
    </header>
  )
}

export default Header

