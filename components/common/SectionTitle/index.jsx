const SectionTitle = ({ subTitle, title, content, align, selfContained }) => {
  return (
    <div
      className={`text-${align} ${
        selfContained ? 'md:w-[590px] mx-auto' : 'w-full'
      }`}
    >
      <h4 className="font-semibold uppercase text-[1rem] text-[#0057FF] mb-[0.5rem] leading-[1.375rem]">
        {title}
      </h4>
      <h2 className="lg:text-[2.5rem] text-[1.5rem] text-[#112231] font-semibold lg:leading-[3.125rem] leading-[2.1875rem] mb-[1rem] first-letter:uppercase">
        {subTitle}
      </h2>
      <p className="text-[16px] text-[#80888F] leading-[22px] mb-[2.5rem] first-letter:uppercase">
        {content}
      </p>
    </div>
  )
}

export default SectionTitle
