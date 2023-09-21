import { posts } from "@/data/posts";
import ArticleBody from "./ArticleBody";
import Banner from "./Banner";
import Header from "./header";

export default function ArticlePage({ params }) {
  const slug = params?.url;
  const post = posts.filter((post) => post.slug == slug)[0];

  return (
    <main className="relative w-full max-w-[860px] mx-auto px-5 lg:px-10 pt-5 mt-10 flex items-center flex-col pb-10">
      <Header title={post.title} description={post.description} />
      <Banner image={post.image} />
      <ArticleBody body={post.body} />
    </main>
  );
}
