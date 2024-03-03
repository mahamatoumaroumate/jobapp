const FormSelect = ({
  list,
  labelName,
  defaultValue,
  name,
  handleChange,
  value,
}) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelName}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        className='form-select'
        onChange={handleChange}
      >
        {list.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          )
        })}
      </select>
    </div>
  )
}
export default FormSelect
