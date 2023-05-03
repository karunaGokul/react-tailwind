import { useFormik } from "formik";
import * as Yup from "yup";

import TextBox from "./TextBox";

const Form2 = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),

    password: Yup.string().required("Password is required"),
  });

  const onSubmit = () => {
    console.log("submited");
    console.log('username',formik.values.username)
    console.log('password',formik.values.password)
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextBox
          type="text"
          label="Username"
          name="username"
          appearance="fill"
          placeholder="Enter username"
          formikEvent={formik}
        />
        
        <TextBox
          type="password"
          label="Password"
          name="password"
          appearance="outline"
          placeholder="Enter password"
          formikEvent={formik}
        />
       
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form2;
