import Banner from '@/components/Home/Banner';
import FAQ from '@/components/Home/FAQ';
import FeaturedTemplates from '@/components/Home/FeaturedTemplates';
import HowItWorks from '@/components/Home/HowItWorks';
import PosterCategories from '@/components/Home/PosterCategories';
import PostersGallery from '@/components/Home/PostersGallery';
import Pricing from '@/components/Home/Pricing';
import Statistics from '@/components/Home/Statistics';
import React from 'react';

const page = () => {
  return (
    <div className='min-h-screen '>
     <Banner/>
     <Statistics/>
     <PosterCategories/>
     <FeaturedTemplates/>
     <HowItWorks/>
     <PostersGallery/>
     <Pricing/>
     <FAQ/>
    </div>
  );
};

export default page;