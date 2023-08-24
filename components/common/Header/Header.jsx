import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.svg';
import menuIcon from '@/assets/menu-icon.svg';
import { useRouter } from 'next/router';

export default function Header({ setOpen }) {
  const router = useRouter();
  const navigation = [
    { label: 'Home', url: '/' },
    { label: 'About us', url: '/about-us' },
    { label: 'Services', url: '/services' },
    // { label: 'Case Studies', url: '/case-studies' },
    { label: 'Career', url: '/career' }
  ];

  return (
    <div className="bg-[#0057FF] py-[1rem] sticky top-0 w-full z-50 ">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
          />
        </Link>
        <nav className="hidden lg:flex items-center">
          <ul className="flex gap-[24px] text-white ">
            {navigation?.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.url}
                  className={router.pathname === item.url ? 'font-bold' : ''}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact-us"
            className="font-bold text-white py-[13px] px-[24px] border border-white rounded-full ml-[1.5rem]"
          >
            Contact us
          </Link>
        </nav>
        <button
          className="lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Image
            src={menuIcon}
            alt="Menu icon"
          />
        </button>
      </div>
    </div>
  );
}
