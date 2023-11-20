import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { menu } from "../data";
import { List } from "./list";

export const DropDown = () => {
  const [showList, setShowList] = useState(false);
  const [selectedItem, setSelectedItem] = useState(undefined);
  return (
    <div className="dropdown-container">
      <h3>Should you use a dropdown ?</h3>
      <div
        className="selectmenu-container"
        onMouseOver={(e) => {
          e.stopPropagation();
          setShowList(true);
        }}
      >
        <p>{selectedItem ? selectedItem : "Select"}</p>
        <IoIosArrowDown />
      </div>
      <List
        menu={menu}
        showList={showList}
        setSelectedItem={setSelectedItem}
        setShowList={setShowList}
      />
    </div>
  );
};
