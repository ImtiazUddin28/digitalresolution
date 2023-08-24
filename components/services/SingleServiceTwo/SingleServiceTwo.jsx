export default function SingleServiceTwo({ projectService, index }) {
  const { thumbnail, title, content, project_name } = projectService;
  return (
    <div
      className={
        index % 2 == 0 ? 'bg-[#F4F7FA] py-12 lg:py-28' : 'py-12 lg:py-28'
      }
    >
      <div className="container grid grid-cols-1 flex-col-reverse lg:grid-cols-2">
        <img
          src={process.env.NEXT_PUBLIC_IMAGE + '/' + thumbnail}
          alt="service-pic"
          className={index % 2 == 0 ? 'lg:mr-20 order-last' : 'lg:mr-20'}
        />

        <div
          className={
            index % 2 == 0
              ? 'mr-3 order-last lg:order-first lg:mr-20'
              : 'lg:ml-20'
          }
        >
          <h1 className=" font-[700] text-[24px] lg:text-[40px] text-black mt-7 lg:mt-0 mb-[2.5rem]">
            {title}
          </h1>
          <p
            className="font-[400] text-[16px] leading-6 text-[#5D647F]
    text-justify pb-7"
          >
            {content}
          </p>
          {/* <ul className="text-[#5D647F] list-disc list-inside pl-3">
            {project_name?.map((project, index) => (
              <li key={project?.[index]}>{project}</li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
}
