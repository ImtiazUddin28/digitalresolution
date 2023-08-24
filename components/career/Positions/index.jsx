import SectionTitle from '@/components/common/SectionTitle';
import { getPosition } from '@/endpoints';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export default function Positions() {
  const { data } = useQuery({
    queryKey: ['job-opening'],
    queryFn: getPosition,
    refetchOnWindowFocus: false,
    staleTime: 300000
  });
  // const { data: positions } = data;

  const positions = data?.data;
  return (
    <>
      <section className="py-[5rem]">
        <div className="container">
          <SectionTitle
            title="Open Position"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {positions?.map((Position, index) => (
              <div
                key={index}
                className="bg-[#0057FF] p-[30px] lg:p-[40px] h-[506px] flex flex-col rounded-lg border-2"
              >
                <h1 className="my-8 text-white shadow-xl bg-[#2F97F7] font-[500] text-[13px] w-[113px] h-[32px] flex place-content-center place-items-center rounded-[10px] first-letter:capitalize">
                  {Position.job_type}
                </h1>

                <h1 className="mb-8 text-white text-[46px] md:text-[50px] lg:text-[56px] w-[197px] font-[700] leading-[150%] first-letter:capitalize">
                  {Position.job_title}
                </h1>

                <h1 className="mb-16 text-white  shadow-xl bg-[#2F97F7] font-[500] text-[13px] w-[113px] h-[32px] flex place-content-center place-items-center rounded-[10px] first-letter:capitalize">
                  {Position.job_category}
                </h1>

                <button className=" w-full rounded-[10px] bg-white h-[49px]">
                  <Link
                    href="/apply"
                    className="font-[500] text-[#554EEE] text-[24px]"
                  >
                    Apply Here
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
