import AboutUs from "@/components/AboutUs";
import ContactUsSection from "@/components/ContactUs";
import BlogPostsSection from "@/components/blogposts";
import Header from "@/components/header";
import MyServices from "@/components/myservices";
import Quote from "@/components/quote";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <MyServices />
      <Quote
        quote={
          "Success in technology is not just about finding solutions; it's about partnering with the right experts."
        }
        author={"John Smith"}
      />
      <AboutUs />
      <BlogPostsSection />
      <ContactUsSection />
    </main>
  );
}
