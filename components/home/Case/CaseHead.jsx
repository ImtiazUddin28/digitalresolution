import ButtonPrimary from '@/components/common/ButtonPrimary'

const CaseHead = () => {
  return (
    <div className="flex-col md:flex-row lg:flex justify-between items-start mx-auto gap-x-48">
      <div>
        <h1 className="font-semibold  text-[16px] text-[#0057FF] leading-[22px] capitalize">
          case studies
        </h1>
        <p className="text-[40px] text-[#112231] font-semibold leading-[50px]  mb-[16px] mt-[8px]">
          From challenge to success of our client stories
        </p>
      </div>
      <div className='mx-auto'>
        <p className="text-[16px] text-[#80888F] leading-[22px] pb-7">
          Experience a seamless and personalized solution that streamlines
          processes, boosts productivity.
        </p>
        <ButtonPrimary text={'Discover more'} />
      </div>
    </div>
  )
}

export default CaseHead
