import { useQuery } from '@tanstack/react-query';

import { getManagement } from '@/endpoints';

import SectionTitle from '@/components/common/SectionTitle';
import HeroServices from './HeroServices';

export default function Management() {
  const { data } = useQuery({
    queryKey: ['management'],
    queryFn: getManagement,
    staleTime: 300000
  });

  const {
    data: [{ title, sub_title, content, services, thumbnail }]
  } = data;

  return (
    <section className="py-[5rem]">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-[180px] gap-[40px]">
          <div>
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGE}/${thumbnail}`}
              alt="About pic hero"
              className="w-full"
            />
          </div>
          <div>
            <SectionTitle
              title={title}
              subTitle={sub_title}
              content={content}
              align="left"
            />
            {services?.map((service, index) => (
              <HeroServices
                service={service}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
