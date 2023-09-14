import ArticleBody from "./ArticleBody";
import Banner from "./Banner";
import Header from "./header";

export default function ArticlePage() {

    const article = {
        body: ``
    }

    return (
        <main className='relative w-full max-w-[860px] mx-auto px-5 lg:px-10 pt-5 mt-10 flex items-center flex-col pb-10'>
            <Header title={'Getting Started with solid js'} description='SolidJS made "Signals" one of the most important frontend JS framework trends you can find right now! Time to learn how to build web apps with SolidJS from the ground up!' />
            <Banner url="https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" />
            <ArticleBody />
        </main>
    )
}
