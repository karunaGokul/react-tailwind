const Errors = ({formikEvent,name}) => {
    return ( 
        <>
        {formikEvent.touched[name] && formikEvent.errors[name] ? (
          <div className="text-red-600">{formikEvent.errors[name]}</div>
        ) : null}
        </>
     );
}
 
export default Errors;