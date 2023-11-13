import './CampoTexto.css'

const CampoTexto = ({type = 'text',label, placeholder, setInputValue, required, value }) => {

    const placeholderModificada = `${placeholder}...` 

    const handleChange = (ev) => {
       const inputValue = ev.target.value;
       setInputValue(inputValue);
    }

    return (
        <div className="campo-texto campo-color ">
            <label>
                {label}
            </label>
            <input 
                className='color'
                type={type}
                placeholder={placeholderModificada} 
                required={required}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

export default CampoTexto