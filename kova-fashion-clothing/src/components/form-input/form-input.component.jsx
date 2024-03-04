import './form-input.styles.scss'
const FormInput = ({label, ...othedProps}) =>{

    return label && (
        <div className="group">
            <input className="form-input" {...othedProps}/>
            <label className={`${othedProps.value.length  ? 'shrink': ''} form-input-label`}>{label}</label>
        </div>
    )

}

export default FormInput;