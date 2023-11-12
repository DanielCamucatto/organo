import './ListaSuspensa.css';

const ListaSuspensa = (props) => {

    const setSelectChange = (ev) => {
        props.setInputValue(ev.target.value)
    }

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select
                required={props.required}
                value={props.value}
                onChange={setSelectChange}
            >
                <option value=''></option>
                {props.items.map((item, index) => {
                    return <option key={index}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa