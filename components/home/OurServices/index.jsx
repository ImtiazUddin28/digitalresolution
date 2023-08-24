import { useRouter } from 'next/router'

import { useQuery } from '@tanstack/react-query'

import { getOurServices } from '@/endpoints'

import SectionTitle from '@/components/common/SectionTitle'
import ServiceCard from '@/components/common/ServiceCard'
import ButtonPrimary from '@/components/common/ButtonPrimary'

export default function OurServices() {
  const { push } = useRouter()

  const { data } = useQuery({
    queryKey: ['our_services'],
    queryFn: getOurServices,
    refetchOnWindowFocus: false,
    staleTime: 300000
  })

  const {
    data: { title, sub_title, content, projects }
  } = data

  return (
    <section className="bg-[#F4F7FA] py-[5rem] ">
      <div className="container ">
        <SectionTitle
          title={title}
          subTitle={sub_title}
          content={content}
          align="center"
          selfContained={true}
        />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-[24px] mb-[2.5rem] ">
          {projects?.slice(0, 4).map((project, index) => (
            <ServiceCard
              key={index}
              icon={process.env.NEXT_PUBLIC_IMAGE + '/' + project.logo}
              title={project.title}
              content={project.content}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <ButtonPrimary
            onClick={() => push('/services')}
            text="See more"
          />
        </div>
      </div>
    </section>
  );
}
