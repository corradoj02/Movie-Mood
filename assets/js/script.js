var genre;
var filmsByGenre;
var TMDId;
var IMDBId;
var TMDKey = '9351b8541deafd7c3666f42bc7a6a545';
var OMDKey = '25570a59';
var movieList = [];
var movieDetails = [];
var movieOneId;
var movieTwoId;
var movieThreeId;

// The genres in The Movie Data Base have id numbers: {"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}

// global event listener
var moodButton = (clicked_id) => {
  alert(clicked_id);
}

var getFilmsByGenre = () => {
  return JSON.parse(localStorage.getItem('filmsByGenre'))
}

// function that gets and returns the movieDeatils object containing the results from the OMD API fetch
var getMovieDetails = () => {
  return JSON.parse(localStorage.getItem('movieDetails'))
}

//function that gets and returns the IMDBId value from converting the TMD movie id to the imdb id
var getIMDBId = () => {
  return localStorage.getItem('IMDBId');
}

//function that takes the filmsByGenre object, and returns a random movie id from within that object to use in getting the imdb id
var getRandomId = () => {
  filmsByGenre = getFilmsByGenre();
  return filmsByGenre[Math.floor(Math.random() * filmsByGenre.length)].id;
}

//function that gets and returns the movieList array that will hold our randomly generated imdb id values for use with the OMDB API
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
  getDetails();
}

//function to take in the movieList array, and then fetch for each id within the array. It then sets the array of movie detail objects to the movieDetails array and locally stores it 
var getDetails = () => {
  getMovieList();

  fetch('https://www.omdbapi.com/?apikey=' + OMDKey + '&i=' + movieList[0])
    .then(response1 => response1.json())
    .then(data1 => {
      fetch('https://www.omdbapi.com/?apikey=' + OMDKey + '&i=' + movieList[1])
        .then(response2 => response2.json())
        .then(data2 =>{
          fetch('https://www.omdbapi.com/?apikey=' + OMDKey + '&i=' + movieList[2])
            .then(response3 => response3.json())
            .then(data3 =>{
              movieDetails = [data1, data2, data3];
              localStorage.setItem('movieDetails', JSON.stringify(movieDetails))
            })
        })
    })
}



callFilmGenre();   


// firstMovie.setAttribute('src', [api-object].poster);
  
// $('#first-result').on('click', function(){
//     $('#first-modal').addClass('is-active')
// })
//  function closeModal($el) {
//     $el.classList.remove('is-active');
//   }
// function closeAllModals() {
//     (document.querySelectorAll('.modal') || []).forEach(($modal) => {
//         closeModal($modal);
//     });
// }
//   (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
//       const $target = $close.closest('.modal');
  
//       $close.addEventListener('click', () => {
//         closeModal($target);
//       });
//     });
