import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';

import { getCaseStudies } from '@/endpoints';

import PageTitle from '@/components/common/PageTitle';
import caseStudyBackground from '@/assets/casestudybanner.jpg';
import SingleCase from '@/components/case-studies/SingleCase/SingleCase';
import Layout from '@/components/layout';

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['case_studies'],
    queryFn: getCaseStudies,
    staleTime: 300000
  });

  return { props: { dehydratedState: dehydrate(queryClient) } };
}

export default function CaseStudies() {
  const { data } = useQuery({
    queryKey: ['case_studies'],
    queryFn: getCaseStudies,
    refetchOnWindowFocus: false,
    staleTime: 300000
  });

  const {
    data: { title, projects }
  } = data;

  return (
    <Layout pageTitle="Digital Resolution | Case Studies">
      <PageTitle
        title={title}
        background={caseStudyBackground.src}
      />
      <SingleCase projects={projects} />
    </Layout>
  );
}
