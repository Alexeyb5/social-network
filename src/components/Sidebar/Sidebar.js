import React from "react";
import s from './Sidebar.module.css'
import Friend from "./Friend/Friend";




const Sidebar = (props) => {

    let sidebarElements =
        props.state.sidebar.map(s => <Friend message={s.name} likesCount={s.image}/>);

    return (
        <div>
            <div className={s.friends}>
                Friends
            </div>
            <div className={s.friend}>
                {sidebarElements}
            </div>
        </div>
    )
}

export default Sidebar;