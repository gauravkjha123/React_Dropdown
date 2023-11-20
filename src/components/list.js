import { Item } from "./item";

export const List = ({ menu, setSelectedItem, setShowList, showList }) => {
  return (
    <div
      className="list-item-container"
      style={{ visibility: showList ? "visible" : "hidden" }}
    >
      {menu?.map((value, index) => (
        <Item
          key={index}
          name={value}
          setSelectedItem={setSelectedItem}
          setShowList={setShowList}
        />
      ))}
    </div>
  );
};
