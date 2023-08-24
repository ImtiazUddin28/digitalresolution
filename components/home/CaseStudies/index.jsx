import { useRouter } from 'next/router';

import { useQuery } from '@tanstack/react-query';

import { getCaseStudies } from '@/endpoints';

import SectionTitle from '@/components/common/SectionTitle';
import SingleCaseStudyCard from './CaseStudyCard';
import ButtonPrimary from '@/components/common/ButtonPrimary';

export default function CaseStudies() {
  const { push } = useRouter();

  const { data } = useQuery({
    queryKey: ['case_studies'],
    queryFn: getCaseStudies,
    refetchOnWindowFocus: false,
    staleTime: 300000
  });

  const {
    data: { title, sub_title, content, projects }
  } = data;

  return (
    <section className="py-[5rem]">
      <div className="container">
        <SectionTitle
          title={title}
          subTitle={sub_title}
          content={content}
          align="center"
          selfContained={true}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] mb-[2.5rem]">
          {projects?.map((project, index) => (
            <SingleCaseStudyCard
              key={index}
              project={project}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <ButtonPrimary
            onClick={() => push('/case-studies')}
            text="Discover more"
          />
        </div>
      </div>
    </section>
  );
}
