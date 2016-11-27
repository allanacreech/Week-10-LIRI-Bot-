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
if(process.arg.length < 4){
    movieName = "Mr. + Nobody";
}
else{
    movieName = porcess.argv[3];

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
request(queryURL, function omdbResult(err, resp, body){
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
}


//Twitter FUNCTION

function tweetRequest(){
   
// Then run a request twitter  
var queryURL = 'https://api.twitter.com/1.1/search/tweets.json?q=from%3Alonesomewonderer1&result_type=recent';

// This line is just to help us debug against the actual URL.  
console.log(queryURL);


// Then create a request to the queryUrl
// ...
request(queryURL, function omdbResult(err, resp, body){
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
}
movieRequest();