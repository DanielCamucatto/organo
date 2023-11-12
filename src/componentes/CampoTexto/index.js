import './CampoTexto.css'

const CampoTexto = ({label, placeholder, setInputValue, required, value }) => {

    const placeholderModificada = `${placeholder}...` 

    const handleChange = (ev) => {
       const inputValue = ev.target.value;
       setInputValue(inputValue);
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input 
                placeholder={placeholderModificada} 
                required={required}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

export default CampoTexto