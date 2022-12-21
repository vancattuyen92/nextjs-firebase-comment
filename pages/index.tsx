import React, {useState, useEffect} from "react"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Link from 'next/link';
// firebase
import { db } from "../libs/firebase";

// types
import { IPosts } from "../types/posts"; 



export default function Home() {
  const [posts, setPosts] = useState<IPosts[]>([]);
  function getPost() {
    try {
      const collectionPosts = collection(db, "posts");
      const q = query(collectionPosts, orderBy('timestamp', 'desc'));
      const unsubscribe = onSnapshot(q, snapshot => {
        const newPosts = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
        console.log("new Postsss", newPosts)
        setPosts(newPosts as IPosts[])
      })
      return unsubscribe;
    } catch (err) {
      console.log("error", err)
    }
   
  }

  useEffect(() => {
    getPost();
  }, [])

  return (
    <div className="my-12 text-lg font-medium">
      <h2>See what other people are saying</h2>

      {posts.length > 0 ? (
        <>
        {posts.map(post => (
          <div key={post.id} className="bg-white p-8 border-b-2 rounded-lg">
            <div className="flex items-center gap-2">
              <img src={post.avatar} className="w-10 rounded-full" alt="" />
              <h2>
              </h2>
            </div>
            <div className="py-4 flex align-center justify-between">
              <p>{post.description}</p>
              <Link href={{pathname: `/posts/${post.id}`, query: { ...post } as any}}>
                <button type="button" className="font-medium bg-cyan-500 text-white py-2 rounded-md text-sm">View Detail</button>
              </Link>

            </div>
            <div>{post?.comments?.length > 0 ? post.comments.length : 0} comments</div>
          </div>
        ))}
        </>
      ) : <div>loading...</div>}


    </div>

  )
}
