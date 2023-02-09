var genre;
var filmsByGenre;
var TMDId;
var IMDBId;
var TMDKey = '9351b8541deafd7c3666f42bc7a6a545';
var OMDKey = '25570a59';
var movieList = [];



var getFilmsByGenre = () => {
  return JSON.parse(localStorage.getItem('filmsByGenre'))
}

var getIMDBId = () => {
  return localStorage.getItem('IMDBId');
}

var getRandomId = () => {
  filmsByGenre = getFilmsByGenre();
  return filmsByGenre[Math.floor(Math.random() * filmsByGenre.length)].id;
}

var getMovieList = () => {
  return JSON.parse(localStorage.getItem('movieList')) || [];
}

// function that makes an API fetch request to the TMD API get return a list of movies by genre ids. It then saves this list of data locally to the filmsByGenre object and moves on to the getId() function;
function callFilmGenre() {
  var url = 'https://api.themoviedb.org/3/discover/movie?api_key=' + TMDKey + '&with_genres=' + genre + '&language=en-US';
    fetch(url).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          // console.log(data);
          filmsByGenre = getFilmsByGenre();
          filmsByGenre = data.results;
          // console.log(filmsByGenre)
          localStorage.setItem('filmsByGenre', JSON.stringify(filmsByGenre));
          getId();
        });
      } else {
        console.log('Api is not working')
        }
    })
}
  
// function that uses the randomly pulled TMD movie id variable set, and makes an API fetch request to grab the imdb id from the TMD API for later use in OMDB API
var getId = () => {
  getIMDBId();
  TMDId = getRandomId();
  var idUrl = 'https://api.themoviedb.org/3/movie/' + TMDId + '/external_ids?api_key=' + TMDKey;
  fetch(idUrl).then(function (response) {
    if(response.ok){
      response.json().then(function (data){
        // console.log(data.imdb_id);
        IMDBId = data.imdb_id;
        localStorage.setItem('IMDBId', JSON.stringify(IMDBId));
        checkMovieId();
      })
    }
  })
};
  


// function that's going to check the locally stored movieList array for the randomly generated imdb ids from TMD API call used in getId() function
var checkMovieId = () => {
  getIMDBId();
  movieList = getMovieList();
  var randomIdGen = getIMDBId(getRandomId())
 
// if the movieList array is less than 3, it's going to use the callFilmGenre() function to make an api call to TMD for getting movie ids, which is going to
//move through to the cityId() function to randomly select an id and run it through the API call to get the IMDB id to use with OMDB
  var count = 0;
  if (movieList.length < 3){
    callFilmGenre();
    for (let i = 0; i < movieList.length; i ++){
    // if the id at the [i] index within the movieList array is already equal to the IMDBId variable, it'll add to the count variable and then jump to the next statement
    if (movieList[i] === IMDBId){
      count++
      break;
    }
  }
  // if count is less than or equal to 0, the current IMDBId is not already a part of the array. It will then push it removing the extra quotes that get added in the process,
  //and then locally store the new array
  if (count <= 0) {
    movieList.push(randomIdGen.replaceAll('"', ''));
    localStorage.setItem('movieList', JSON.stringify(movieList))
  }
  }
  // console.log(movieList)
}

// var toApplyResults = () => {
  // callFilmGenre();
  // getIMDBId();
  // var movieOne = getIMDBId()[0];
  // var movieTwo = getIMDBId()[1];
  // var movieThree = getIMDBId()[2];
  
  //   console.log(movieOne);
  //   console.log(movieTwo);
  //   console.log(movieThree);
  // }
  
  

  // $('#result-container').empty();
  // $('#results-container').append('<h2> Our recommendations based on your mood:');
  // for (let i = 0; i <  3; i++){
  //   movieOne = IMDBId;
  //   if (filmsByGenre[random].id != movieOne){
  //     movieTwo = data
  //   }
      

  //  


// toApplyResults();
// callFilmGenre();   
// getId();
// console.log(getRandomId())


// Bored Button selector and listener
var boredButtonEl = document.querySelector('#bored')

// boredButtonEl.addEventListener('submit'and call function)
boredButtonEl.addEventListener('click', function(){
    callFilmGenre();
});


