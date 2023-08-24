import { useQuery } from '@tanstack/react-query';

import { getOurTeam } from '@/endpoints';

import SectionTitle from '@/components/common/SectionTitle';
import SingleTeamCard from '@/components/common/TeamCard';

export default function OurTeam() {
  const { data } = useQuery({
    queryKey: ['our_team'],
    queryFn: getOurTeam,
    staleTime: 300000
  });

  const {
    data: [{ title, sub_title, content, members }]
  } = data;

  return (
    <section className="bg-[#F4F7FA] py-[5rem]">
      <div className="container ">
        <SectionTitle
          title={title}
          subTitle={sub_title}
          content={content}
          align="center"
          selfContained={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-5 ">
          {members?.map((member, idx) => (
            <SingleTeamCard
              member={member}
              key={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
