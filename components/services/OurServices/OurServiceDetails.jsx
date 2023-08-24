import Image from "next/image";

export default function OurServiceDetails({service}) {
    const {title, content,logo} = service;
  return (
    <div>
        <div
          data-aos="fade-up"
          className="w-full h-[524px] bg-white rounded-[10px] mb-10 p-[6px] pb-[8px] shadow-[0_24px_40px_-15px_rgba(0,0,0,0.3)] border-2 border-cyan-400
          "
        >
          <Image
            className="m-8 w-[88px] h-[104px]  margin: 32px"
            src={process.env.NEXT_PUBLIC_IMAGE + '/' +logo}
            width={88}
            height={104}
            alt="dev"
          />
          <h3 className="font-[700] text-[24px] leading-8 text-[#21293C] ml-8">
            {title}
          </h3>
          <p className="font-[400] text-[16px] leading-6 text-[#6E7076] ml-8 mr-8 py-5 px-1 text-justify
          ">
         {content}
          </p>
        </div>
    </div>
  )
}
