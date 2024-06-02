'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

import { postCreateContact } from '../../services/contact';

export default function ContactForm() {
  const router = useRouter();
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await postCreateContact(contactData);
    // eslint-disable-next-line no-alert
    window.alert('Your message has been sent!');
    router.back();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start gap-8">
      <div className="flex w-full flex-col gap-2">
        <b>Your name</b>
        <input
          type="text"
          value={contactData.name}
          name="name"
          onChange={handleChange}
          className="h-[45px] rounded-md border border-box p-3"
        />
      </div>
      <div className="flex w-full flex-col gap-2">
        <b>Your email</b>
        <input
          type="text"
          value={contactData.email}
          name="email"
          onChange={handleChange}
          className="h-[45px] rounded-md border border-box p-3"
        />
      </div>
      <div className="flex w-full flex-col gap-2">
        <b>Subject</b>
        <input
          type="text"
          value={contactData.subject}
          name="subject"
          onChange={handleChange}
          className="h-[45px] rounded-md border border-box p-3"
        />
      </div>
      <div className="flex w-full flex-col gap-2">
        <b>Your message</b>
        <textarea
          value={contactData.message}
          name="message"
          onChange={handleChange}
          className="h-[140px] resize-none rounded-md border border-box p-3"
        />
      </div>
      <button type="submit" className="rounded-md bg-[#FF6481] p-3 pl-4 pr-4 text-xl font-bold text-white">
        Submit
      </button>
    </form>
  );
}
