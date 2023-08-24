import { useQuery } from '@tanstack/react-query';

import { getTrustedCompanies } from '@/endpoints';

import TrustedCard from './TrustedCard';

export default function TrustedCompanies() {
  const { data } = useQuery({
    queryKey: ['trusted_companies'],
    queryFn: getTrustedCompanies,
    refetchOnWindowFocus: false,
    staleTime: 300000
  });

  const {
    data: { title, sub_title, partners }
  } = data;

  return (
    <section className="py-[3.75rem]">
      <div className="container">
        <div className="grid lg:grid-cols-[repeat(2,auto)] grid-cols-1 items-center justify-between">
          <div className="lg:max-w-[256px] mb-[2rem]">
            <h1 className="text-[#181818] font-bold text-[24px] mb-[0.5rem] capitalize">
              {title}
            </h1>
            <p className="text-[16px] font-normal text-[#80888F] first-letter:uppercase">
              {sub_title}
            </p>
          </div>
          <div className="grid md:grid-cols-[repeat(4,auto)] grid-cols-2 gap-[25px] justify-between">
            {partners?.map((partner, index) => (
              <TrustedCard
                partner={partner}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
