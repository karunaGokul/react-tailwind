const RadioGroup = (props) => {
  return (
    <>
        {props.radioOptions.map((radioOption) => {
          return (
            <div key={radioOption}>
              <input type={props.type} name={props.name} ></input>
              <label> {radioOption}</label>
            </div>
          );
        })}
    </>
  );
};

export default RadioGroup;
