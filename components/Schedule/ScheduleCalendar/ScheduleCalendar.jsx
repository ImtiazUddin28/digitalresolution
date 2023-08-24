import { useContext } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { ScheduleContext } from '../context/ScheduleContext';
import ScheduleEventForm from '../ScheduleEventForm/ScheduleEventForm';
import Timezone from '../Timezone/Timezone';

export default function ScheduleCalendar() {
  const { footer, selected, setSelected, takenSchedule, setTakenSchedule } =
    useContext(ScheduleContext);
  let schedules = [
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '01:30 PM',
    '02:00 PM',
    '02:30 PM',
    '03:30 PM',
    '04:00 PM',
    '04:30 PM'
  ];

  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday or Saturday
  };

  const disabledDates = (date) => {
    const today = new Date();
    const futureDate = new Date(today.getTime() + 60 * 24 * 60 * 60 * 1000);

    return date < today || date > futureDate;
  };

  const modifiers = {
    disabledDays: disabledDates,
    weekend: isWeekend
  };
  const modifiersStyles = {
    disabledDays: { color: 'red' },
    weekend: { color: 'red' }
  };
  const disabledAllDays = [disabledDates, isWeekend];

  let scheduleConfirm = (
    <div>
      <p className="text-center lg:text-left mt-6 text-lg font-semibold mb-3">
        {footer}
      </p>
      {schedules?.map((schedule, index) => (
        <div
          key={index}
          className="mx-6 lg:mx-1 lg:mr-3 border-[1px] border-blue-400 rounded my-3 "
        >
          <li
            onClick={(e) => {
              setTakenSchedule(e.target.innerText);
            }}
            className="p-3 text-center text-blue-400 text-lg font-bold list-none cursor-pointer"
          >
            {schedule}
          </li>
        </div>
      ))}
    </div>
  );

  let calenderZone = (
    <div>
      <h1 className="text-xl font-bold px-20 mt-8 text-blue-600">
        Select a Date
      </h1>
      <div className="w-full">
        <div>
          <DayPicker
            className="px-2 lg:px-16 py-3 -z-10"
            styles={{
              caption: { color: 'blue' }
            }}
            mode="single"
            selectedDays={selected}
            onDayClick={setSelected}
            disabled={disabledAllDays}
            modifiers={modifiers}
            modifiersStyles={modifiersStyles}
            footer={footer}
          />
          <div className="px-2 lg:px-8">
            <Timezone />
          </div>
        </div>
      </div>
    </div>
  );

  if (selected) {
    calenderZone = (
      <div>
        <h1 className="text-xl text-center text-blue-600 lg:text-end font-bold mt-8 mx-8 mb-1 lg:mb-3">
          Select a Time
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="hidden lg:block col-span-2">
            <DayPicker
              className="px-2 py-3 -z-10"
              styles={{
                caption: { color: 'blue' }
              }}
              mode="single"
              selectedDays={selected}
              onDayClick={setSelected}
              disabled={disabledAllDays}
              modifiers={modifiers}
              modifiersStyles={modifiersStyles}
              footer={footer}
            />
            <div>
              <Timezone />
            </div>
          </div>
          <div>
            <div className="lg:h-[28rem] lg:overflow-auto">
              {scheduleConfirm}
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (takenSchedule !== '') {
    calenderZone = (
      <div>
        <ScheduleEventForm />
      </div>
    );
  }
  return <div className="border-[1px] border-b-0 rounded">{calenderZone}</div>;
}
