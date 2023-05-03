import { useField } from "formik";

const SelectBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log("field", field);
  console.log("meta", meta);
  return (
    <>
      <div>
        <label>{label} </label>
        <select
          className={
            meta.error && meta.touched
              ? "border-solid border-2 border-red-600  w-64 p-2"
              : "border-solid border-2 border-slate-600 bg-gray-100 w-64 p-2"
          }
          {...field}
          {...props}
        />
        {/* <option value="">--Please choose an option--</option>
          {props.options.map((opt) => {
            return <option value={opt.id} key={opt.id}>{opt.option}</option>;
          })} */}

        {meta.touched && meta.error && (
          <div className="text-red-600">{meta.error}</div>
        )}
      </div>
    </>
  );
};

export default SelectBox;
