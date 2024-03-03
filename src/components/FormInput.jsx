const FormInput = ({
  type,
  name,
  labelName,
  handleChange,
  defaultValue,
  value,
}) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelName}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className='form-input'
      />
    </div>
  )
}
export default FormInput
