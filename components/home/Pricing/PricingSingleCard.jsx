import { useRouter } from 'next/router';
import Package from './Package';

export default function PricingSingleCard({ pack, index }) {
  const { name, icon, package_services } = pack;
  const src = process.env.NEXT_PUBLIC_IMAGE + '/' + icon;
  const router = useRouter();

  return (
    <div className="group">
      <div className="rounded-3xl mx-auto px-[30px] py-[35px] bg-white group-hover:bg-[#e1520a] group-hover:text-white w-full h-full border-2 border-[#e1520a] groupduration-700">
        <h3 className="font-semibold text-3xl text-[#e1520a] mt-8 text-center group-hover:text-white first-letter:capitalize">
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
          className="font-medium text-base text-center mt-6 flex py-[10px] px-[29px] rounded-2xl mx-auto  bg-[#e1520a] text-white group-hover:bg-white group-hover:text-[#e1520a] group "
          onClick={() => router.push('/contact-us')}
        >
          Get started
        </button>
      </div>
    </div>
  );
}
