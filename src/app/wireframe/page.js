"use client";
import { useEffect, useState } from "react";
import "@/style/wireframe.css";

const page = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    setTimeout(()=>{
    setPosts([
      {
        id: 1,
        title: "first blog",
        body: "This is the first blog page",
      },
      {
        id: 2,
        title: "second blog",
        body: "This is the second blog page",
      },
      {
        id: 3,
        title: "third blog",
        body: "This is the third blog page",
      },
    ]);
    },2000)
  }, []);

  return (
    <>
      <div className="container">
        <h1>Blog</h1>
        {posts
          ? posts.map((post) => (
              <div className="post" key={post.id}>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-body">{post.body}</p>
              </div>
            ))
          : Array(3).fill(0).map((_,i) => (
                <div key={i} className="post skeleton">
                  <div className="skeleton-title"></div>
                  <div className="skeleton-line"></div>
                </div>
              ))}
      </div>
    </>
  );
};

export default page;
