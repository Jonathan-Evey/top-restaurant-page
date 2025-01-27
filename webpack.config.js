const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		index: "./src/index.js",
		render: "./src/render.js",
		clickevents: "./src/clickevents.js",
	},
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	optimization: {
		runtimeChunk: "single",
	},
};
