import Image from 'next/image'

import usFlag from '@/assets/us-flag.png'
import bdFlag from '@/assets/bd-flag.png'
import locationIcon from '@/assets/location-icon.png'

export default function TopBar() {
  return (
    <div className="py-[0.3125rem] lg:py-[1.1875rem]">
      <div className="container flex items-center justify-between">
        <div className="w-full lg:w-auto flex items-center gap-[24px]">
          <a
            className="flex items-center gap-[8px]"
            href="tel:+88 01745-744405"
          >
            <span className="w-[16px] lg:w-auto h-[16px] lg:h-auto">
              <Image
                src={bdFlag}
                alt="Bangladesh flag icon"
              />
            </span>
            <span className='text-[0.75rem] lg:text-[1rem]'>+88 01745-744405</span>
          </a>
          <span className="hidden lg:block w-[1px] h-[30px] bg-[#5D647F]"></span>
          <a
            className="flex items-center gap-[8px] lg:ml-0 ml-auto"
            href="tel:+1 316-207-8882"
          >
            <span className="w-[16px] lg:w-auto h-[16px] lg:h-auto">
              <Image
                src={usFlag}
                alt="United states flag icon"
              />
            </span>
            <span className='lg:text-[1rem] text-[0.75rem]'>+1 316-207-8882</span>
          </a>
        </div>
        <div className="hidden lg:flex items-center gap-[8px]">
          <span>
            <Image src={locationIcon} alt="Geolocation icon" />
          </span>
          <span>Manhattan, Kansas 66506, USA</span>
        </div>
      </div>
    </div>
  )
}
