export default function SingleCaseStudyCard({ project }) {
  const { thumbnail, title, content } = project

  return (
    <div className="p-[22px] md:p-0">
      <img
        src={process.env.NEXT_PUBLIC_IMAGE + '/' + thumbnail}
        alt="Case study thumbnail"
        className="rounded-lg w-full h-[350px] mb-[1.5rem] object-cover"
      />
      <h3 className="text-[#112231] text-[18px] lg:text-[24px] font-semibold leading-[28px] lg:leading-[32px] mb-[16px] ">
        {title}
      </h3>
      <p className="text-[#80888F] text-[14px] leading-[22px]">{content}</p>
    </div>
  )
}
