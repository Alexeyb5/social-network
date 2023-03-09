import React from "react";
import s from './../Message/Message.module.css'


const Message = (props) => {
    return (
        <div>
            <div className={s.dialog}> <img
                src="https://klike.net/uploads/posts/2019-06/1561009159_3.jpg"/> {props.message}  </div>
            <div className={s.dialogMy}>{props.messageMy} <img
                src="https://avatars.dzeninfra.ru/get-zen_doc/52326/pub_5ce74ef27b478b00b277a424_5ce74fccaa7e8b00b356afa1/scale_1200"/>
            </div>
        </div>
    )
}


export default Message;