import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../redux/productSlice";
import Loading from "../Loading";
import ProductDetailItem from "./ProductDetailItem";

function ProductDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const { productDetail, loading } = useSelector((store) => store.productSlice);

  useEffect(() => {
    dispatch(getProductById(productId));
  }, [productId]);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <ProductDetailItem productDetail={productDetail} />
      )}
    </div>
  );
}

export default ProductDetail;
