const Input = ({ id, onChange, value, label }) => {
  return (
    <>
      <div>
        <label htmlFor={id}>{label}</label>
        <input onChange={onChange} value={value} id={id}></input>
      </div>
    </>
  );
};
export default Input;
