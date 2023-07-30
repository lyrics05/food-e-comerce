import React from 'react'
import {RiHome6Line,
        RiPercentLine,
        RiPieChartLine,
        RiMailLine,
        RiNotification3Line,
        RiSettings4Line,
        RiLogoutCircleRLine,} from "react-icons/ri"

const Sidebar = ({showMenu}) => {
  return (
    <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl
    z-50-left-full transition-all ${showMenu? "left-0":"-left-full"}` }>
        <div>
        <ul className='pl-4  align-center'>
            <li>
            <h1>Logo</h1>
            </li>
            <li className='bg-["#262837] p-4 rounded-tl-xl rouded-bl-xl'>
                <a className='bg-[#ec7c6a]  p-4 flex justify-center rounded-xl text-white' href=""><RiHome6Line className='text-3xl'/></a>
            </li>
            <li className='hover:bg-[#262837]"p-4 rounded-tl-xl rouded-bl-xl group transition-colors'>
                <a className='group-hover:bg-[#ec7c6a]  p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white' href="">
                  <RiPercentLine className='text-2xl'/>
                </a>
            </li>
            <li className='hover:bg-[#262837]"p-4 rounded-tl-xl rouded-bl-xl group transition-colors'>
                <a className='group-hover:bg-[#ec7c6a]  p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white' href="">
                  <RiPieChartLine className='text-2xl'/>
                </a>
            </li>
            <li className='hover:bg-[#262837]"p-4 rounded-tl-xl rouded-bl-xl group transition-colors'>
                <a className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white' href="">
                  <RiMailLine className='text-2xl'/>
                </a>
            </li>
            <li className='hover:bg-[#262837]"p-4 rounded-tl-xl rouded-bl-xl group transition-colors'>
                <a className='group-hover:bg-[#ec7c6a]  p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white' href="">
                  <RiNotification3Line className='text-2xl'/>
                </a>
            </li>
            <li className='hover:bg-[#262837]"p-4 rounded-tl-xl rouded-bl-xl group transition-colors'>
                <a className='group-hover:bg-[#ec7c6a]  p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white' href="">
                  <RiSettings4Line className='text-2xl'/>
                </a>
            </li>
        </ul>
        </div>

        <div>
            <div>
                <ul className='pl-4  align-center'>
                <li className='hover:bg-[#262837]"p-4 rounded-tl-xl rouded-bl-xl group transition-colors'>
                <a className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white' href="">
                  <RiLogoutCircleRLine className='text-2xl'/>
                </a>
            </li>
                </ul>
            </div>
        </div>
  </div>
  )
}

export default Sidebar