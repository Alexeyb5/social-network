import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://img.favpng.com/21/10/23/computer-icons-avatar-social-media-blog-font-awesome-png-favpng-jKXEv9rWhum7VbNKDbcELd6Di.jpg'></img>
      {props.message}
      <div>
        <span>like</span>
      </div>
      <div>
        {props.likesCount}
      </div>
    </div>
  )
}

export default Post;