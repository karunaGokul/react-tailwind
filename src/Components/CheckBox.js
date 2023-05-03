const CheckBox = (props) => {
  return (
    <>
      {props.checkBoxOptions.map((checkBoxOption) => {
        return (
          <div key={checkBoxOption}>
            <input type={props.type} name={props.name}></input>
            <label> {checkBoxOption}</label>
          </div>
        );
      })}
    </>
  );
};

export default CheckBox;
