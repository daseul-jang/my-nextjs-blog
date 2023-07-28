import Image from 'next/image';
import profileImage from '../../public/images/profile.jpg';
import { getAllPosts } from '@/service/posts';
import Hero from '@/components/Hero';
import FeaturedPosts from '@/components/FeaturedPosts';
import CarouselPosts from '@/components/CarouselPosts';

export default async function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts />
      <CarouselPosts />
    </>
  );
}
