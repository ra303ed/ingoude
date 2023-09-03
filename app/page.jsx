import FeaturedCourses from '@/components/FeaturedCourses';
import Hero from '@/components/Hero';
import Industry from '@/components/Industry';
import MotionText from '@/components/MotionText';
import Testmonial from '@/components/Testmonial';

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <MotionText />
      <Industry />
      <FeaturedCourses/>
      <Testmonial />
    </main>
  )
}
