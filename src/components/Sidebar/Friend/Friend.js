import React from "react";
import s from './Friend.module.css'



const Friend = (props) => {


    return (
        <div>
            <div className={s.item}>
                <div>
                    <img src={props.image} />
                </div>
                <div>
                    {props.name}
                </div>
            </div>
        </div>
    )
}

export default Friend;