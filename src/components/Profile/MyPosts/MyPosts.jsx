import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';



const MyPosts = (props) => {

  /*  let posts = [
        {id: 1, message: 'Hi, how are you', likesCount: 31},
        {id: 2, message: 'Its myfirst post', likesCount: 45},
        {id: 3, message: 'So cool', likesCount: 13},
        {id: 4, message: 'This is cool place', likesCount: 15}
    ]*/


    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;