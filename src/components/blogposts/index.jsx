import React from "react";
import BlogCard from "./BlogCard";
import Link from "next/link";
import { posts } from "@/data/posts";

const BlogPostsSection = () => {
  return (
    <section className="relative w-full max-w-screen-xl mx-auto px-5 lg:px-10 pt-5 mt-10 flex items-center flex-col bg-zinc-100">
      <div className="max-w-lg text-center">
        <p className="text-gray-700 text-2xl lg:text-3xl font-bold bottom-line relative">
          Our Blogs
        </p>
        <p className="text-gray-800 text-4xl lg:text-6xl font-bold px-5">
          Our recent work experience
        </p>
      </div>
      <div className="w-full max-w-4xl mt-5">
        <div className="flex flex-wrap gap-5 w-full mx-auto justify-center">
          {posts.map((data) => (
            <BlogCard {...data} />
          ))}
          {/* <BlogCard url={"https://images.unsplash.com/photo-1595835018349-198460e1d309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80s"} />
                    <BlogCard url={"https://images.unsplash.com/photo-1603486002664-a7319421e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1542&q=80"} />
                    <BlogCard url={"https://images.unsplash.com/photo-1595835018349-198460e1d309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80s"} /> */}
        </div>
        <div className="w-full flex justify-center my-5">
          <Link href="/articles">
            <button className="w-full max-w-[200px] px-6 lg:px-7 text-lg font-bold text-gray-700 py-1 pt-2 border-2 border-gray-400 rounded-md active:scale-95 transition-all animated-btn hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0">
              See All
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPostsSection;
