import React, { useState } from 'react'
// import ListItem from './ListItem';
//import "./sideBar.css"
import { FaBars, FaTimes, FaHome, FaUser, FaCog } from "react-icons/fa";
import { FaUserInjured } from 'react-icons/fa';
import {  FaUsers} from "react-icons/fa"
import HireEmployee from '../HireEmployee/HireEmployee';

export default function Sidebar(props,{links}) {
  const [active,setActive]=useState("Home")
  const [isOpen, setIsOpen] = useState(false);
  let childs = links || [
    {label: 'Profile'},
    {icon: <FaHome className="" />, label: 'Home',func: () => alert('test')},
    {icon: <FaUser className="" />, label: 'Profile'},
    {icon: <FaUserInjured className=''/>,label:'Add Patient',func:()=>props.Transform(true,"Patient",false)},
    {icon:  <FaUsers className=''/>,label:"HireEmployee",func:()=>{props.Transform(true,"HireEmployee",false);setActive("HireEmployee")}},
    {icon: <FaCog className="" />, label: 'Settings'}
  ]

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=' tw-inline-block tw-px-2 tw-bg-white tw-h-full tw-shadow-md tw-border-r tw-border-[#ccc] tw-overflow-hidden tw-sticky tw-top-0'>
      <div className="tw-flex tw-items-center tw-justify-center  ">
        <div className='tw-w-full'>
          <button
            className=" focus:tw-outline-none tw-py-3 tw-flex tw-px-2 tw-w-full"
            onClick={toggleSidebar}
          >
            {isOpen ? <FaTimes color='black' /> : <FaBars />}
          </button>
        </div>
        <div></div>
      </div>
      <div
        className={` tw-w-auto  ${
          isOpen ? "" : ""
        } tw-h-full tw-transition-all tw-ease-in-out tw-duration-300 tw-overflow-hidden`}
      >
        <ul className="">
          {childs && childs.map((child,i) => (
            <li className={`tw-cursor-pointer tw-flex tw-items-center tw-my-4
             hover:tw-bg-slate-200 tw-rounded-lg
             ${(active === child.label) ? ' tw-bg-slate-200 ':''}
             ${isOpen ? '':' tw-justify-center '}`}
             onClick={() => child.func && child.func()}
             >
              {child.icon && <div className=' tw-p-2 '>
                {child.icon}
              </div>}
              {(isOpen || !child.icon) && <div className="tw-flex tw-items-center">{child.label}</div>}
            </li>          
          ))}
        </ul>
      </div>
    </div>
  );
};