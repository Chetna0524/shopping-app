import React from "react";

import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";
import { FiShoppingCart } from "react-icons/fi";

import { addToCart } from "../cart/cartSlice";
import { useDispatch } from "react-redux";

const SingleCategoryItem = ({ product }) => {
	const dispatch = useDispatch();
	return (
		<>
			<div className="col-lg-3 col-md-3 col-sm-12 cat-item-box">
				<div className="cat-item-box-inn">
					<div className="cat-item-img">
						<img src={product.thumbnail} alt={product.title} />
					</div>
					<div className="cat-item-content">
						<h2 className="box-heading">{product.title}</h2>
						<p>{product.description.substring(0, 50)}...</p>
						<p className="cat-item-price">
							<BsCurrencyDollar />
							{product.price}
						</p>
						<Ratings value={product.rating} />
						<Link to={`/products/${product.id}`} className="btn-comm btn-black">
							View More
						</Link>
						<button
							type="submit"
							className="btn-comm mx-2"
							onClick={() => dispatch(addToCart(product))}
						>
							<FiShoppingCart />
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleCategoryItem;
