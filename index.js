const inquirer = require('inquirer');
const opener = require('opener');
const xray = require('x-ray');

const x = xray();

console.log('Fetching articles');

x('http://medium.freecodecamp.com/', '.postArticle', [{
  title: 'h3',
  url: '.js-trackedPost > a@href' }])((err, data) => {
    const siteChoices = data.map(i => i.title);
    const question = {
      type: 'list',
      name: 'website',
      message: 'Pick a website',
      choices: siteChoices,
      pageSize: 10 };
    inquirer.prompt(question)
  .then((answer) => {
    const website = data.filter(i => i.title === answer.website)[0];
    console.log(`Opening "${website.title}"...`);
    opener(website.url);
  });
  });
