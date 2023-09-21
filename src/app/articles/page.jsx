import BlogCard from "@/components/blogposts/BlogCard";
import Image from "next/image";
import React from "react";
import Search from "@/images/icons/search.png";
import { posts } from "@/data/posts";

const Articles = () => {
  return (
    <main className="relative w-full max-w-screen-lg mx-auto px-5 lg:px-10 pt-5 mt-10 flex items-center flex-col py-10">
      <header>
        <h1 className="text-4xl font-bold text-gray-700 text-center uppercase">
          Experience Excellence with us
        </h1>
        <p className="text-2xl  text-gray-600 text-center">
          With our skillful services
        </p>
      </header>
      {/* <div className="w-full mt-5">
        <div className="max-w-md mx-auto border-2 flex gap-2 relative">
          <input
            type="search"
            placeholder="Fond a article"
            className="p-2 outline-none w-full max-w-md  flex-grow "
          />
          <button className="active:scale-95 px-2">
            <Image src={Search} alt="search button" className=" w-max pl-2" />
          </button>
        </div>
      </div> */}
      <section className="flex flex-wrap gap-5 w-full mx-auto justify-center max-w-4xl mt-10">
        {posts.map((data) => (
          <BlogCard {...data} />
        ))}
      </section>
    </main>
  );
};

export default Articles;
