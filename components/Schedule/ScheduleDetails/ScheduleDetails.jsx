import logo from '@/assets/logo.svg';
import clock from '@/assets/clock2.png';
import Image from 'next/image';
import { useContext } from 'react';
import { ScheduleContext } from '../context/ScheduleContext';
import Link from 'next/link';

const ScheduleDetails = () => {
  const { selectedTimezone, footer, takenSchedule } =
    useContext(ScheduleContext);

  let Details = (
    <div className="mx-6">
      <p className="py-2 text-blue-600 font-bold">Agenda:</p>
      <Link
        className="block py-1"
        href="/"
      >
        1. Introduction of Digital Resolution
      </Link>
      <Link
        className="block py-1"
        href="/"
      >
        2. Requirement understanding
      </Link>
      <Link
        className="block py-1"
        href="/"
      >
        3. Similar work showcase
      </Link>
      <Link
        className="block py-1"
        href="/"
      >
        4. Next actions
      </Link>
    </div>
  );
  if (takenSchedule !== '') {
    Details = (
      <div className="mx-6">
        <Link
          className="text-left text-blue-600 mt-3 font-semibold mb-3"
          href="/"
        >
          {takenSchedule}
        </Link>
        <Link
          className="block text-blue-600 text-left mt-3 font-semibold mb-3"
          href="/"
        >
          {footer}
        </Link>
        <Link
          className="block text-blue-600 text-left mt-3 font-semibold mb-3"
          href="/"
        >
          Time Zone: {selectedTimezone}
        </Link>
      </div>
    );
  }
  return (
    <div className="border-[1px] border-b-0 rounded">
      <div className="border-b-[2px]">
        <Image
          className="w-4/6 mx-auto py-12"
          src={logo}
          alt="Main Logo"
        />
      </div>
      <div className="mx-6">
        <p className="text-gray-400 my-2 font-semibold">Digital Resolution</p>
        <h1 className="font-bold text-2xl mr-16 text-blue-600">
          Introduction Call With Digital Resolution
        </h1>
      </div>
      <div className="flex my-3">
        <Image
          className="w-9 h-9 ml-3"
          src={clock}
          alt="clock"
        />
        <p className="my-2 font-semibold">30 min</p>
      </div>

      {Details}
      <div className="my-6">
        <Link
          className="hidden lg:block ml-6 text-sm text-blue-600 hover:underline"
          href="/"
        >
          Cookie settings
        </Link>
      </div>
    </div>
  );
};

export default ScheduleDetails;
