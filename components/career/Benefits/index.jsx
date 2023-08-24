import { useQuery } from '@tanstack/react-query'
import { getBenefits } from '@/endpoints'

import SectionTitle from '@/components/common/SectionTitle'
import ServiceCard from '@/components/common/ServiceCard'

export default function Benefits() {
  const { data } = useQuery({
    queryKey: ['benefits'],
    queryFn: getBenefits,
    refetchOnWindowFocus: false,
    staleTime: 300000
  })

  const { data: benefits } = data

  return (
    <section className="py-[5rem]">
      <div className="container">
        <SectionTitle
          subTitle="Benefits Of Working With softex"
          align="center"
        />
        <div className={`w-full relative`}>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[28px]">
            {benefits?.map((item, index) => (
              <div key={index}>
                {/* <div
                key={index}
                className={`p-[32px] boxed mobile:w-auto md:w-[364px] relative z-50 bg-white flex flex-col place-items-start mt-[50px] mobile:h-auto md:h-[330px]`}
              >
                <div
                  className={`bg-[#EDEDF9] min-w-[80px] min-h-[80px]  flex place-content-center place-items-center rounded-full`}
                >
                  <img
                    src={process.env.NEXT_PUBLIC_IMAGE + '/' + item.logo}
                    className="w-[45.86px] h-[45.86px]"
                    alt=""
                  />
                </div>
                <div className="flex mt-[24px]">
                  <div className="bg-[#3938B9] mr-[12px] w-[46px] h-[1px]" />
                  <div className="bg-[#3938B9] w-[30px] h-[1px]" />
                </div>
                <div>
                  <h1 className="text-[#47585B] text-start mt-[26px] font-[600] text-[24px] first-letter:uppercase">
                    {item.title}
                  </h1>
                  <p
                    className={` mt-[16px] tracking-[-3%] text-start mobile:pb-4 md:pb-0 mobile:text-[14px] md:text-[16px] font-[400] leading-[24px] text-[#6E7076] first-letter:uppercase`}
                  >
                    {item.content}
                  </p>
                </div>
              </div> */}
                <div className="shadow-[0_4px_35px_0_rgba(0,0,0,0.07)]">
                  <ServiceCard
                    icon={process.env.NEXT_PUBLIC_IMAGE + '/' + item.logo}
                    title={item.title}
                    content={item.content}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
