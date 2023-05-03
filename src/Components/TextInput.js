import { useField } from "formik";
import { useEffect, useState } from "react";

const TextInput = ({ label, ...props }) => {
  /* const [textInput, setTextInput] = useState("");

  const textInputChangeHandler = (event) => {
    setTextInput(event.target.value);
  };
  useEffect(() => {
    // console.log(textInput);
  }, [textInput]); */

  const [field, meta] = useField(props);
  console.log("field", field);
  console.log("meta", meta);

  return (
    <>
      <div className="mb-3">
        <label>{label} </label>

        {/* <input
          
          type={props.type}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          minLength={props.minLength}
          maxLength={props.maxLength}
          onChange={props.formik_change}
          onBlur={props.formik_blur}
          values={props.formik_values}
         
          className={
            props.appearance === "fill"
              ? "border-b-2 border-slate-600 bg-gray-100 w-64 p-2"
              : "border-solid border-2 border-slate-600 bg-gray-100 w-64 p-2"
          }
        ></input> */}

        <input
          {...props}
          {...field}
          // className={
          //   props.appearance === "fill"
          //     ? "border-b-2 border-slate-600 bg-gray-100 w-64 p-2"
          //     : "border-solid border-2 border-slate-600 bg-gray-100 w-64 p-2"
          // }
          className={
            meta.error && meta.touched
              ? "border-solid border-2 border-red-600  w-64 p-2"
              : "border-solid border-2 border-slate-600 bg-gray-100 w-64 p-2"
          }
        />
        { meta.touched && meta.error && <div className="text-red-600">{meta.error}</div>
          }
      </div>
    </>
  );
};

export default TextInput;
