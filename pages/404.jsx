import Link from 'next/link';
import Image from 'next/image';

import Layout from '@/components/layout';

import error from '@/assets/404.svg';

export default function Error() {
  return (
    <Layout pageTitle="404">
      <div className="container text-center">
        <h3 className="font-semibold text-3xl text-[#e1520a] pt-20">
          Oops! Page not found
        </h3>
        <Image
          src={error}
          alt="Error"
          className="mx-auto w-2/5"
        />
        <Link href="/">
          <button className="font-medium text-base text-center mt-6 flex py-[10px] px-[60px] rounded mx-auto  bg-[#e1520a] text-white">
            Go To Home
          </button>
        </Link>
      </div>
    </Layout>
  );
}
