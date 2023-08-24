import applyJob from '@/pages/api/job-apply.api';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CareerForm = () => {
  const [attachment, setAttachment] = useState(null);
  const [number, setNumber] = useState();

  const handlerOnScheduleEventSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phoneNumber = '+' + number;
    const file = attachment;

    const careerSubmit = {
      full_name: name,
      email: email,
      phone_no: phoneNumber,
      attached_file: file
    };
    const formData = new FormData();
    Object.keys(careerSubmit).forEach((key) => {
      formData.append(key, careerSubmit[key]);
    });
    try {
      const resp = await applyJob(formData);
      toast.success('Your job application submitted successfully!');
      form.reset();
      setNumber('');
    } catch (error) {
      toast.success('Failed to submit you application. Please try later!');
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="max-w-[800px] mx-auto schedule-event-form p-8 mb-4">
        <h1 className="text-xl md:text-2x font-semibold mb-5 text-blue-600">
          Enter Your Details for Career
        </h1>

        <form onSubmit={(e) => handlerOnScheduleEventSubmit(e)}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-900 ">
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
              className="block mb-2 text-sm font-bold text-gray-900"
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
              className="block mb-2 text-sm font-bold text-gray-900"
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

          <div className="items-center gap-[16px] mb-[2.5rem] ">
            <label
              htmlFor="files"
              className="block mb-2 text-sm font-bold text-gray-900"
            >
              Updated CV or Resume *
            </label>
            <input
              type="file"
              name="files"
              id="files"
              className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[0.2rem] block w-full p-2.5"
              required
              onChange={(e) => setAttachment(e.target.files[0])}
            />
          </div>

          <button
            type="submit"
            className="bg-[#e1520a] rounded-[35px] py-[13px] px-[31px] text-[16px] font-semibold text-white block"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CareerForm;
