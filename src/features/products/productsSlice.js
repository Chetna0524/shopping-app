import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const productsAdapter = createEntityAdapter();

const initialState = productsAdapter.getInitialState();

export const extendedProductsSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllProducts: builder.query({
			query: () => "/products",
			transformResponse: (response) => {
				const loadedProducts = response.products.map((product) => {
					if (!product.qty) product.qty = 1;
					return product;
				});
				console.log("response", response.products);
				return productsAdapter.setAll(initialState, loadedProducts);
			},

			providesTags: ["Products"],
		}),
		getSingleProduct: builder.query({
			query: (productId) => `/products/${productId}`,
		}),
		getAllCategories: builder.query({
			query: () => "/products/categories",
		}),
		getSingleCategory: builder.query({
			query: (category) => `/products/category/${category}`,
		}),
	}),
});

export const {
	useGetAllProductsQuery,
	useGetAllCategoriesQuery,
	useGetSingleCategoryQuery,
	useGetSingleProductQuery,
} = extendedProductsSlice;
