import Head from 'next/head'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import StorySection from '../components/StorySection'
import ReviewSection from '../components/ReviewSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizza Yolo AI - Votre Assistant Pizzeria</title>
        <meta name="description" content="L'assistant IA qui prend les commandes pour votre pizzeria." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet" />
      </Head>

      <Navigation />
      <main>
        <HeroSection />
        <StorySection />
        <ReviewSection />
      </main>
      <Footer />
    </div>
  )
}
