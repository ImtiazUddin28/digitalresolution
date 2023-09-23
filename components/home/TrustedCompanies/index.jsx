import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import GlobalBestGift from '@/assets/globalbestgift.png';
import GlamourousFashions from '@/assets/glamourousfashions.png';
import CbnTv from '@/assets/cbn-logo.png';
import ChalamanNewyork from '@/assets/chalaman-newyork-logo.webp';


export default function TrustedCompanies() {
 
  return (
    <section className="py-[3.75rem]">
      <div className="container">
        <div className="grid lg:grid-cols-[repeat(2,auto)] grid-cols-1 items-center justify-between">
          <div className="lg:max-w-[256px] mb-[2rem]">
            <h1 className="text-[#e1520a] font-bold text-[24px] mb-[0.5rem] capitalize">
              Trusted Companies
            </h1>
            <p className="text-[16x] font-normal text-[#80888F] first-letter:uppercase">
              Some of our best partners who have worked for 2+ years
            </p>
          </div>
          <div className="grid md:grid-cols-[repeat(4,auto)] grid-cols-2 gap-[25px] justify-between">
            <div className="w-full">
              <a
                href="https://chalamannewyork.com/"
                target="blank"
              >
                <Image
                  className="w-[12rem] h-[3rem]"
                  src={ChalamanNewyork}
                  alt="Chalaman Newyork"
                  height={100}
                  width={100}
                />
              </a>
            </div>
            <div className="w-full">
              <a
                href="https://cbntvusa.net/"
                target="blank"
              >
                <Image
                  className="w-[12rem] h-[3rem]"
                  src={CbnTv}
                  alt="CBN TV USA"
                  height={100}
                  width={100}
                />
              </a>
            </div>
            <div className="w-full">
              <a
                href="https://globalbestgift.com/"
                target="blank"
              >
                <Image
                  className="w-[12rem] h-[3rem]"
                  src={GlobalBestGift}
                  alt="Global Best Gift"
                  height={100}
                  width={100}
                />
              </a>
            </div>
            <div className="w-full">
              <a
                href="https://www.glamourousfashions.com/"
                target="blank"
              >
                <Image
                  className="w-[12rem] h-[3rem]"
                  src={GlamourousFashions}
                  alt="Glamourous Fashions"
                  height={100}
                  width={100}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
