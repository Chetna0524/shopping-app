import React from "react";
import Navbar from "./Navbar";
import UserCart from "./UserCart";

import { Link } from "react-router-dom";

import { FaShoppingBasket } from "react-icons/fa";

import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="topbar-sec">
					<div className="logo">
						<Link to="/">
							<FaShoppingBasket />
							<p>
								Shopping<span>Cart</span>
							</p>
						</Link>
					</div>
				</div>
				<div className="navbar-search-sec">
					<Navbar />
					<div className="search-bar">
						<div className="search-input-grp">
							<input
								type="text"
								className="form-control"
								placeholder="Search.."
							/>
							<span>
								<AiOutlineSearch />
							</span>
						</div>
					</div>
					<UserCart />
				</div>
			</div>
		</header>
	);
};

export default Header;
