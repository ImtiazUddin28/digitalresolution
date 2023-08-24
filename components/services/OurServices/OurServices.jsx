import Title from '@/components/common/Title'
import OurServiceDetails from './OurServiceDetails'

export default function OurServices({ projects }) {
  return (
    <div className="container mt-20">
      <Title className="hidden lg:block text-center text-black mb-[2.5rem]">
        Our Service
      </Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 justify-between align-middle gap-5 mx-5 mb-16">
        {projects?.map((service, index) => (
          <OurServiceDetails
            key={index}
            service={service}
          />
        ))}
      </div>
    </div>
  )
}
