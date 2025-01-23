import Link from "next/link";
import React from "react";

const FeaturedPosts = ({ item }) => {
  return (
    <div>
      <div className="card bg-base-100 h-full shadow-xl">
        <div className="card-body">
          <Link href={`/blog/${item.id}`}>
            <h2 className="card-title">{item?.title}</h2>
          </Link>
          <p>{item?.body}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
