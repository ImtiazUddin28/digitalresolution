import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import bdIcon from '../../../assets/bdFlag.png';
import calenderIcon from '../../../assets/calendar.png';
import teleIcon from '../../../assets/telephone.png';
import usIcon from '../../../assets/usFlag.png';

const CallNow = () => {
  const [toggle, setToggle] = useState(false);
  const contactNumbers = [
    {
      id: '1',
      icon: bdIcon,
      number: '+88 01745-744405'
    },
    {
      id: '2',
      icon: usIcon,
      number: '+1 316-207-8882'
    }
  ];

  return (
    <div className="fixed bottom-1/2 top-1/2 right-0 flex items-center justify-end z-[2]">
      <button
        type="button"
        className={`flex items-center justify-center  text-white bg-[#e1520a]  w-12 h-12 transition-transform duration-500 ease-in-out ${
          toggle === true ? 'translate-x-0 ' : ' translate-x-[16rem]'
        } `}
        onClick={() => setToggle(!toggle)}
      >
        <Image
          src={teleIcon}
          alt=""
          className="w-5"
        />
      </button>

      <div
        data-dial-init
        className={`w-[16rem] h-[16.5rem] bg-[#e1520a] p-5 transition-transform duration-500 ${
          toggle === true ? 'translate-x-0 ' : 'translate-x-full'
        } `}
      >
        <h1 className="text-white text-2xl mb-3">Call Us Now</h1>
        <div className="text-white ">
          {contactNumbers?.map((number) => (
            <a
              href={`tel:${number.number}`}
              className="flex flex-row items-center mb-2"
              key={number.id}
            >
              <Image
                src={number.icon}
                alt="India Flag"
                className="w-[27px] h-[18px]"
              />
              <span className="text-lg ml-3">{number.number}</span>
            </a>
          ))}
        </div>
        <hr className="mb-3" />
        <Link
          href="/schedule"
          className=" p-5 h-[6rem] bg-[#0056b3]  text-white flex flex-col items-center justify-center"
        >
          <Image
            src={calenderIcon}
            alt="India Flag"
            className="mb-3"
          />
          <h2> Schedule Call</h2>
        </Link>
      </div>
    </div>
  );
};

export default CallNow;
