import React from "react";
import FeaturedPosts from "./components/FeaturedPosts";

const Home = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  // console.log(data);

  return (
    <div>
      {/* <h1 className="text-center text-2xl font-bold my-10">Home Page</h1> */}
      <h2 className="text-3xl font-bold text-center my-10">Featured Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-6 mb-10">
        {data.map((item) => (
          <FeaturedPosts key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
