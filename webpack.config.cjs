const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

/**
 * Load JS and JSX files through Babel
 */
const babelLoader = {
	rules: [
		{
			test: /.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader",
				options: {
					presets: [
						"@babel/preset-env",
						["@babel/preset-react", { runtime: "automatic" }],
					],
				},
			},
		},
		{
			test: /\.(css|sass|scss)$/,
			use: [
				{
					loader: "style-loader",
				},
				{
					loader: "css-loader",
				},
				{
					loader: "sass-loader",
				},
			],
		},
	],
};

const resolve = {
	extensions: [".js", ".jsx"],
};

const serverConfig = {
	target: "node",
	mode: "development",
	entry: "./server/server.js",
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "server.cjs",
	},
	module: babelLoader,
	/* plugins: [
		new webpack.EnvironmentPlugin({
			PORT: 10000,
		}),
	], */
	resolve,
};

const clientConfig = {
	target: "web",
	mode: "development",
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "/dist"),
		/*
		 * Appends /static to index.html when looking for client.js
		 * This is where Express is serving static files from
		 */
		publicPath: "/static",
		filename: "client.js",
	},
	module: babelLoader,
	plugins: [
		new htmlWebpackPlugin({
			template: `${__dirname}/public/index.html`,
		}),
	],
	resolve,
};

module.exports = [serverConfig, clientConfig];
