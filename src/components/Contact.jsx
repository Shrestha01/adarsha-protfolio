import React from "react";
import { LuMapPinCheckInside } from "react-icons/lu";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("name"));
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-800 py-20">
      <div className="container flex flex-col sm:flex-row gap-4 mt-10 ">
        {/*  */}
        <div className="bg-green-100 border p-8 rounded-lg shadow-2xl shadow-black w-full sm:w-2/5 ">
          <div className="flex items-center gap-2">
            <LuMapPinCheckInside />

            <label>CONTACT US</label>
          </div>

          <hr />
          <div>
            <label className="font-bold">
              <span>Address:</span>
            </label>
          </div>
          <div className="h-40">
            <label type="text">Phone: 0420541869</label>
          </div>
        </div>

        <div className="bg-gray-100 border p-8 rounded-lg shadow-2xl shadow-black w-full sm:w-3/5">
          <h1>SEND US AN EMAIL</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name Field */}
            <div className="flex flex-row gap-9">
              <label>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                className="border"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-row gap-10">
              <label>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-row gap-4">
              <label>Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Enter your message"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                className="bg-gradient-to-t from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
