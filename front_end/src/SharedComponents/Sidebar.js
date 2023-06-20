import React, { useState } from 'react'
// import ListItem from './ListItem';
import "./sideBar.css"
import { FaBars, FaTimes, FaHome, FaUser, FaCog } from "react-icons/fa";
import { FaUserInjured } from 'react-icons/fa';

export default function Sidebar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className=' inline-block bg-gray-900 h-full overflow-hidden sticky top-0'>
      <div className="flex items-center justify-center px-4 ">
        <div className='w-full'>
          <button
            className="text-white focus:outline-none py-3 flex items-center justify-center w-full"
            onClick={toggleSidebar}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div></div>
      </div>
      <div
        className={` w-auto ${
          isOpen ? "" : ""
        } h-full bg-gray-900 transition-all ease-in-out duration-300 overflow-hidden`}
      >
        <ul className="pt-5">
          <li className="flex items-center py-4 px-6">
            {isOpen ? <FaHome className="mr-2" /> : <FaHome />}
            {isOpen && <span className="text-white">Home</span>}
          </li>
          <li className="flex items-center py-4 px-6">
            {isOpen ? <FaUser className="mr-2" /> : <FaUser />}
            {isOpen && <span className="text-white">Profile</span>}
          </li>
          <li className="flex items-center py-4 px-6" onClick={()=>{props.Transform(true,"Patient",false)}}>
            {isOpen ? <FaUserInjured className="mr-2" /> : <FaUserInjured />}
            {isOpen && <span className="text-white">Add Patient</span>}
          </li>
          <li className="flex items-center py-4 px-6">
            {isOpen ? <FaCog className="mr-2" /> : <FaCog />}
            {isOpen && <span className="text-white">Settings</span>}
          </li>
        </ul>
      </div>
    </div>
    
  );
};