import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be atleast 3 characters long")
    .required("Required"),
  email: yup.string().email("Please Enter a valid email").required("Required"),
  age: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a strong password" })
    .required("Required"),
  role: yup
    .string()
    .oneOf(["designer", "developer", "manager", "other"], "role is required")
    .required("Required"),
  certificate: yup
    .string()
    .oneOf(
      ["Certificate1", "Certificate2", "Certificate3"],
      "certificate type is required"
    )
    .required("Required"),
  courses: yup.string().oneOf(["HTML", "Css", "Vue"], "course is required"),
});
