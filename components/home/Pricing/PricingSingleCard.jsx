import { useRouter } from 'next/router';
import Package from './Package';

export default function PricingSingleCard({ pack, index }) {
  const { name, icon, package_services } = pack;
  const src = process.env.NEXT_PUBLIC_IMAGE + '/' + icon;
  const router = useRouter();

  return (
    <div className="group">
      <div className="rounded-3xl mx-auto px-[30px] py-[35px] bg-white group-hover:bg-[#0057FF] group-hover:text-white w-full h-full border-2 border-cyan-400 duration-700">
        <h3 className="font-semibold text-3xl text-[#554DDE] mt-8 text-center group-hover:text-white first-letter:capitalize">
          {name}
        </h3>
        <img
          className="mx-auto my-[25px] w-24 h-24 mb-8"
          src={src}
          alt="PriceSvg01"
        />
        {package_services?.map((service, index) => (
          <Package
            service={service}
            key={index}
          />
        ))}
        <button
          className="font-medium text-base text-center mt-6 flex py-[10px] px-[29px] rounded-2xl mx-auto  bg-[#554DDE] text-white group-hover:bg-white group-hover:text-blue-600 "
          onClick={() => router.push('/contact-us')}
        >
          Get started
        </button>
      </div>
    </div>
  );
}
