import Image from 'next/image';

import starIcon from '@/assets/star-icon.png';

export default function TestimonialCard({ review }) {
  const { author, content, avatar, designation, location } = review;
  const starIcons = [
    {
      id: '1',
      starIcon: starIcon
    },
    {
      id: '2',
      starIcon: starIcon
    },
    {
      id: '3',
      starIcon: starIcon
    },
    {
      id: '4',
      starIcon: starIcon
    },
    {
      id: '5',
      starIcon: starIcon
    }
  ];

  return (
    <>
      {/* <div
        className={`${manrope.className} bg-[#FFFFFF] p-[16px] md:p-[32px] rounded-xl`}
      >
        <div className="ratings-container flex items-center space-x-[8px] mb-[24px]">
          {starIcons.map((icon) => (
            <span key={icon.id}>
              <Image
                src={icon.starIcon}
                width={12}
                height={12}
                alt=""
              />
            </span>
          ))}
        </div>
        <p className="text-[14px] lg:text-[16px] text-[#80888F] leading-[22px] mb-[32px]">
          We have been using this SaaS for over a year now and it has
          transformed the way we do business. The user-friendly interface and
          innovative features have made our operations more efficient and
          streamlined. Highly recommend!
        </p>
        <div className="flex items-center justify-start  ">
          <Image
            alt="Profile Image"
            src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"
            className="h-[48px] lg:h-[56px] w-[48px] lg:w-[56px] rounded-full object-cover mr-[20px]"
            width={56}
            height={56}
          />

          <div className="">
            <h3 className="text-[14px] md:text-[16px] text-[#112231] font-semibold leading-[22px] mb-[6px]">
              Bessie Cooper
            </h3>
            <p className="text-[10px] md:text-[16px] text-[#80888F] leading-[22px]">
              Business owner, London
            </p>
          </div>
        </div>
      </div> */}
      <div className="bg-[#FFFFFF] p-[16px] md:p-[32px] border-2 border-cyan-400 rounded-xl">
        <div className="flex items-center space-x-[8px] mb-[24px]">
          {starIcons?.map((icon) => (
            <span key={icon.id}>
              <Image
                src={icon.starIcon}
                width={12}
                height={12}
                alt=""
              />
            </span>
          ))}
        </div>
        <p className="text-[14px] lg:text-[16px] text-[#80888F] leading-[22px] mb-[32px] first-letter:uppercase">
          {content}
        </p>
        <div className="flex items-center justify-start">
          <Image
            alt="Profile Image"
            src={process.env.NEXT_PUBLIC_IMAGE + '/' + avatar}
            className="h-[48px] lg:h-[56px] w-[48px] lg:w-[56px] rounded-full object-cover mr-[20px]"
            width={56}
            height={56}
          />
          <div className="">
            <h3 className="text-[14px] md:text-[16px] text-[#112231] font-semibold leading-[22px] mb-[6px] first-letter:uppercase">
              {author}
            </h3>
            <p className="text-[10px] md:text-[16px] text-[#80888F] leading-[22px] first-letter:uppercase">
              <span className="first-letter:uppercase">{designation}</span>,{' '}
              <span className="first-letter:uppercase">{location}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
