import React from 'react';
import Post from './components/Post';
import Data from './components/Data.json';


let items = []
for (let i = 0; i < Data.length; i++) {
  items.push(
    <Post
      userId={Data[i].userId}
      postId={Data[i].postId}
      title={Data[i].title}
      body = {Data[i].body}
    />
  )
}



function App() {
  return (
    <div className="App">
      {/* <Post
        userId={Data[0].userId}
        postId={Data[0].postId}
        title={Data[0].title}
        body = {Data[0].body}
      /> */}
      {items}
    </div>
  );
}

export default App;
