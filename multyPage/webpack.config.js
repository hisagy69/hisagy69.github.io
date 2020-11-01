const path = require('path');//отобразит абсолютный путь до файла
const HTMLWebpackPlugin = require('html-webpack-plugin');//плагин для работы с html
const {CleanWebpackPlugin} = require('clean-webpack-plugin');//плагин очищает старые билды, заменяет
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';//если сборка запущена для разработки

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;//если для продакшн, то добавляет хэш, чтобы браузер кешировал новые файлы
const cssLoaders = extra => {
	const loaders = [
		{
			loader: 'style-loader',//плагин добавляет возможность копировать css и подключать
		}, 
		{
			loader: 'css-loader',
		}
	]//css loader позволяет импортировать в js стили styleLoader добавляет в секцию head стили
	if (extra) {
		loaders.push(extra);
	}
	return loaders;
};

module.exports = {
	context: path.resolve(__dirname, './src'),//указывает абсолютный путь для корневой директории, после ее указания можно указывать папки и файлы хранящиеся в ней
	mode: 'development',// код не минимизируется
	entry: {//точка входа если несколько файлов, то пишется в объекте, название: директория до файла или если один, то просто директория
		main: './index.js'
	},
	output: {//точка выхода
		filename: filename('js'),//имя файла
		path: path.resolve(__dirname, './dist')//путь абсолютный, все складывается в папку дист
	},
	devServer: {
		port: 4200,//локальный сервер с автоматической перезагрузкой
		hot: isDev
	},
	plugins: [
		new HTMLWebpackPlugin({//скрипты подключаются автоматически
			template: './index.pug',// переносит файл из указанной дирректории
			filename: 'index.html',
		}),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({//плагин копирует необходимые файлы и папки
			patterns: [
				{
					from: path.resolve(__dirname, 'src/favicon.ico'),
					to: path.resolve(__dirname, 'dist')
				},
				{
					from: path.resolve(__dirname, 'src/img/'),
					to: path.resolve(__dirname, 'dist/img')
				},
				{
					from: path.resolve(__dirname, 'src/fonts'),
					to: path.resolve(__dirname, 'dist/fonts')
				}
			]
		}),
		new MiniCssExtractPlugin({
			filename: filename('css')
		})
	],
	module: {//loader позволяют работать вебпаку с другими файлами помимо js
		rules: [
			{
				test: /\.css$/,
				use: cssLoaders()
			},
			{
				test: /\.s[ac]ss$/,
				use: cssLoaders({loader: 'sass-loader'})
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				use: ['file-loader']//позволяеь работать с файлами помимо js
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				use: ['file-loader']
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.pug$/,
				use: [
					{
						loader: 'html-loader'
					},
					{
						loader: 'pug-loader',
						// options: {
						// 	pretty: isDev
						// }
					}
				]
			}
		]
	}
}