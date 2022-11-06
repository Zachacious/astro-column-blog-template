import { useState } from 'react';

const ContactForm = () => {
  const [replyto, setReplyto] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleReplytoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReplyto(event.target.value);
  };

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      replyto,
      subject,
      message,
    };
    console.log(data);
  };

  return (
    <div className="w-full">
      <div className="contact-form w-full flex justify-center">
        <h2 className="text-4xl">Send A Raven</h2>
      </div>
      <form onSubmit={handleSubmit} className="w-full ">
        <div className="f flex w-full  items-center  rounded-md bg-textdark p-2 px-4 text-xl dark:bg-primarydark drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)] my-3">
          <input
            type="email"
            id="replyto"
            name="replyto"
            value={replyto}
            placeholder="Your email"
            onChange={handleReplytoChange}
            className="w-full bg-transparent  text-primarydark placeholder:text-primarydark focus:outline-none dark:border-textdark dark:text-textdark dark:placeholder:text-textdark dark:focus:border-textdark"
          />
        </div>
        <div className="flex w-full items-center  rounded-md  bg-textdark p-2 px-4 text-xl dark:bg-primarydark drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)] my-3">
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            placeholder="Subject"
            onChange={handleSubjectChange}
            className="w-full bg-transparent  text-primarydark placeholder:text-primarydark focus:outline-none dark:border-textdark dark:text-textdark dark:placeholder:text-textdark dark:focus:border-textdark"
          />
        </div>
        <div className="flex w-full items-center  rounded-md  bg-textdark p-2 px-4 text-xl dark:bg-primarydark drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)] my-3">
          <textarea
            id="message"
            name="message"
            value={message}
            placeholder="Message"
            onChange={handleMessageChange}
            style={{ minHeight: '300px' }}
            className="w-full bg-transparent  text-primarydark placeholder:text-primarydark focus:outline-none dark:border-textdark dark:text-textdark dark:placeholder:text-textdark dark:focus:border-textdark"
          />
        </div>
        <div className="w-full flex justify-end my-3 ">
          <button
            className="flex items-center  rounded-md p-2 px-4 text-xl dark:bg-accent drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
