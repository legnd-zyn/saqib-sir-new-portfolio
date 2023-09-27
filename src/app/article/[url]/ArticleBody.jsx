import React from "react";
import parse from "html-react-parser";

const ArticleBody = ({ body }) => {
  return (
    <article className="prose max-w-none lg:prose-lg mt-10 prose-h2:mt-5 prose-h2:mb-3 lg:prose-h2:text-4xl prose-headings:text-gray-800 prose-p:text-gray-600 prose-p:text-xl">
      {parse(body)}
    </article>
  );
};

export default ArticleBody;
