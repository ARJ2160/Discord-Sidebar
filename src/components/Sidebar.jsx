import { BsFillLightningFill, BsGearFill, BsPlus } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

import React from 'react'
import { SideBarIcon } from './SidebarIcon';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col
        bg-gray-100 text-gray-900
        dark:bg-gray-900 dark:text-white shadow-lg">
      <SideBarIcon icon={<FaFire size="28" />} text={"Home"} />
      <SideBarIcon icon={<BsPlus size="32" />} text={"Add"} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} text={"Trending"} />
      <SideBarIcon icon={<FaPoo size="20" />} text={"Shit"} />
      <SideBarIcon icon={<BsGearFill size="22" />} text={"Settings"} />
    </div>
  )
}

export default Sidebar