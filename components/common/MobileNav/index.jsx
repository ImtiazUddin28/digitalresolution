import Link from 'next/link';
import Image from 'next/image';

import logo from '@/assets/logo.svg';
import closeIcon from '@/assets/close-icon.svg';

export default function MobileNav({ setOpen }) {
  const navigation = [
    { label: 'Home', url: '/' },
    { label: 'About us', url: '/about-us' },
    { label: 'Services', url: '/services' },
    { label: 'Pricing', url: '/pricing' },
    { label: 'Case Studies', url: '/case-studies' },
    { label: 'Career', url: '/career' }
  ];

  return (
    <aside className="fixed top-0 left-0 w-[300px] h-full bg-[#e1520a] z-[100]">
      <nav className="px-[1.25rem]">
        <div className="flex items-center justify-between py-[1.5rem]">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
            />
          </Link>
          <button onClick={() => setOpen(false)}>
            <Image
              src={closeIcon}
              alt="Close icon"
            />
          </button>
        </div>
        <ul className="flex flex-col gap-[12px]">
          {navigation?.map((item) => (
            <li
              key={item.label}
              className="text-white"
            >
              <Link href={item.url}>{item.label}</Link>
            </li>
          ))}
          <li className="text-white">
            <Link href="/contact-us">Contact</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
