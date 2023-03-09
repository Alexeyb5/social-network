import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Friend from "../Sidebar/Friend/Friend";

console.log(s)

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/Profile" className={navLink => navLink.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Dialogs" className={navLink => navLink.isActive ? s.active : s.item}>Massages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/News" className={navLink => navLink.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Music" className={navLink => navLink.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Settings" className={navLink => navLink.isActive ? s.active : s.item}>Settings</NavLink>
            </div>
            <div className={s.sidebar}>
                <NavLink to="/Sidebar" className={navLink => navLink.isActive ? s.active : s.item}>Friends  </NavLink>
               <Friend />
            </div>
        </nav>
    )
}

export default Navbar;