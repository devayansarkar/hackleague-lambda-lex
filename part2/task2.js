const moviesDatabase = require('./movies.json');
const usersDatabase = require('./users.json');

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
    const user = usersDatabase[intentRequest.userId] || {
        "movies_saw": []
    };


    var isTheMovieIn = false
    var movieName = ''
    var voteAvgOne = 0
    var popularityOne = 0
    console.log(user);
    for (var i = 0, len = moviesDatabase.length; i < len; i++) {
        for (var j = 0, leng = moviesDatabase[i].genres.length; j < leng; j++) {
            if (moviesDatabase[i].genres[j].toLowerCase() === MovieKind.toLowerCase()) {
             voteAvgTwo = moviesDatabase[i].vote_average
                if (voteAvgOne <= moviesDatabase[i].vote_average || popularityOne < moviesDatabase[i].popularity && voteAvgOne === moviesDatabase[i].vote_average) {
                    var isTheMovieWatched = false
                    for (var k = 0, l = user.movies_saw.length; k < l; k++) {
                        var listOfMovies = user.movies_saw
                        if (listOfMovies[k] == moviesDatabase[i].id) {
                            //No Movies
                        } else {
                            isTheMovieIn = true
                            movieName = moviesDatabase[i].title
                            voteAvgOne = moviesDatabase[i].vote_average
                            user.movies_saw.push(moviesDatabase[i].id)
                            break;
                        }

                    }


                }
            }

        };

    }
    console.log(user);
    if (isTheMovieIn) {
        var response = 'I suggest "' + movieName + '"'
        callback(close(sessionAttributes, 'Fulfilled', {
            'contentType': 'PlainText',
            'content': response
        }));
    } else {
        callback(close(sessionAttributes, 'Fulfilled', {
            'contentType': 'PlainText',
            'content': `Sorry, I did not find anything.`
        }));
    }

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