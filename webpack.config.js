const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname,'public')
	},
	devServer: {
		port: 4444
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/favicon.ico'),
					to: path.resolve(__dirname, 'public')
				},
				{
					from: path.resolve(__dirname, 'src/data.json'),
					to: path.resolve(__dirname, 'public')
				}
			]
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.sass$/,
				use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
			},
			{
				test: /\.(png|jpg|jpeg|svg)$/,
				use: ['file-loader']
			},
			{
				test: /\.(otf|ttf|woff|woff2|eot)$/,
				use: ['file-loader']
			},
			{
				test: /\.(js|jsx)$/,
				loader: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react'
						]
					}
				}
			}
		]
	}
}