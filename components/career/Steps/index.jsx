import Step from './Step';

function Steps() {
  return (
    <>
      {/* <div>
        {' '}
        <section className="flex w-full relative h-auto mobile:mb-[100px] md:mb-[0px] mt-[0px]">
          <div className="flex w-full mobile:place-items-center md:flex-row mobile:flex-col mobile:space-y-6 md:space-y-0 justify-between">
            <div className="bg-white shader flex flex-col place-items-center z-50 w-[258px] h-[301px] rounded-[20px]">
              <h1 className={` text-[#0C0F18] font-[700] text-[56px] `}>01</h1>
              <h2 className={` text-[#e1520a] font-[600] text-[32px]`}>
                Screening
              </h2>
              <p
                className={` mt-[30px] w-[186px] text-[#6E7076] leading-[150%] text-[16px] font-[400]`}
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
            <div className="bg-white shader flex flex-col place-items-center z-50 w-[258px] h-[339px] rounded-[20px]">
              <h1 className={` text-[#0C0F18] font-[700] text-[56px] `}>02</h1>
              <h2 className={` text-[#e1520a] font-[600] text-[32px]`}>
                Assignment
              </h2>
              <p
                className={` mt-[30px] w-[186px] text-[#6E7076] leading-[150%] text-[16px] font-[400]`}
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
            <div className="bg-white shader flex flex-col place-items-center z-50 w-[258px] h-[301px] rounded-[20px]">
              <h1 className={` text-[#0C0F18] font-[700] text-[56px] `}>03</h1>
              <h2 className={` text-[#e1520a] font-[600] text-[32px]`}>
                Interview
              </h2>
              <p
                className={` mt-[30px] w-[186px] text-[#6E7076] leading-[150%] text-[16px] font-[400]`}
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
            <div className="bg-white shader flex flex-col place-items-center z-50 w-[258px] h-[339px] rounded-[20px]">
              <h1 className={` text-[#0C0F18] font-[700] text-[56px] `}>04</h1>
              <h2 className={` text-[#e1520a] font-[600] text-[32px]`}>
                Hiring
              </h2>
              <p
                className={`mt-[30px] w-[186px] text-[#6E7076] leading-[150%] text-[16px] font-[400]`}
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </section>
      </div> */}
      <section className="py-[5rem]">
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-[32px] md:grid-cols-2">
            <Step
              number="01"
              title="Screening"
              content="Our hiring team checks your application to find completeness. If we require further information or something is missing in your application, we will email you very soon."
            />
            <Step
              number="02"
              title="Assignment"
              content="If we find your background suitable for our company,we will provide an assignment related to your applied position now."
            />
            <Step
              number="03"
              title="Interview"
              content="Once we have checked the assignment, we will invite you to a virtual meeting."
            />
            <Step
              number="04"
              title="Hiring"
              content="If all the processes go well, you will receive a formal offer to join the WPPOOL family. This step usually takes place within 2-3 days from the interview date."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Steps;
