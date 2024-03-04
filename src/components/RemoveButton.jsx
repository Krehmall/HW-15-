const RemoveButton = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} className="remove-button">
        Remove student
      </button>
    </>
  );
};

export default RemoveButton;
