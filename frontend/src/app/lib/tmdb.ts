const BASE_URL = 'https://api.themoviedb.org/3';
const AUTH_HEADER = `Bearer ${process.env.TMDB_BEARER_TOKEN}`;

async function fetchFromTMDB(endpoint: string){
    const res = await fetch(`${BASE_URL}${endpoint}`,{
        headers:{
            accept: 'application/json',
            Authorization: AUTH_HEADER
        },
        next: {revalidate: 3600},
    });

    if(!res.ok) throw new Error("Failed to fetch");
    return res.json();
}

export async function getPopularMovies(){
    const data = await fetchFromTMDB('/movie/popular?language=en-US&page=1')
    return data.results;
}

export async function getUpcomingMovies(){
    const data = await fetchFromTMDB('/movie/upcoming?language=en-US&page=1');
    return data.results;
}

export async function getHighestRated(){
    const data = await fetchFromTMDB('/movie/top_rated?language=en-US&page=1');
    return data.results;
}