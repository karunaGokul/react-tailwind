import { Formik, useFormik } from "formik";
import * as Yup from "yup";

import CheckBox from "./CheckBox";
import RadioGroup from "./RadioGroup";
import SelectBox from "./SelectBox";
import TextInput from "./TextInput";
import { basicSchema } from "../Schemas";

const Form = () => {
 

  const radioOptions = ["Certificate1", "Certificate2", "Certificate3"];

  const checkBoxOptions = ["HTML", "Css", "Vue"];

  /* const onSubmit = () => {
    console.log("submited");
  };

  const initialValues = {
    name: "",
  };

  const validationSchema = Yup.object({
    Username: Yup.string().required("Username is required"),
    Age: Yup.number().required("Age is required"),
    Email: Yup.string()
      .required("Email is required")
      .email("Please enter valid email"),
    Password: Yup.string().required("Password is required"),
  });

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  }); */

  const onSubmit = () => {
    console.log("submited");
  };
  return (
    //  <div className="mt-3">
    //   <form onSubmit={handleSubmit}>
    //     <TextInput
    //       appearance="fill"
    //       type="text"
    //       label="inline"
    //       name="Username"
    //       placeholder="Enter username"
    //       formikEvent={formik}
    //       formik_change={handleChange}
    //       formik_blur={handleBlur}
    //       formik_values={values.name}
    //     />

    //     <TextInput
    //       appearance="outline"
    //       type="number"
    //       label="outline"
    //       name="Age"
    //       placeholder="Enter age"
    //     />

    //     <TextInput
    //       appearance="outline"
    //       type="email"
    //       label="outline"
    //       name="Email"
    //       readOnly={true}
    //       placeholder="Enter email"
    //       minLength="4"
    //       maxLength="10"
    //     />

    //     <TextInput
    //       appearance="fill"
    //       type="password"
    //       label="outline"
    //       name="Password"
    //       placeholder="Enter password"
    //     />

    //     <SelectBox label="Select an option" options={options} />

    //     <RadioGroup
    //       name="Certificate"
    //       type="radio"
    //       radioOptions={radioOptions}
    //     />

    //     <CheckBox
    //       type="checkbox"
    //       name="Courses"
    //       checkBoxOptions={checkBoxOptions}
    //     />

    //     <button
    //       className="border-solid border-2 bg-blue-400 text-white rounded p-2"
    //       type="submit"
    //     >
    //       Submit
    //     </button>
    //   </form>
    // </div>
    <div className="mt-3">
      <Formik
        initialValues={{
          username: "",
          age: 0,
          password: "",
          email: "",
          role: "",
          certificate: "",
          courses: "",
        }}
        validationSchema={basicSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
          <form>
            <TextInput
              appearance="fill"
              type="text"
              label="Username"
              name="username"
              placeholder="Enter username"
            />

            <TextInput
              appearance="outline"
              type="number"
              label="Age"
              name="age"
              placeholder="Enter age"
            />

            <TextInput
              appearance="outline"
              type="email"
              label="Email"
              name="email"
              readOnly={true}
              placeholder="Enter email"
              minLength="4"
              maxLength="10"
            />

            <TextInput
              appearance="fill"
              type="password"
              label="Password"
              name="password"
              placeholder="Enter password"
            />

            <SelectBox label="Select a role" name="role" placeholder="Please select a job">
              <option value="">Please select a job type</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
              <option value="other">Other</option>
            </SelectBox>

            <RadioGroup
              name="certificate"
              type="radio"
              radioOptions={radioOptions}
            />

            <CheckBox
              type="checkbox"
              name="courses"
              checkBoxOptions={checkBoxOptions}
            />

            <button
              className="border-solid border-2 bg-blue-400 text-white rounded p-2"
              type="submit"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
