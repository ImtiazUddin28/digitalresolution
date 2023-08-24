import httpApi from '@/pages/api/http.api';
import { useContext, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ScheduleContext } from '../context/ScheduleContext';

const ScheduleEventForm = () => {
  const { selectedTimezone, selected, takenSchedule } =
    useContext(ScheduleContext);
  const [number, setNumber] = useState();

  const handlerOnScheduleEventSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phoneNumber = '+' + number;
    const contactMode = form.contactMode.value;

    const schedule = {
      full_name: name,
      email: email,
      phone_no: phoneNumber,
      contact_mode: contactMode,
      time_zone: selectedTimezone,
      date: selected,
      time: takenSchedule
    };
    try {
      const { data } = await httpApi.post('/public/schedule-call', schedule);
      toast.success(data?.message);
      form.reset();
      setNumber('');
    } catch (error) {
      toast.success(error?.response?.data?.message);
    }

    // fetch( process.env.'public/schedule-call', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(schedule)
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.acknowledged) {
    //       alert('Your schedule recorded successfully');
    //     }
    //   })
    //   .catch((er) => console.error(er));

    // form.reset();
    // setNumber('');

    // toast.success('Form submitted successfully!');
  };

  return (
    <>
      <div className="schedule-event-form p-8">
        <h1 className="text-xl md:text-2x font-semibold mb-5 text-blue-600">
          Enter Details
        </h1>

        <form onSubmit={(e) => handlerOnScheduleEventSubmit(e)}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Name *
            </label>
            <input
              type="text"
              name="name"
              className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[0.2rem] block w-full p-2.5 "
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email *
            </label>
            <input
              type="email"
              name="email"
              className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[0.2rem] block w-full p-2.5"
              required
            />
          </div>

          <div className="mb-6 bg-white">
            <label
              htmlFor="phonenumber"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone Number *
            </label>

            <PhoneInput
              name="phoneNumber"
              country={'bd'}
              enableAreaCodes={true}
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: true
              }}
              placeholder={''}
              value={number}
              onChange={setNumber}
              inputStyle={{
                background: 'white',
                width: '100%',
                height: '2.6rem'
              }}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Preferred Contact Mode *
            </label>
            <select
              className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[0.2rem]  block w-full p-2.5"
              name="contactMode"
            >
              <option value="Zoom Conference Call">Zoom Conference Call</option>
              <option value="Google Meet Conference Call">
                Google Meet Conference Call
              </option>
              <option value="Phone Call">Phone Call</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-[#e1520a] rounded-[35px] py-[13px] px-[31px] text-[16px] font-semibold text-white"
          >
            Schedule Event
          </button>
        </form>
      </div>
    </>
  );
};

export default ScheduleEventForm;
