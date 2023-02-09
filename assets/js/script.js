
// Bored Button selector and listener
var boredButtonEl = document.querySelector('#bored')

// boredButtonEl.addEventListener('submit'and call function)
boredButtonEl.addEventListener('click', function(){
    callFilmGenre();
});


function callFilmGenre() {
  var url = 'https://api.themoviedb.org/3/discover/movie?api_key=9351b8541deafd7c3666f42bc7a6a545&with_genres=28&language=en-US'
  

      fetch(url).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data);
          });
        } else {
          console.log('Api is not working')
        }
        })
      }
  

