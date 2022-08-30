import React, { useMemo } from "react";
import Main from "./components/Main";
import Sidebar from "./components/main/Sidebar.jsx";
import useFetch from "./hooks/useFetch";
import Home from "./components/main/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  const fetchThings = useFetch("https://fakestoreapi.com/products?limit=20");
  const memoData = useMemo(() => {
    return fetchThings;
  }, [fetchThings]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home data={memoData} />} />
        <Route path="/list" element={<Main data={memoData} />} />
      </Routes>
    </>
  );
}

export default App;
