import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Post from './Post';

function Posts() {
  const [realtimePosts] = useCollection(
    db.collection('posts').orderBy('timestamp', 'desc')
  );

  console.log(db.collection('posts'));

  return (
    <div>
      {realtimePosts?.docs.map((post) => {
        // '?' is used for optional chaining as the posts may not be there

        <Post
          key={post.id}
          name={post.data().name}
          message={post.data().message}
          email={post.data().email}
          timestamp={post.data().timestamp}
          image={post.data().image}
          postImage={post.data().postImage}
        />;
      })}
    </div>
  );
}

export default Posts;
