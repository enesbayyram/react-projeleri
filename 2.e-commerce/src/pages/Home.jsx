import React from "react";
import SliderComp from "../components/home/SliderComp";
import Sorting from "../components/home/Sorting";
import Category from "../components/home/Category";
import Products from "../components/home/Products";
import { useState } from "react";

function Home() {
  const [sorting, setSorting] = useState("");
  const [category, setCategory] = useState("");
  return (
    <div>
      <SliderComp />
      <Sorting setSorting={setSorting} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Category setCategory={setCategory} />
          <Products category={category} sorting={sorting} />
        </div>
      </div>
    </div>
  );
}

export default Home;
