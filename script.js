const api_key = 'api_key=1bfdbff05c2698dc917dd28c08d41096';
const base_url = 'https://api.themoviedb.org/3';
const api_url = base_url + '/discover/movie?sort_by=popularity.desc&'+api_key;
const img_url = 'https://image.tmdb.org/t/p/w500';



const searchURL = base_url + '/search/movie?'+ api_key;

const main = document.getElementById('main');
const form =  document.getElementById('form');
const search = document.getElementById('search');


getMovies(api_url);

function getMovies(url){

    fetch(url).then(res => res.json()).then(data =>{
        console.log(data.results)   
        showMovies(data.results);
    })


}


function showMovies(data){
    //add new space for movie
    main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = ` <img src="${img_url+poster_path}"  alt="${title}">
                    
        <div class="movie-inf">
            <h3>${title}</h3>
            <span class="${getColor(vote_average)}">${vote_average}</span>

            <div class="overview">
            <h3>Overview</h3>
           ${overview}

        </div>
        `

        main.appendChild(movieEl); //add new elements
    })


}

function getColor(vote) {
    if(vote>= 8){
        return 'green'
    }else if(vote >= 5){
        return "orange"
    }else{
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    if(searchTerm) {
        getMovies(searchURL+'&query='+searchTerm)
    }else{
        getMovies(api_url);
    }

})