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
		}])
	(function (err, data) {
		const siteChoices = data.map(i => i.title);
		const question = {
	 		type: 'list',
	 		name: 'website',
	 		message: 'Pick a website',
	 		choices: siteChoices
	 		// when: (answer) => data.filter( i => answer === i.title)
	 	}

		inquirer.prompt(question)
			.then(function (answer) {
		 		const website = data.filter(i => i.title === answer.website)[0];
		 		console.log(`Opening "${website.title}"...`);
		 		opener(website.url);
		 	});
	});