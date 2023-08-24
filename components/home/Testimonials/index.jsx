import { useQuery } from '@tanstack/react-query';

import { getTestimonials } from '@/endpoints';

import SectionTitle from '@/components/common/SectionTitle';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
  const { data } = useQuery({
    queryKey: ['testimonials'],
    queryFn: getTestimonials,
    refetchOnWindowFocus: false,
    staleTime: 300000
  });

  const {
    data: { title, sub_title, content, reviews }
  } = data;

  return (
    <section className="bg-[#F4F7FA] py-[5rem]">
      <div className="container">
        <div className="relative mb-[57px] text-center ">
          <SectionTitle
            title={title}
            subTitle={sub_title}
            content={content}
            align="center"
            selfContained={true}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews?.map((review, index) => (
            <TestimonialCard
              key={index}
              review={review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
