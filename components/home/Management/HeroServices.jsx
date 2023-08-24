const HeroServices = ({ service }) => {
  const src = process.env.NEXT_PUBLIC_IMAGE + '/' + service.logo
  return (
    <div className="flex gap-[24px] mb-4">
      <div className="w-[50px]">
        <img
          src={src}
          alt="Responsive design icon"
        />
      </div>
      <div className="w-[calc(100%-74px)]">
        <h4 className="text-[16px] font-semibold text-black">
          {service.title}
        </h4>
        <p className="text-[#80888F] pt-2">{service.content}</p>
      </div>
    </div>
  )
}

export default HeroServices
