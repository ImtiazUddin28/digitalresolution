import { useRouter } from 'next/router'

import SectionTitle from '@/components/common/SectionTitle'

import ButtonPrimary from '@/components/common/ButtonPrimary'
import Image from 'next/image'
import WebDevelopment from '@/assets/web-development.png';
import SoftwareDevelopment from '@/assets/software-development-icon.png';
import SEODevelopment from '@/assets/graphic-design.png';
import AppDevelopment from '@/assets/app-development.png';

export default function OurServices() {
  const { push } = useRouter()

  

  return (
    <section className="bg-[#F4F7FA] py-[5rem] ">
      <div className="container ">
        <SectionTitle
          title="Our Service"
          subTitle="Discover the power of our comprehensive services"
          content="Empowering businesses with innovative solutions for maximum success. Streamlining operations and driving growth with technology."
          align="center"
          selfContained={true}
        />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-[24px] mb-[2.5rem] ">
          <div className="flex flex-col gap-[24px] bg-white  rounded-3xl p-[2rem]">
            <Image
              height={58}
              width={72}
              src={WebDevelopment}
              alt="Service icon"
            />
            <div className="h-full flex flex-col">
              <h3 className="text-[1.125rem] uppercase font-bold text-black mb-[0.75rem]">
                WEB DEVELOPMENT
              </h3>
              <p>
                We offer web development services that are tailored to help
                businesses build modern, responsive, and user-friendly websites
                that attract and engage their target audience. Our team
                leverages the latest tools and technologies to create websites
                that are optimized for speed, performance, and search engine
                visibility
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] bg-white  rounded-3xl p-[2rem]">
            <Image
              height={58}
              width={72}
              src={AppDevelopment}
              alt="Service icon"
            />
            <div className="h-full flex flex-col">
              <h3 className="text-[1.125rem] uppercase font-bold text-black mb-[0.75rem]">
                APP DEVELOPMENT
              </h3>
              <p>
                Our app development services are designed to help businesses
                stay ahead of the competition by creating feature-rich and
                intuitive mobile applications. We build native and hybrid apps
                that run seamlessly across different platforms and devices,
                delivering an exceptional user experience.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] bg-white rounded-3xl p-[2rem]">
            <Image
              height={58}
              width={72}
              src={SoftwareDevelopment}
              alt="Service icon"
            />
            <div className="h-full flex flex-col">
              <h3 className="text-[1.125rem] uppercase font-bold text-black mb-[0.75rem]">
                SOFTWARE DEVELOPMENT
              </h3>
              <p>
                At Softex Solution, we also specialize in custom software
                development, providing businesses with bespoke solutions that
                meet their unique requirements. From design and coding to
                testing and deployment, we take a a comprehensive approach to
                software development and provide ongoing support and maintenance
                to ensure your software remains up-to-date and secure
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] bg-white rounded-3xl p-[2rem]">
            <Image
              height={58}
              width={72}
              src={SEODevelopment}
              alt="Service icon"
            />
            <div className="h-full flex flex-col">
              <h3 className="text-[1.125rem] uppercase font-bold text-black mb-[0.75rem]">
                WEBSITE SEO
              </h3>
              <p>
                Our website SEO services are designed to help businesses improve
                their online visibility and attract more traffic to their
                website. Our SEO experts use data-driven strategies to optimize
                your website for search engines, boost your website ranking, and
                increase traffic and conversions
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <ButtonPrimary
            onClick={() => push('/services')}
            text="See more"
          />
        </div>
      </div>
    </section>
  );
}
