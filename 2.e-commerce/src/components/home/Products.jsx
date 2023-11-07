import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getProductsByCategoryName,
} from "../../redux/productSlice";
import ProductItem from "./ProductItem";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import Loading from "../Loading";

function Products({ category, sorting }) {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((store) => store.productSlice);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (category) {
      dispatch(getProductsByCategoryName(category));
    } else {
      dispatch(getProducts());
    }
  }, [category]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "10px",
          marginTop: "20px",
        }}
      >
        {loading ? (
          <Loading />
        ) : (
          currentItems
            ?.sort((a, b) =>
              sorting == "INCREMENT"
                ? a.price - b.price
                : sorting == "DECREMENT"
                ? b.price - a.price
                : ""
            )
            ?.map((product, index) => (
              <ProductItem key={index} product={product} />
            ))
        )}
      </div>

      <div>
        <ReactPaginate
          className="paginate"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default Products;
