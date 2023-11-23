import './ListaSuspensa.css';

type ListaSuspensaProps = {
    label: string
    value: string
    required: boolean
    items: string[]
    setInputValue: (value: string) => string
}

const ListaSuspensa = ({label, value, required, items, setInputValue}: ListaSuspensaProps) => {

    const setSelectChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        setInputValue(ev.target.value)
    }

    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select
                required={required}
                value={value}
                onChange={setSelectChange}
            >
                <option value=''></option>
                {items.map((item, index) => {
                    return <option key={index}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa