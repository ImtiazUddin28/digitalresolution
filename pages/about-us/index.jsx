import { dehydrate, QueryClient } from '@tanstack/react-query';

import { getOurTeam } from '@/endpoints';

import OurMission from '@/components/about-us/OurMission';
import OurVision from '@/components/about-us/OurVision';
import PageTitle from '@/components/common/PageTitle';
import OurTeam from '@/components/home/OurTeam';
import Layout from '@/components/layout';

import backgroundImage from '@/assets/about-us-background.jpg';
import pageTitleBackground from '@/assets/about-us-page-title-background.jpg';

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['our_team'],
    queryFn: getOurTeam,
    staleTime: 300000
  });

  return { props: { dehydratedState: dehydrate(queryClient) } };
}

export default function AboutUs() {
  return (
    <Layout pageTitle="Digital Resolution | About Us">
      <PageTitle
        title="Our Company"
        background={pageTitleBackground.src}
      />
      <section className="py-[2rem]">
        <div className="container">
          <p className="text-center text-[1.125rem]">
            Parent company Ayesha Solution Group is based out of midwest, USA.
            Digital Resolution, newly acquired company consists of a highly
            skilled, self-motivated, competent team, who are engaged to provide
            the best experience to our customers with highly technologically
            advanced products. We have working experience of 5 years within the
            IT Industry & worked as professional full-stack developers for the
            last 4 years. Our accomplishments include 250+ global projects with
            highly innovative solutions for our customers. We are passionate
            about assisting you in software development, web based applications,
            visual graphics, etc.
          </p>
        </div>
      </section>
      {/* <OurTeam /> */}
      <OurVision />
      <OurMission />
      <section
        style={{ background: `url('${backgroundImage.src}')` }}
        className="w-full h-[200px] lg:h-[620px] !bg-no-repeat !bg-center !bg-cover"
      ></section>
    </Layout>
  );
}
