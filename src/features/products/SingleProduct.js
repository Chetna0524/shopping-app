import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "./productsSlice";
import SingleProductItem from "./SingleProductItem";

const SingleProduct = () => {
  const { productId } = useParams();
  const { data, isLoading, isSuccess, isError, error } =
    useGetSingleProductQuery(productId);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = <SingleProductItem product={data} />;
    console.log(data);
  } else if (isError) {
    console.log(error);
  }

  return (
    <>
      <div className="single-product-sec p-4 mt-5">
        <div className="row">{content}</div>
      </div>
    </>
  );
};

export default SingleProduct;
