import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

function Category({ setCategory }) {
  const dispatch = useDispatch();

  const { categories } = useSelector((store) => store.categorySlice);

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <div
      style={{
        marginTop: "40px",
        padding: "30px",
        backgroundColor: "#fafbfc",
        maxHeight: "50vh",
        minWidth: "140px",
      }}
    >
      <div style={{ fontSize: "20px", fontWeight: "500" }}>Kategori</div>
      {categories?.map((category, index) => (
        <div
          className="categoriesMenu"
          onClick={() => setCategory(category)}
          key={index}
          style={{
            padding: "15px",
            margin: "2px",
          }}
        >
          {category}
        </div>
      ))}
    </div>
  );
}

export default Category;
