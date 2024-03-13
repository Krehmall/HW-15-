const Input = ({ id, onChange, value, label }) => {
  return (
    <>
      <div className="input-element">
        <label htmlFor={id}>{label}</label>
        <input onChange={onChange} value={value} id={id}></input>
      </div>
    </>
  );
};
export default Input;
