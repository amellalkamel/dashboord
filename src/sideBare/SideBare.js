import React, { useContext } from "react";
import {AiFillHome,AiFillSetting,AiFillFile,AiFillTag,AiFillSwitcher} from 'react-icons/ai';
import {HiOutlineViewList} from 'react-icons/hi';
import {BsPersonFill,BsFillCalendar3WeekFill} from 'react-icons/bs';
import {IoStatsChart} from 'react-icons/io5';
import "../assets/SideBare.css";
import { UserContext } from "../hock";


export const SideBare = () => {
    const {showMenu,setshowMenu} = useContext(UserContext);

    const toggleMenu =()=> {
        console.log('toggel menu')
        setshowMenu(!showMenu)
    }
  return (
    <>
      <div className="principal-icon">
        <HiOutlineViewList onClick={toggleMenu}/>
      </div>
      <div className="home-icon">
        <AiFillHome />
        <AiFillFile />
      </div>
      <div className="main-icon">
        <BsFillCalendar3WeekFill />
        <AiFillSwitcher />
        <IoStatsChart />
        <AiFillTag />
      </div>
      <div className="profil-icon">
        <BsPersonFill />
      </div>
      <div className="param-icon">
        <AiFillSetting />
      </div>
    </>
  );
};
