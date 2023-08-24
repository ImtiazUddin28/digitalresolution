import Image from 'next/image';
import Link from 'next/link';
import facebook from '@/assets/facebook-social.svg';
import linkedin from '@/assets/linkedin-social.svg';
import twitter from '@/assets/twitter-social.svg';

export default function SingleTeamCard({ member }) {
  const {
    full_name,
    designation,
    image,
    social_links: { facebook_link = '', twitter_link = '', linkedin_link = '' }
  } = member;
  const img = process.env.NEXT_PUBLIC_IMAGE + '/' + image;
  return (
    <div className="relative group bg-white rounded-[12px] overflow-hidden">
      <div className="relative h-[245px]">
        <img
          alt="Developer"
          src={img}
          className="w-full h-full object-cover"
        />
        <div className="invisible group-hover:visible absolute top-0 left-0 w-full h-full bg-[rgba(17,34,49,0.4)]">
          <div className="absolute bottom-[32px] w-full flex justify-center gap-[16px] mt-auto">
            <Link
              href={facebook_link}
              target="_blank"
              className="w-[35px] h-[35px] flex items-center justify-center bg-[#e1520a] rounded-full"
            >
              <Image
                src={facebook}
                alt="Facebook icon"
              />
            </Link>
            <Link
              href={linkedin_link}
              target="_blank"
              className="w-[35px] h-[35px] flex items-center justify-center bg-[#e1520a] rounded-full"
            >
              <Image
                src={linkedin}
                alt="Linkedin icon"
              />
            </Link>
            <Link
              href={twitter_link}
              target="_blank"
              className="w-[35px] h-[35px] flex items-center justify-center bg-[#e1520a] rounded-full"
            >
              <Image
                src={twitter}
                alt="Twitter icon"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="group-hover:bg-[#e1520a] group-hover:text-white text-black p-[1.5rem] text-center">
        <h3 className="text-[1.375rem] font-semibold mb-[0.25rem]">
          {full_name}
        </h3>
        <p className="group-hover:text-white text-[#80888F] text-[0.875rem]">
          {designation}
        </p>
      </div>
    </div>
  );
}
