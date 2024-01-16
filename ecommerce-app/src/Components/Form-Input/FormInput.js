import "./FormInput.css"
const FormInput = ({label,...otherprops})=>{
    return(
        <>
        <div className="formInput">
         {/* <label  className="label">{label}</label> */}
                <input placeholder={label}
                  {...otherprops}  className="inputform" />
                    </div>
        </>
    )
}
export default FormInput;