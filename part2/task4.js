/**
 
 2.4 - How about typos ?
 
 Note: you should finish the previous task to do this one.
 
 Your bot is now clever enough to recommend movies your didn't saw. But what happens if the user made a typo ? 
 Let's make your bot more resilient to typos. For example, a "commedy" should be understood as a "comedy". 
 Or an "horror movie" should be understood as "horror".
 
 For convenience, here are the genres found in the database :
	- adventure
	- fantasy
	- animation
	- drama
	- horror
	- action
	- comedy
	- history
	- western
	- thriller
	- crime
	- documentary
	- science fiction
	- mystery
	- music
	- romance
	- family
	- war
	- tv movie
 
 For more information, take a look at: http://docs.aws.amazon.com/lex/latest/dg/lambda-input-response-format.html
 
 */

exports.handler = (event, context, callback) => {
	const slots = event.currentIntent.slots;
	const user = usersDatabase[event.userId] || { "movies_saw": [] };
	callback(null);
};

// ---------------- DO NOT CHANGE LINES BELOW THERE ! ----------------
const moviesDatabase = require('./movies.json');
const usersDatabase = require('./users.json');
