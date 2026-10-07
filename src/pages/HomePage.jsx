import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import ArrivalsSection from '../components/ArrivalsSection';
import StorySection from '../components/StorySection';
import ExploreBanners from '../components/ExploreBanners';
import Newsletter from '../components/Newsletter';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CategorySection />
      <ArrivalsSection />
      <StorySection />
      <ExploreBanners />
      <Newsletter />
    </main>
  );
}
