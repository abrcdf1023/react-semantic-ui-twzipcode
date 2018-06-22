'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: [
      'babel-polyfill',
      './src/entry.jsx',
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [{
        from: /.*/,
        to: path.posix.join('/', 'index.html')
      }],
    },
    hot: true,
    contentBase: false,
    compress: true,
    host: 'localhost',
    port: 7082,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    publicPath: '/',
    watchOptions: {
      poll: false,
    }
  },
	output: {
		filename: '[name].js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'react-simple-address': path.resolve(__dirname, '../dist/index.js'),
		}
	},
	module: {
		rules: [{
			test: /(\.js$|\.jsx$)/,
			exclude: /node_modules/,
			loader: 'babel-loader',
		}, {
			test: /\.scss$/,
			use: [
			'style-loader',
			{
				loader: 'css-loader',
				options: {
					importLoaders: 1,
					localIdentName: '[path][name]__[local]--[hash:base64:5]',
					modules: true,
					sourceMap: true,
				},
			},{
				loader: 'sass-loader',
				options: {
					sourceMap: true,
				},
			}],
		}, {
			test: /\.css$/,
			use: [
			'style-loader',
			{
				loader: 'css-loader',
				options: {
					importLoaders: 1,
					localIdentName: '[path][name]__[local]--[hash:base64:5]',
				},
			}]
		}, {
			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				name: path.posix.join('static', 'images/[name].[hash:7].[ext]'),
				limit: 10000,
			},
		}, {
			test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				limit: 10000,
				name: path.posix.join('static', 'media/[name].[hash:7].[ext]'),
			}
		}, {
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				name: path.posix.join('static', 'fonts/[name].[hash:7].[ext]'),
				limit: 10000,
			},
		}],
	},
	node: {
		// prevent webpack from injecting mocks to Node native modules
		// that does not make sense for the client
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'template/index.html',
      inject: true
		}),
		new CopyWebpackPlugin([{
      from: path.resolve(__dirname, 'static'),
      to: 'static',
      ignore: ['.*']
    }])
  ],
}
