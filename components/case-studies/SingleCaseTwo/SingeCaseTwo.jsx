

export default function SingleCaseTwo({ caseStudy, index }) {
  const { title, sub_title, category, content, thumbnail } = caseStudy;
  return (
    <div className="pt-6 lg:pt-24 py-5 px-4 lg:px-0`">
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        <img
          src={process.env.NEXT_PUBLIC_IMAGE + '/' + thumbnail}
          alt="case-pic"
          className={index % 2 == 0 ? 'lg:mr-20 order-last' : 'lg:mr-20'}
        />
        <div
          className={
            index % 2 == 0
              ? 'mr-3 order-last lg:order-first lg:mr-20'
              : 'lg:ml-20'
          }
        >
          <h1 className="font-[700] text-[24px] lg:text-[36px] font-[bold] leading-10  text-black py-4 lg:py-0 mt-4 lg:mt-0">
            {title}
          </h1>
          <p className="py-4 font-[400] text-[16px] leading-6 text-[#5D647F]">
            {category} {sub_title}
          </p>
          <p
            className="font-[400] text-[16px] leading-8 text-[#21293C]
    text-justify"
          >
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
