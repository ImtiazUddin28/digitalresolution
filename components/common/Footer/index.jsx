import Image from 'next/image';
import Link from 'next/link';
import envelopIcon from '@/assets/envelop-icon.svg';
import facebookIcon from '@/assets/facebook-icon.svg';
import logo from '@/assets/DigitalResolutionLogobg2.png';
import telephoneIcon from '@/assets/telephone-icon.svg';
import twitterIcon from '@/assets/twitter-icon.svg';
import instagramIcon from '../../../assets/instagram-icon.svg';
import linkedinIcon from '../../../assets/linkdinIcon.png';
import telegramIcon from '../../../assets/telegram-icon.svg';

export default function Footer() {
  return (
    <footer className="pt-[3.125rem] bg-black text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[repeat(4,auto)] justify-between gap-[25px] pb-[3.125rem]">
          <div className="max-w-[380px]">
            <Image
              src={logo}
              alt="Digital Resolution Logo"
              className="mb-[1.5625rem]"
            />
            <p className="mb-[1.5625rem]">
              Transform the way you work and increase efficiency with our
              user-friendly and innovative technology.
            </p>
            <div className="flex gap-6">
              <Link
                href={
                  'https://www.facebook.com/profile.php?id=100091440727498&_rdc=1&_rdr'
                }
                target="_blank"
              >
                <Image
                  src={facebookIcon}
                  alt="Facebook icon"
                  className="rounded-full"
                />
              </Link>

              <Link
                href={'https://www.linkedin.com/in/mahmood-nabi/'}
                target="_blank"
                className="rounded-full p-1 bg-[#e1520a] w-8 flex items-center justify-center"
              >
                <Image
                  src={linkedinIcon}
                  alt="Linkedin icon"
                  className="w-4"
                />
              </Link>

              <Link
                href={'https://twitter.com/SoftexSolution'}
                target="_blank"
              >
                <Image
                  src={twitterIcon}
                  alt="Twitter icon"
                  className="rounded-full"
                />
              </Link>

              <Link
                href={'https://www.instagram.com/softexsolution/'}
                target="_blank"
              >
                <Image
                  src={instagramIcon}
                  alt="Instagram icon"
                  className="rounded-full"
                />
              </Link>

              <Link
                href={''}
                target="_blank"
              >
                <Image
                  src={telegramIcon}
                  alt="Telegram icon"
                  className="rounded-full hidden"
                />
              </Link>
            </div>
          </div>
          <div className="">
            <h3 className="font-semibold text-[1.5rem] text-[#e1520a] mb-[1rem]">
              Our Company
            </h3>
            <nav>
              <ul className="flex flex-col gap-[14px]">
                <Link
                  href="/about-us"
                  className="hover:font-bold"
                >
                  About us
                </Link>
                <Link
                  href="/privacy-policy"
                  className="hover:font-bold"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-condition"
                  className="hover:font-bold"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="hover:font-bold"
                >
                  Cookie Settings
                </Link>

                {/* <Link
                  href="/coming-soon"
                  className="hover:font-bold"
                >
                  How it works
                </Link>
                <Link
                  href="/coming-soon"
                  className="hover:font-bold"
                >
                  Blog
                </Link>
                <Link
                  href="/contact-us"
                  className="hover:font-bold"
                >
                  Contact us
                </Link>
                <Link
                  href="/coming-soon"
                  className="hover:font-bold"
                >
                  Guides
                </Link> */}
              </ul>
            </nav>
          </div>
          <div className="">
            <h3 className="font-semibold text-[1.5rem] text-[#e1520a] mb-[1rem]">
              Quick Link
            </h3>
            <nav>
              <ul className="flex flex-col gap-[14px]">
                <Link
                  href="/services"
                  className="hover:font-bold"
                >
                  Services
                </Link>
                <Link
                  href="/career"
                  className="hover:font-bold"
                >
                  Career
                </Link>
                <Link
                  href="/contact-us"
                  className="hover:font-bold"
                >
                  Contact us
                </Link>
              </ul>
            </nav>
          </div>
          <div className="">
            <h3 className="font-semibold text-[1.5rem] text-[#e1520a] mb-[1rem]">
              Contact Us
            </h3>
            <Link
              href="tel:+1 316-207-8882"
              className="flex items-center gap-[12px] mb-[0.75rem]"
            >
              <Image
                src={telephoneIcon}
                alt="Telephone icon"
              />
              <span>+1 316-207-8882</span>
            </Link>
            <Link
              href="mailto:softtech@gmail.com"
              className="flex items-center gap-[12px]"
            >
              <Image
                src={envelopIcon}
                alt="Envelop icon"
              />
              <span>globaldigitalresolution@gmail.com</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-[15px] lg:gap-0 border-t py-[1.25rem]">
          <p>Copyright © 2023 - All right reserved by Digital Resolution.</p>
          <nav className="">
            <ul className="flex gap-[24px]">
              <Link
                href="/privacy-policy"
                className="hover:font-bold"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-condition"
                className="hover:font-bold"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="hover:font-bold"
              >
                Cookie Settings
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
