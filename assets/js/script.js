var request = new XMLHttpRequest();

request.open('GET', 'https://api.trakt.tv/genres/movies');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('trakt-api-version', '2');
request.setRequestHeader('trakt-api-key', '4da18c87df7b93d1b4913167620db9a629edd563cc03e0dc67346fef5ac3339b');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
