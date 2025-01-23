"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const BlogDetails = ({ params }) => {
  const [singlePost, setSinglePost] = useState([]);

  const { id } = params;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setSinglePost(data));
  }, [id]);

  console.log(singlePost);

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{singlePost.title}</h2>
          <p>{singlePost.body}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
