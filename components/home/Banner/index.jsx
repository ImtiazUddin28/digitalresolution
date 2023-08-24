import { useRouter } from 'next/router';

import homeBanner from '@/assets/home-banner.webp';
import ButtonPrimary from '@/components/common/ButtonPrimary';

export default function Banner() {
  const style = {
    background: `url("${homeBanner.src}")`
  };

  const { push } = useRouter();

  return (
    <div
      style={style}
      className="relative h-[585px] !bg-no-repeat !bg-center !bg-cover"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(28,25,37,1)] to-[rgba(28,25,37,0.26)]"></div>
      <div className="container h-full flex items-center justify-center">
        <div className="max-w-[650px] text-center text-white mx-auto z-[1]">
          <span className="block font-semibold uppercase mb-[1rem]">
            we’re innovative
          </span>
          <h1 className="text-[3.5rem] text-white font-[800] leading-[4rem] mb-[1rem]">
            Expert digital solutions for your business
          </h1>
          <p className="mb-[2.5rem] px-[3.75rem]">
            Transform the way you work and increase efficiency with our
            user-friendly and innovative technology.
          </p>
          <ButtonPrimary
            onClick={() => push('/contact-us')}
            text="Get in touch"
          />
        </div>
      </div>
    </div>
  );
}
