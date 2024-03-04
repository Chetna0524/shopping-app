import express from "express";
import { StaticRouter } from "react-router-dom/server";
import ReactDOMServer from "react-dom/server";

import { Provider } from "react-redux";

import App from "../src/App";
import fs from "fs";

import store from "../src/app/store";

const app = express();
app.use("/static", express.static(__dirname));
const PORT = process.env.PORT || 3001;

/**
 * Produces the initial non-interactive HTML output of React
 * components. The hydrateRoot method is called on the client
 * to make this HTML interactive.
 * @param {string} location
 * @return {Promise<string>}
 */

const createReactApp = async (location) => {
	/* await store.dispatch(setCredentials({ user: null, token: null })); */

	const preloadedState = store.getState();
	const reactApp = ReactDOMServer.renderToString(
		<Provider store={store}>
			<StaticRouter location={location} context={{}}>
				<App />
			</StaticRouter>
		</Provider>
	);
	const html = await fs.promises.readFile(`${__dirname}/index.html`, "utf-8");
	const reactHtml = html.replace(
		'<div id="root"></div>',
		`<div id="root">${reactApp}</div>
		<script>
		window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
			/</g,
			"\u003c"
		)}
	  </script>
	 
		`
	);
	return reactHtml;
};

app.get("*", async (req, res) => {
	const indexHtml = await createReactApp(req.url);
	res.status(200).send(indexHtml);
});

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
