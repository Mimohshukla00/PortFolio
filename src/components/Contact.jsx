import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="relative flex items-top justify-center min-h-screen bg-teal sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden rounded-lg shadow-lg bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Contact Information Section */}
            <div className="p-6 bg-customDark sm:rounded-lg">
              <h1 className="text-4xl font-bold text-white tracking-tight">
                Get in Touch
              </h1>
              <p className="text-lg font-medium text-white mt-2">
                Fill in the form to start a conversation
              </p>

              {/* Phone Number */}
              <div className="flex items-center mt-4 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-white">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="ml-4 text-md font-semibold">+91 7233091999</div>
              </div>

              {/* Email */}
              <div className="flex items-center mt-2 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mimohshukla0001@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 text-md tracking-wide font-semibold w-40">
                  mimohshukla0001@gmail.com
                </a>
              </div>
            </div>

            {/* Right Contact Form Section */}
            <form className="p-6 flex flex-col justify-center bg-white sm:rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Contact Form
              </h2>
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-gray-100 border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  required
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-gray-100 border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  required
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="tel" className="hidden">
                  Number
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Telephone Number"
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-gray-100 border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="md:w-32 bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg mt-4 transition ease-in-out duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
