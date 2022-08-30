import { useEffect, useMemo, useState } from "react";
import useFetch from "../hooks/useFetch";
import Item from "./Item";
import Sidebar from "./main/Sidebar";
import Image from "./Image";

const Main = ({ data }) => {
  return (
    <div className="min-h-screen w-full flex bg-bgmain">
      <Sidebar />
      <div className="w-full h-full bg-bgmain grid grid-cols-5 gap-6 p-4 m-4 ml-10 rounded-xl">
        {data.map((e, i) => {
          return (
            <Item
              id={e.id}
              title={e.title}
              price={e.price}
              description={e.description}
              category={e.category}
              image={<Image image={e.image} />}
              rating={e.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
