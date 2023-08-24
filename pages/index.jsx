import { dehydrate, QueryClient } from '@tanstack/react-query';

import {
  getCaseStudies,
  getManagement,
  getOurPlan,
  getOurServices,
  getOurTeam,
  getTestimonials,
  getAboutUs,
  getTrustedCompanies
} from '@/endpoints';

import AboutUs from '@/components/home/AboutUs';
import Banner from '@/components/home/Banner';
import CallToAction from '@/components/home/CallToAction';
import CaseStudies from '@/components/home/CaseStudies';
import Management from '@/components/home/Management';
import OurServices from '@/components/home/OurServices';
import OurTeam from '@/components/home/OurTeam';
import Pricing from '@/components/home/Pricing';
import Testimonials from '@/components/home/Testimonials';
import TrustedCompanies from '@/components/home/TrustedCompanies';
import Layout from '@/components/layout';

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['trusted_companies'],
    queryFn: getTrustedCompanies,
    staleTime: 300000
  });

  await queryClient.prefetchQuery({
    queryKey: ['our_services'],
    queryFn: getOurServices,
    staleTime: 300000
  });

  await queryClient.prefetchQuery({
    queryKey: ['management'],
    queryFn: getManagement,
    staleTime: 300000
  });

  await queryClient.prefetchQuery({
    queryKey: ['case_studies'],
    queryFn: getCaseStudies,
    staleTime: 300000
  });

  await queryClient.prefetchQuery({
    queryKey: ['our_team'],
    queryFn: getOurTeam,
    staleTime: 300000
  });

  await queryClient.prefetchQuery({
    queryKey: ['our_plan'],
    queryFn: getOurPlan,
    staleTime: 300000
  });

  await queryClient.prefetchQuery({
    queryKey: ['testimonials'],
    queryFn: getTestimonials,
    staleTime: 300000
  });

  await queryClient.prefetchQuery({
    queryKey: ['about_us'],
    queryFn: getAboutUs,
    staleTime: 300000
  });

  return { props: { dehydratedState: dehydrate(queryClient) } };
}

export default function Home() {
  return (
    <Layout pageTitle="Digital Resolution">
      <Banner />
      <TrustedCompanies />
      <AboutUs />
      <OurServices />
      <Management />
      {/* <CaseStudies />
      <OurTeam /> */}
      <Pricing />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
}
