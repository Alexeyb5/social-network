import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.item}>
                <img src='https://naked-science.ru/wp-content/uploads/2016/10/field_image_987873112334989.jpg'/>
            </div>
            <div class className={s.descriptionBlock}>
                avatar + description
            </div>
        </div>
    )
}

export default ProfileInfo;