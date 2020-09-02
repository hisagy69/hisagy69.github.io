
	'use strict';
	import "@babel/polyfill";
	import 'nodelist-foreach-polyfill';
	import elementClosest from 'element-closest';
	elementClosest(window);
	import './modules/appendPolyfill';
	import 'formdata-polyfill';
	import 'es6-promise';
	import 'fetch-polyfill';
	import 'raf';

	import calculate from './modules/calculate';
	import commandShow from './modules/commandShow';
	import countTimer from './modules/countTimer';
	import scrollWindow from './modules/scrollWindow';
	import sendForm from './modules/sendForm';
	import slider from './modules/slider';
	import tabs from './modules/tabs';
	import toggleMenu from './modules/toggleMenu';
	import togglePopup from './modules/togglePopup';
	import Validator from './modules/validator.js';

	countTimer('01 july 2021');

	//valid
	const valid = new Validator({
		selector: '#form1',
		method: {
			'name': [
				['notEmpty'],
				['pattern', 'name']
			],
			'phone': [
				['notEmpty'],
				['pattern', 'phone']
			],
			'email': [
				['notEmpty'],
				['pattern', 'email']
			]
		}
	});
	const valid1 = new Validator({
		selector: '#form2',
		method: {
			'phone': [
				['notEmpty'],
				['pattern', 'phone']
			],
			'email': [
				['notEmpty'],
				['pattern', 'email']
			],
			'name': [
				['notEmpty'],
				['pattern', 'name']
			],
			'message': [
				['notEmpty'],
				['pattern', 'message']
			]
		}
	});
	const valid2 = new Validator({
		selector: '#form3',
		method: {
			'phone': [
				['notEmpty'],
				['pattern', 'phone']
			],
			'email': [
				['notEmpty'],
				['pattern', 'email']
			],
			'name': [
				['notEmpty'],
				['pattern', 'name']
			],
			'message': [
				['notEmpty'],
				['pattern', 'message']
			]
		}
	});
	valid.init();
	valid1.init();
	valid2.init();
	sendForm('form1');
	sendForm('form2');
	sendForm('form3');
	toggleMenu();
	scrollWindow();
	togglePopup();
	tabs();
	slider();
	commandShow();
	calculate(100);