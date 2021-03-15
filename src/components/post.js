import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Post({ clickButton }) {
  const [text, setText] = useState("");
  const posts = useSelector((state) => state.post.posts);
  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();

  const applyText = (e) => {
    setText(e.target.value);
  }

  let postId = 1;

  const addPost = () => {
    dispatch({ type: 'add_post', id: postId++, text: text });
    setText("");
  }

  return (
    <>
      <div>Postコンポーネント</div>
      <input type="text" value={text} onChange={applyText}></input>
      <button onClick={addPost}>投稿</button>
      <ul>
        {posts.map((post) => (
          <>
            <li key={post.id}>{post.text} : {count}</li>
            <button onClick={clickButton}>Up</button>
          </>
        ))}
      </ul>
    </>
  )
}

export default Post;
