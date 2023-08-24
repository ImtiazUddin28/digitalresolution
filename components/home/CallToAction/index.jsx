import { useRouter } from 'next/router'

import ButtonPrimary from '@/components/common/ButtonPrimary'

import callBanner from '@/assets/call-to-action.png'

export default function CallToAction() {
  const { push } = useRouter()

  return (
    <section className="py-[5rem]">
      <div className="container">
        <div
          style={{ background: `url(${callBanner.src})` }}
          className="lg:p-[4.6875rem] p-[2rem] text-center rounded-[16px] !bg-no-repeat !bg-cover"
        >
          <h2 className="font-semibold text-[16px] text-white leading-[22px] capitalize">
            Call to action
          </h2>
          <p className="lg:text-[2.5rem] text-[1.5rem] text-white font-semibold lg:leading-[50px] leading-[36px] mb-[16px] mt-[8px]">
            Get in touch with us - Let&apos;s <br /> discuss your needs
          </p>
          <p className="text-[16px] text-white leading-[22px] md:mb-[2.5rem] mb-[1.25rem]">
            Our team is here to answer any questions and help you take your
            business to the next level.
          </p>
          <ButtonPrimary
            onClick={() => push('/schedule')}
            text="Go forward"
          />
        </div>
      </div>
    </section>
  );
}
