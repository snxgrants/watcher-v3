'use client';

import { useParams } from 'next/navigation';
import IntegratorStats from '@/app/integrators/IntegratorStats';
import PageLayout from '@/components/PageLayout';
import HomeHero from '@/app/integrators/HomeHero';
import Category from '@/app/integrators/Category';
import Partners from '@/app/integrators/Partners';
import News from '@/app/integrators/News';

const IntegratorPage = () => {
  return (
    <PageLayout>
      <HomeHero />
      <IntegratorStats />
      <Category />
      <Partners />
      <News />
    </PageLayout>
  );
};

export default IntegratorPage;
