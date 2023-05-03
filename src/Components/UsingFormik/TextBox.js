import Errors from "./Errors";

const TextBox = ({
  formikEvent,
  label,
  name,
  placeholder,
  readOnly,
  type,
  minLength,
  maxLength,
  appearance,
}) => {
  console.log(formikEvent);
  return (
    <>
      <div className="mb-3">
        <label>{label} </label>

        <input
          type={type}
          name={name}
          placeholder={placeholder}
          readOnly={readOnly}
          minLength={minLength}
          maxLength={maxLength}
          className={
            appearance === "fill"
              ? "border-b-2 border-slate-600 bg-gray-100 w-64 p-2"
              : "border-solid border-2 border-slate-600 bg-gray-100 w-64 p-2"
          }
          onChange={formikEvent.handleChange}
          onBlur={formikEvent.handleBlur}
          value={formikEvent.values[name]}
        ></input>
        <Errors name={name} formikEvent={formikEvent} />
      </div>
    </>
  );
};

export default TextBox;
