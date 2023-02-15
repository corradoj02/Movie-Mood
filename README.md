# Movie Mood

## A web application that allows a user to get a movie suggestion based on user selected mood
---

For this project we wanted to create a web application that would allow a user to find 3 movie recommendations after they've selected what mood they were feeling. This application is meant for individuals that may be in the mood for a good movie due, but unsure of what to watch. 


## User Story 
    AS a user who loves watching movies,
    I WANT to use a site that recommends movies, 
    SO THAT I can find a movie based on my mood

## Acceptance Criteria
    GIVEN a movie site with a mood based buttons, 
    WHEN I click a mood button,
    THEN a movie recommendation appears,
    WHEN the movie recommendation shows up,
    THEN I'll be able to see more details about the movie to decide if it's something I'll be interested in

## Some additional food for thought
---
We all learned a lot while collaborating on this project, and some of us did not get the chance to explore some features that we would've loved to implement if given enough time. Some of those include:

    * Give the user the option to see a trailer of the film
  
    * Give the user the option to see where the film is available for streaming
  
    * Give the user the option to save and retrieve film suggestions into a watch list
  
    * Give the user the option to choose more moods and genres of films
  
    * Implement facial recognition to determine user’s mood


## Installation
---

N/A
## Usage
---

The link to the GitHub pages for this site: https://corradoj02.github.io/Movie-Mood/
<br><br>

Upon opening the web page, the user will be greeted by the main page asking what mood they are in: 
<img src="./assets/images/main-page.png">


Once the user selects a mood, their movie recommendations will be generated:

<img src="./assets/images/movie-gen-example.png">

If a user then clicks on a movie poster, a modal card will be opened with further details about the selected title:

<img src="./assets/images/movie-details.png">


## Credits
---
First and foremost, credits for this project will go to the contributors:

<strong>ScarletBowen</strong> (Scarlet Bowen),

<strong>BigNATE38</strong> (Nathaniel Vanderpoort),

<strong>DanielRGudmundsen</strong> (Daniel Gudmundsen),

and <strong>seangolden01</strong> (Sean Golden)
<br><br>

For this project we used <strong>The Open Movie Database (OMDb) API</strong> to get any and all movie data for our results.

A link to their API is here:

https://www.omdbapi.com/


In order to get our movie details by genre, we first had to use <strong>The Movie Database (TMDB) API</strong> in order to fetch a list of movies, and then fetch the imdb IDs for each of those movies. This is because TMDB seemed to be the only movie database API we could find that allowed us to get movies by genre, but unfortunately they do not have a very well put together database for other movie details.

https://developers.themoviedb.org/3/getting-started/introduction

## License
---
MIT License

Copyright (c) 2023

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.