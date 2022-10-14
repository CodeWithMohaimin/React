import React from 'react';
import Post from './components/Post';
import Data from './components/Data.json';


let items = []

items= Data.map((post) => <Post
        userId={post.userId}
        postId={post.postId}
        title={post.title}
        body = {post.body}
      />)

// for (let i = 0; i < Data.length; i++) {
//   items.push(
//     <Post
//       userId={Data[i].userId}
//       postId={Data[i].postId}
//       title={Data[i].title}
//       body = {Data[i].body}
//     />
//   )
// }

function App() {
  return (
    <div className="App">
      {items}
    </div>
  );
}

export default App;
