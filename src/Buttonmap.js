import React from "react";

const Buttonmap = ({ buttonArray, setSelect, selected }) => {
  return (
    <>
      {buttonArray?.map((item) => (
        <button
          className={item.selected === selected.name && "selected"}
          onClick={() => setSelect(item)}
        >
          {item.name}
        </button>
      ))}
    </>
  );
};

export default Buttonmap;
