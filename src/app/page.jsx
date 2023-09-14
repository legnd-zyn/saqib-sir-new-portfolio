import AboutUs from '@/components/AboutUs'
import ContactUsSection from '@/components/ContactUs'
import BlogPostsSection from '@/components/blogposts'
import Header from '@/components/header'
import MyServices from '@/components/myservices'
import Quote from '@/components/quote'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">

      <Header />
      <MyServices />
      <Quote />
      <AboutUs />
      <BlogPostsSection />
      <ContactUsSection />

    </main>
  )
}
