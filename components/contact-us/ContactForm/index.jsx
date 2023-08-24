import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';

import InputField from '../InputField';
import RangeSlider from '../RangeSlider';

import submitForm from '@/pages/api/contact-us.api';

export default function ContactForm() {
  const [whatsapp, setWhatsapp] = useState(false);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [facebookLink, setFacebookLink] = useState('');
  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [budget, setBudget] = useState(0);

  async function onSubmitHandler(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append('full_name', fullName);
    formData.append('email', email);
    formData.append('contact_no', contactNumber);
    formData.append('facebook_link', facebookLink);
    attachment && formData.append('attached_file', attachment);
    formData.append('message', message);
    formData.append('budget', budget);

    try {
      const data = await submitForm(formData);

      if (data.success) {
        toast('form submitted successfully');
        setFullName('');
        setEmail('');
        setContactNumber('');
        setFacebookLink('');
        setAttachment('');
        setMessage('');
        setBudget('');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }

  return (
    <section className="py-[5.625rem]">
      <div className="container">
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <div className="flex lg:flex-row flex-col justify-between gap-[50px] lg:gap-[100px] mb-[1.5rem]">
            <div className="w-full">
              <InputField
                label="Full Name"
                type="text"
                id="full-name"
                placeholder="ex. istie iftear"
                required={true}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="w-full">
              <InputField
                label="Email Address"
                type="text"
                id="email"
                placeholder="ex. yourname@email.com"
                required={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-between gap-[50px] lg:gap-[100px]  mb-[1.5rem]">
            <div className="w-full">
              <InputField
                label="Your Contact No"
                type="tel"
                id="contact-number"
                placeholder="ex. +123 1455 2365 "
                required={true}
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              >
                <label className="relative inline-flex items-center gap-[.5rem] cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    checked={whatsapp}
                    onChange={() => setWhatsapp((ps) => !ps)}
                  />
                  <div className="w-11 h-6 bg-[rgba(245,247,248,1)] rounded-full peer  dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="">Whatsapp</span>
                </label>
              </InputField>
            </div>
            <div className="w-full">
              <InputField
                label="Facebook Profile Link"
                type="url"
                id="facebook-link"
                placeholder="ex. facebook.com/istieiftear/"
                value={facebookLink}
                onChange={(e) => setFacebookLink(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full mb-[3.4375rem]">
            <label
              htmlFor="messages"
              className="block text-[1.5rem] font-bold text-black mb-[2rem]"
            >
              Messages
            </label>
            <textarea
              name="messages"
              id="messages"
              placeholder="Type  your mesaage................."
              className="w-full bg-[rgba(245,247,248,1)] p-[1.5rem] h-[200px] focus:outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="inline-flex lg:flex-row flex-col lg:items-center gap-[16px] mb-[2.5rem]">
            <label
              htmlFor="files"
              className="flex items-center gap-[16px] bg-[#F5F7F8] border border-[rgba(0,87,255,1)] rounded-[.5rem] p-[.375rem]"
            >
              <div className="bg-[#e1520a] text-white font-bold px-[1rem] py-[.75rem] rounded-[.25rem]">
                Choose File
              </div>
              <div className="text-[#5D647F]">
                {attachment ? 'File Selected' : 'No File Selected'}
              </div>
            </label>
            <input
              type="file"
              name="files"
              id="files"
              onChange={(e) => setAttachment(e.target.files[0])}
              hidden
            />
            <div>(Max Size 20MB)</div>
          </div>
          <RangeSlider
            availableValue={50}
            filledValue={50}
            budget={budget}
            setBudget={setBudget}
          />
          <button
            type="submit"
            className="font-bold bg-[#e1520a] text-white px-[1.5rem] py-[.75rem] rounded-full mt-[3.4375rem]"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}
