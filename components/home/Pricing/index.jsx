import { getOurPlan } from '@/endpoints'
import { useQuery } from '@tanstack/react-query'

import SectionTitle from '@/components/common/SectionTitle'
import PricingSingleCard from './PricingSingleCard'

export default function Pricing() {
  const { data } = useQuery({
    queryKey: ['our_plan'],
    queryFn: getOurPlan,
    refetchOnWindowFocus: false,
    staleTime: 300000
  })

  const {
    data: { title, sub_title, content, packages }
  } = data

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
        <div
          className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3"
          id="pricing-plan"
        >
          {packages?.map((pack, index) => (
            <PricingSingleCard
              pack={pack}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
