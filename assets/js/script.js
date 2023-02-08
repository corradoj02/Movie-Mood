// Bored Button selector and listener
var boredButtonEl = document.querySelector('#bored');
boredButtonEl.addEventListener('submit', boredSubmitHandler);

// Trakt api key: 4da18c87df7b93d1b4913167620db9a629edd563cc03e0dc67346fef5ac3339b

// call api for bored button--action films using Trakt api
function boredSubmitHandler (event) {
    event.preventDefault();
    var apiUrl = "https://api.trakt.tv Content-type";
      
      fetch(apiUrl)
      fetch ('https://api.trakt.tv/'
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            'trakt-api-key': '4da18c87df7b93d1b4913167620db9a629edd563cc03e0dc67346fef5ac3339b'
            'trakt-api-version': '2'

            
            ?genres=action&limit=10'
        })
          .then(response => response.json())
          .then(response => console.log(JSON.stringify(response)))
        })

}