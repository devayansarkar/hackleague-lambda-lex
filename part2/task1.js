
	'use strict';     
    
    function close(sessionAttributes, fulfillmentState, message) {
        return {
            sessionAttributes,
            dialogAction: {
                type: 'Close',
                fulfillmentState,
                message,
            },
        };
    }
     
    function dispatch(intentRequest, callback) {
        console.log('request received for userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.intentName}');
        const sessionAttributes = intentRequest.sessionAttributes;
        const slots = intentRequest.currentIntent.slots;
        const MovieKind = slots.MovieKind;
        console.log(`request received for Slots=${MovieKind}`);
         callback(close(sessionAttributes, 'Fulfilled',
        {'contentType': 'PlainText', 'content': `Your request has been received.`}));
  }
     
  exports.handler = (event, context, callback) => {
        try {
            dispatch(event,
                (response) => {
                    callback(null, response);
                });
        } catch (err) {
            callback(err);
        }
    };