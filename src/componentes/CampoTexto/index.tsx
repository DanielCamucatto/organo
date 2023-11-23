import './CampoTexto.css'

type CampoTextoProps ={
    label: string
    placeholder: string
    required: boolean
    value: string
    type: string
    setInputValue: (value: string) => void
}


const CampoTexto = ({type = 'text',label, placeholder, setInputValue, required, value }: CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
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