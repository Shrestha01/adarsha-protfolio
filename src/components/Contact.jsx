import React from "react";
import { LuMapPinCheckInside } from "react-icons/lu";
import { Formik } from "formik";
import { ContactFormSchema } from "../Formschema/ContactFormSchema";
import InputFieldComp from "../Contactus/InputFieldComp";
import { ToastContainer, toast } from "react-toast";

import {
  database as db,
  set,
  ref,
  onValue,
} from "../components/firebaseConfig/config";

const Contact = () => {
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

          {/* Contatus Form for Contactus Page */}

          <Formik
            initialValues={{ name: "", email: "", textbox: "" }}
            onSubmit={(data, { resetForm }) => {
              console.log(data.name);
              const userId = new Date().getTime();

              set(ref(db, "contactData/" + userId), data).then((err) => {
                if (!err) {
                  toast.success("Data Inserted");
                  resetForm();
                } else {
                  toast.error("Thank you for your Feedback");
                }
              });
            }}
            validationSchema={ContactFormSchema}
          >
            {({ handleChange, handleSubmit, values, errors }) => {
              return (
                <>
                  <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <InputFieldComp
                      type="text"
                      label="Name"
                      name="name"
                      placeholder="Enter your name"
                      className="rounded-xl sm:w-1/2 w-full h-8"
                    />

                    {/* Email Field */}

                    <InputFieldComp
                      type="email"
                      label="Email"
                      name="email"
                      className="rounded-xl sm:w-1/2 w-full h-8"
                      placeholder="Enter your email"
                    />

                    <InputFieldComp
                      label="Message"
                      name="textbox"
                      type="text"
                      className="rounded-xl sm:w-1/2 w-full h-20"
                      isTextarea
                      row="4"
                      cols="50"
                      placeholder="Enter your message"
                    />

                    {/* Submit Buton*/}

                    <button
                      className="bg-gradient-to-t from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                  <ToastContainer delay={2500} />
                </>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
