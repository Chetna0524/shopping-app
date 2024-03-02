import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Layout from "./components/Layout";
import Login from "./features/users/Login";
import Register from "./features/users/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import SingleCategory from "./features/products/SingleCategory";
import SingleProduct from "./features/products/SingleProduct";
import Cart from "./features/cart/Cart";
import Successful from "./components/Successful";
import Cancel from "./components/Cancel";
import ForgotPassword from "./features/users/ForgotPassword";

function App() {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/" element={<Home />} />
					<Route element={<ProtectedRoute />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/successful" element={<Successful />} />
					<Route path="/cancel" element={<Cancel />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="products">
						<Route path="category/:category" element={<SingleCategory />} />
						<Route path=":productId" element={<SingleProduct />} />
					</Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;
