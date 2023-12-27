const api_key = 'api_key=1bfdbff05c2698dc917dd28c08d41096';
const base_url = 'https://api.themoviedb.org/3';
const api_url = base_url + '/discover/movie?sort_by=popularity.desc&'+api_key;


getMovies(api_url);

function getMovies(url){

    fetch(url).then(res => res.json()).then(data =>{
        console.log(data);    })
}