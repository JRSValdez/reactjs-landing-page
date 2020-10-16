import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import ContactUI from "./ContactUI";
import axios from "axios";

const Contact = (props) => {
  const api_url = "https://api.elaniin.dev/api/contact";

  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(initialState);
  const [redirect, setRedirect] = useState(false);

  const handleFormChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(api_url, formValues)
        .then((response) => {
          setRedirect(() => true);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      console.error(err);
    }
  };

  return redirect ? (
    <Redirect
      to={{
        pathname: "/ContactThankYou",
        state: { success: "true" },
      }}
    />
  ) : (
    <ContactUI
      onChange={handleFormChange}
      onSubmit={handleFormSubmit}
      formValues={formValues}
    />
  );
};

export default Contact;
