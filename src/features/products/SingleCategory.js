import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleCategoryQuery } from "./productsSlice";
import SingleCategoryItem from "./SingleCategoryItem";

const SingleCategory = () => {
	const { category } = useParams();
	const { data, isLoading, isError, isSuccess, error } =
		useGetSingleCategoryQuery(category);

	console.log(category);

	let content;
	if (isLoading) {
		content = <p>Loading...</p>;
	} else if (isSuccess) {
		content = data.products.map((product) => (
			<SingleCategoryItem key={product.id} product={product} />
		));
		console.log(data.products);
	} else if (isError) {
		console.log(error);
	}

	return (
		<>
			<div className="category-sec">
				<div className="container">
					<h2 className="section-heading text-center my-4">{category}</h2>
					<div className="row">{content}</div>
				</div>
			</div>
		</>
	);
};

export default SingleCategory;
