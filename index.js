'use strict';
var inquirer = require('inquirer');
var opener = require('opener');
var xray = require('x-ray');
var x = xray();

console.log('Fetching articles');

x('http://medium.freecodecamp.com/', 
		'.postArticle', 
		[{
			title: 'h3',
			url: '.js-trackedPost > a@href'
		}])((err, data) => console.log(data));