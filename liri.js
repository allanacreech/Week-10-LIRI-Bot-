// Grabs the twitter variables
var trKeys = require("./keys.js");

//Grabs the request modual
var request = require("request");
// Grabs spotify information
var spotify = require("spotify");
// Grabs twitter information
var twitter = require("twitter");



//MOVIE FUNCTION

function movieRequest(){
    // Grab or assemble the movie name  and store it in a variable called "movieName"
// ...
var movieName="";
//or grabs Mr.Nobody if nothing is put in
if(process.argv.length < 4){
    movieName = "Mr.+Nobody";
}
else{
    movieName = process.argv[3];

//this pulls movies that are more then one word
    for(var i=4; i < process.argv.length; i++)
{
    movieName= movieName + "+" + process.argv[i];//contactonate all of the information spaces
}
}
//var i = 4 becasue it would be the 4th typed in on command line

// Then run a request to the OMDB API with the movie specified 
var queryURL = 'http://www.omdbapi.com/?t=' + movieName +'&tomatoes=true&y=&plot=short&r=json';

// This line is just to help us debug against the actual URL.  
console.log(queryURL);


// Then create a request to the queryUrl
// ...
request(queryURL, function(err, resp, body){
	// If the request is successful
	// ... 
	if(!err && resp.statusCode === 200) {
		// Then log the Release Year for the movie
		// ...
		console.log("The movie's release year was: " + JSON.parse(body).Year);
        console.log("The movie's Title: " + JSON.parse(body).Title);
        console.log("The IMDB Rating of the movie: " + JSON.parse(body).Rated);
        console.log("The Country where the movie was produced: " + JSON.parse(body).Country);
        console.log("The Language of the movie: " + JSON.parse(body).Language);
        console.log("The Plot of the movie: " + JSON.parse(body).Plot);
        console.log("The Actors in the movie: " + JSON.parse(body).Actors);
        console.log("The Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
        console.log("The Rotten Tomatoes URL: " + JSON.parse(body).Year);
        
	}
});
}//end of movie function


//Twitter FUNCTION

function tweetRequest(){

    
    var twitter = require('twitter');

    //Grab the keys.js information
    var twitterKeys = trKeys.twitterKeys;

    //Set client to the grabbed keys
    var client = new twitter(twitterKeys);

    //Set screen_name and number of tweets to pull
    var params = { screen_name:'@lonesomewonder1', count: 20, result_type: 'recent'};

    //Get timeline information
    client.get('statuses/user_timeline', params, function(error,tweets) {

        //if error occurs
        if (error){
            console.log('Error occured: ' + error);
            return;
        }
        //if no error
        console.log(tweets);
            //Display 20 current tweets, numbered 1-20
            for (var i = 0; i < tweets.length; i++ ){
                console.log(("[]" +i + 1) + "[] " + tweets[i].text);
            

        }
    });
}

tweetRequest();
