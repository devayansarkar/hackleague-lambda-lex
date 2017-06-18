/**
 Use this file to test your code locally.
 */

//Change this line to choose the task
const task = require('./task2');

const input = {
	messageVersion: '1.0',
	invocationSource: 'FulfillmentCodeHook',
	userId: 'e55mu3tzxheh9pm451nnjxqyiogmi6i8',
	sessionAttributes: null,
	bot: {name: 'MovieAdvisor', alias: null, version: '$LATEST'},
	outputDialogMode: 'Text',
	currentIntent: {
		name: 'IWantToSeeAMovie',
		slots: {
			MovieKind: 'science fiction'
		},
		confirmationStatus: 'None'
	},
	inputTranscript: 'science fiction'
};

// DO NOT CHANGE THE CONTEXT
const context = {
	logGroupName: '/aws/lambda/MovieAdvisorLambda',
	logStreamName: '2017/05/24/[$LATEST]79ee955b12e14226ac3d1661d13aa37f',
	functionName: 'MovieAdvisorLambda',
	memoryLimitInMB: '128',
	functionVersion: '$LATEST',
	invokeid: 'e0fe69f0-406a-11e7-b08f-a381a6f0c24e',
	awsRequestId: 'e0fe69f0-406a-11e7-b08f-a381a6f0c24e',
	invokedFunctionArn: 'arn:aws:lambda:us-east-1:449331926642:function:MovieAdvisorLambda'
};

task.handler(input, context, function(error, data) {
	if (error) {
		throw error;
	}
	else {
		console.log('OUTPUT:');
		console.log(data);
	}
});
