import SectionTitle from '@/components/common/SectionTitle';
import ButtonPrimary from '@/components/common/ButtonPrimary';
import Link from 'next/link';
import Image from 'next/image';
import Rectangle from '@/assets/Rectangle.svg';
import RectangleThree from '@/assets/RectangleThree.svg';
import RectangleSix from '@/assets/RectangleSix.svg';

export default function Gallary() {
  return (
    <>
      {/* <div>
        <section className="flex flex-col place-items-center">
          <h1
            className={` mobile:mb-[20px] md:mb-[50px] font-[600] text-[32px] mobile:leading-[100%] md:leading-[40%] text-[#21293C]`}
          >
            Our Gallary
          </h1>
          <div className="flex w-full mobile:flex-col md:flex-row justify-between">
            {[Rectangle, RectangleSix, RectangleThree].map((item, index) => (
              <Image
                key={index}
                src={item}
                className={`w-[366px] h-[219px]`}
                alt=""
              />
            ))}
          </div>
        </section>
      </div> */}
      <section className="py-[5rem]">
        <div className="container">
          <SectionTitle
            title="Our Gallery"
            align="center"
          />
          <div className="flex w-full mobile:flex-col md:flex-row justify-between">
            {[Rectangle, RectangleSix, RectangleThree]?.map((item, index) => (
              <Image
                key={index}
                src={item}
                className={`w-[366px] h-[219px]`}
                alt=""
              />
            ))}
          </div>
          <div className="flex justify-center mt-[4rem]">
            <Link
              className="bg-[#e1520a] rounded-[35px] py-[13px] px-[31px] text-[16px] font-semibold text-white"
              href="https://www.linkedin.com/company/softex-solution/"
              target="_blank"
            >
              Discover more
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
