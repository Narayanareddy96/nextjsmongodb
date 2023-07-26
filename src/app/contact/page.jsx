import Image from 'next/image';
import React from 'react';
import Contactus from 'public/assets/contactus.svg';

const Contact = () => {
  return (
    <div className="flex flex-col">
      <div className="h-10 bg-cover bg-center">Let`s keep in touch</div>

      <div className="flex">
        <div className="flex-1 p-4">
          <Image src={Contactus} alt="Logo" />
        </div>
        <div className="flex-1 p-4">
          <form className="flex flex-col gap-4">
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-4">
              <textarea
                id="description"
                name="description"
                rows="4"
                className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-fill px-4 py-2 border bg-white text-blue-600 font-semibold rounded hover:bg-blue-100"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
