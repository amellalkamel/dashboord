import React, { useContext } from "react";
import { UserContext } from "../hock";
import '../assets/Menu.css';
import { AiFillHome } from "react-icons/ai";

export const Menu = () => {
  const { showMenu, setshowMenu } = useContext(UserContext);
  console.log(" showMenu  ===>", showMenu);
  return (
    <>
      <div className="header-menu">
        <div className="title-menu">Page Compose</div>
        <div className="page-menu">
        <AiFillHome />
        <div>pages</div>
        <AiFillHome />
        </div>
      </div>
    </>
  );
};
