import React from "react";

const Item = ({ id, title, price, description, category, image, rating }) => {
  return (
    <div className="w-full flex flex-col items-center justify-between bg-main text-white rounded-lg p-2">
      <div className="max-w-full max-h-32 overflow-hidden">{image}</div>
      <p>{title}</p>

      <div className="w-full flex px-4 justify-between items-center">
        <button className="bg-blue-600 rounded-lg px-2">Pinjam</button>
        <button className="bg-blue-600 rounded-lg px-2">Pinjam</button>
      </div>
    </div>
  );
};

export default Item;
