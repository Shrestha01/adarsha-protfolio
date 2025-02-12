import React from "react";
import { Formik, useField } from "formik";

import { ContactFormSchema } from "../Formschema/ContactFormSchema";

const Contactt = () => {
  /*  Submit Form Schema */

  const FormInputField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <label>{label}</label>
        <input {...field} {...props} />
        {meta.error}
        <br />
      </div>
    );
  };

  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      onSubmit={(data) => console.log(data)}
      validationSchema={ContactFormSchema}
    >
      {({ handleChange, handleSubmit, errors, values }) => {
        return (
          <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-800">
            <div className="container flex flex-row gap-2 pt-10">
              <div className="bg-gray-100  p-8 rounded-lg shadow-2xl shadow-black w-full sm:w-2/5">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <FormInputField name="name" label="Name" type="text" />

                  <FormInputField name="email" label="Email" type="email" />

                  <button
                    type="submit"
                    className="bg-gradient-to-t from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default Contactt;
