import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

    const handleChange = (ev) => {
      props.setInputValue(ev.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input 
                placeholder={placeholderModificada} 
                required={props.required}
                value={props.value}
                onChange={handleChange}
            />
        </div>
    )
}

export default CampoTexto