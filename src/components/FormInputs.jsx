export default function FormInputs({
  idName,
  labelTitle,
  inputType,
  change = "",
  value = "",
  required = true,
}) {
  return (
    <div className="formInput">
      <label htmlFor={idName}>{labelTitle}</label>
      <input
        type={inputType}
        id={idName}
        autoComplete="off"
        onChange={change}
        value={value}
        required={required}
      />
    </div>
  );
}
