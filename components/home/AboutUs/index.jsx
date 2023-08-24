import { useState } from 'react';

import { useRouter } from 'next/router';

import { useQuery } from '@tanstack/react-query';

import { getAboutUs } from '@/endpoints';

import Image from 'next/image';

import SectionTitle from '@/components/common/SectionTitle';
import ButtonPrimary from '@/components/common/ButtonPrimary';
import Status from './Status';

import AboutRec from '@/assets/AboutRec.png';
import AboutCer from '@/assets/AboutCer.png';
import playIcon from '@/assets/play-icon.png';


export default function AboutUs() {
  const [showModal, setShowModal] = useState(false);

  const { push } = useRouter();

  const { data } = useQuery({
    queryKey: ['about_us'],
    queryFn: getAboutUs,
    refetchOnWindowFocus: false,
    staleTime: 300000
  });

  const {
    data: {
      title,
      sub_title,
      content,
      total_project_text,
      total_project,
      team_member_text,
      team_member,
      rating_text,
      rating
    }
  } = data;

  return (
    <section className="py-[3.75rem]">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-[180px] gap-[40px]">
          <div className="lg:order-1 order-2 ">
            <SectionTitle
              subTitle={sub_title}
              title={title}
              content={content}
              align="left"
              selfContained={false}
            />
            <ButtonPrimary
              onClick={() => push('/about-us')}
              text={'Discover more'}
            />
            <hr className="my-[2.5rem]" />
            <div className="flex items-center justify-between text-center">
              <Status
                title={total_project_text}
                value={`${total_project}+`}
              />
              <Status
                title={team_member_text}
                value={`${team_member}+`}
              />
              <Status
                title={rating_text}
                value={rating}
              />
            </div>
          </div>
          <div className="relative lg:order-2 order-1 lg:mb-0 mb-[4.375rem]">
            <Image
              src={AboutRec}
              alt="About pic hero"
              className="w-full"
            />
            <div className="absolute w-[220px] lg:bottom-[70px] -bottom-[70px] lg:-left-[110px] left-[calc(50%-110px)]">
              <Image
                src={AboutCer}
                alt="About pic hero"
              />
              {/* <Image
                onClick={() => setShowModal(true)}
                src={playIcon}
                alt="About pic hero"
                className="absolute top-[50%] left-[50%] -translate-x-[40px] -translate-y-[40px]"
              /> */}
            </div>
          </div>
        </div>
        {showModal && (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-3 ">
              <div className="relative w-auto my-6 mx-auto max-w-[650px]">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="relative flex-auto">
                    <iframe
                      className="w-[300px] md:w-[560px] lg:w-[600px] "
                      // width="560"
                      height="315"
                      src="https://www.youtube.com/embed/cwdt9RrGSoQ"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="flex items-center  justify-center md:justify-end lg:justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <ButtonPrimary
                      onClick={() => setShowModal(false)}
                      text={'Explore'}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        )}
      </div>
    </section>
  );
}
