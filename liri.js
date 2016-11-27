"use strict"

//Hears user input for action
var action = process.argv[2];

//User input for what they want or don't type
var parameter = process.argv[3];

//This will switch to determine what input user wants
function completeAction(action){
    switch(action){
        case    'my-tweets':
                twitter();
                break;
        case    'spotify-this-song':
                spotify();
                break;
        case    'movie-this':
                movie();
                break;
        case    'do-what-it-says':
                doIt();
                break;
        default:
                console.log("Enter 'my-tweets', 'spotify-this-song', 'movie-this' , or 'do-what-it-says' ");
    }
}

//my-tweets
function twitter(){
    
    //Get twitter node package
    var twitter = require('twitter');

    //Grab the keys.js information
    var twitterKeys = require('./keys.js').twitterKeys;

    //Set client to the grabbed keys
    var client = new twitter(twitterKeys);

    //Set screen_name and number of tweets to pull
    var params = { screen_name: '@lonesomewonderer1', count:20};

    //Get timeline information
    client.get('statuses/user_timeline', params, function(error,tweets) {

        //if error occurs
        if (error){
            console.log('Error occured: ' + error);
            return;
        }
        //if no error
        if (!error){
            //Display 20 current tweets, numbered 1-20
            for (var i = 0; i < tweets.length; i++ ){
                console.log(([i] + 1) + '. ' + tweets[i].text);
            }

        }
    });

}//end of twitter function



//spotify-this-song
function spotify(){

    if(parameter == null) {

        //if no song from user, default 'the sign'
        parameter = 'the sign';
    }

        //get spotify node package
        var spotify = require('spotify');

        spotify.search({type: 'track', query:parameter}, function(error,data){

            //If error occurs
            if (error) {
                console.log('Error occured: ' + error);
                return;
            }

            //If no error
            if (!error){

                //Artist name
                var artist = data.tracks.items[0].artist[0].name;

                //Song name
                var song = data.tracks.items[0].name;

                //Spotify preview link
                var link = data.tracks.items[0].external_urls.spotify;

                //Album name
                var album = data.tracks.items[0].album.name;

                //Display all the items together
                console.log(song + ", performed by " + artist + ", on the album " + album + ". Spotify: " + link);
           
             }
        });
}//end of spotify function


//movie-this
function movie() {
        //Get request package
        var request = require('request');

        if(paramenter == null) {
 
            //if user doesn't provide movie title
            var movieName = "Mr. Nobody";
        }

        else{

            //Assign user imput to a variable
            var movieName = parameter;
        }

        //Create URL based on movieName
        var queryURL = 'http://www.omdbapi.com/?t=' + movieName +'&tomatoes=true&y=&plot=short&r=json';

        //request
        request(queryURL, function(error,response,data){

            //if error occurs
            if (error){
                console.log('Error occured: ' + error);
                return;
            }

            //if no error
            if(!error && response.statusCode == 200) {

                //JsonParse the data
                var grabData = JSON.parse(data);
                console.log(grabData.Title +
                 " (" + grabData.Year + "), Rate: " + grabData.Rated +
                 " . Filmed in: " + grabData.Country +
                 ". Language: " + grabData.Language +
                 ". Plot: " + grabData.Plot +
                 " Starring: " + grabData.Actors +
                 " . Rotten Tomates Rating: " + grabData.tomatoUserMeter +
                 ", Rotten Tomatoes URL: " + grabData.tomatoURL);
            }
        });
}//end of movie function


//do-what-it-says

function doIt(){

    //Get fs
    var fs = require('fs');

    //Stores the contents fo the reading inside the var "data"
    fs.readFile("random.txt", "utf8", function(error, data){
        var split = data.split(',');

        //assign to user input
        action = split[0];

        //assign to user input
        action = split[0];
        parameter = split[1];

        doAction(action);
    })

}

//Start the process
doAction(action);


