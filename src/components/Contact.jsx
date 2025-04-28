import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CONTACT } from '../constants';
import { motion } from "motion/react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_56fnn6o', 'template_r8egeie', form.current, {
        publicKey: 'iSgbsjofvOmpk3XY3',
      })
      .then(
        () => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Failed to send message. Please try again later.');
          console.error('EmailJS error:', error.text);
        },
      );
  };

  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-10 text-center text-4xl'>
        Get In Touch
      </motion.h2>

      <div className='flex flex-col md:flex-row justify-between px-6 md:px-20'>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='flex-1 max-w-lg space-y-4'
        >
          <div>
            <label className='block text-sm font-semibold'>Name *</label>
            <input name="name" type="text" required className='w-full p-2 bg-neutral-800 border border-neutral-700 rounded-md text-white' />
          </div>

          <div>
            <label className='block text-sm font-semibold'>Email *</label>
            <input name="email" type="email" required className='w-full p-2 bg-neutral-800 border border-neutral-700 rounded-md text-white' />
          </div>

          <div>
            <label className='block text-sm font-semibold'>Subject</label>
            <input name="subject" type="text" className='w-full p-2 bg-neutral-800 border border-neutral-700 rounded-md text-white' />
          </div>

          <div>
            <label className='block text-sm font-semibold'>Message</label>
            <textarea name="message" required rows={5} className='w-full p-2 bg-neutral-800 border border-neutral-700 rounded-md text-white' />
          </div>

          <button type='submit' className='bg-white text-black px-4 py-2 rounded-md hover:bg-neutral-200'>
            Submit
          </button>
        </motion.form>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="mt-10 md:mt-0 md:ml-12 text-sm text-gray-300 max-w-xs">
          <p className="font-bold mb-2">Address and Phone</p>
          <p>{CONTACT.address}</p>
          <p>{CONTACT.email}</p>
          <p>{CONTACT.phoneNo}</p>
        </motion.div>
      </div>

      <div className="text-center text-sm text-neutral-600 mt-10">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
