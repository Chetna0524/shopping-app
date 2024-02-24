import React from "react";
import { useSelector } from "react-redux";
import PayButton from "./PayButton";

const Cart = () => {
	const { cart } = useSelector((state) => state.cart);

	console.log("cart", cart);

	const totalPrice = cart.reduce(
		(price, item) => price + item.qty * item.price,
		0
	);

	let content = cart.map((item) => {
		return (
			<li key={item.id}>
				<div className="row align-items-center">
					<div className="col-lg-3 col-sm-12">
						<img src={item.thumbnail} className="img-fluid" alt={item.title} />
					</div>
					<div className="col-lg-3 col-sm-12 text-left">
						<h6>{item.title}</h6>
					</div>
					<div className="col-lg-3 col-sm-12">
						<h6>{item.qty}</h6>
					</div>
					<div className="col-lg-3 col-sm-12 text-right">
						<h6>{item.price}</h6>
					</div>
				</div>
			</li>
		);
	});

	return (
		<>
			<div className="container text-center cart-sec mt-5">
				<h2 className="text-center mb-5">Cart</h2>
				<div className="row align-items-center border-thead">
					<div className="col-lg-3 col-sm-12">
						<h5>Product Image</h5>
					</div>
					<div className="col-lg-3 col-sm-12 text-left">
						<h5>Product Title</h5>
					</div>
					<div className="col-lg-3 col-sm-12">
						<h5>Qty</h5>
					</div>
					<div className="col-lg-3 col-sm-12">
						<h5>Price</h5>
					</div>
				</div>

				<ul>{content}</ul>
				<div className="row justify-content-end">
					<div className="col-lg-3 col-sm-12 text-right">
						<h6>Total Price</h6>
					</div>
					<div className="col-lg-2 col-sm-12 text-right">
						<h6>{totalPrice}</h6>
					</div>
				</div>
				<div className="row justify-content-end">
					<div className="col-lg-3 col-sm-12 text-right">
						<PayButton cartItems={cart} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
