export const Item = ({ name, setSelectedItem, setShowList }) => {
  const selectItem = (value) => {
    setSelectedItem(value);
    setShowList(false);
  };
  return (
    <div
      className="list-item"
      onClick={(e) => {
        e.stopPropagation();
        selectItem(name);
      }}
    >
      <p>{name}</p>
    </div>
  );
};
