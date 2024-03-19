const key='513cc6ae939c97c8d9585f82b6ae91d9'
const baseurl= "https://api.themoviedb.org/3";

const requests={
    popular:`${baseurl}/movie/popular?api_key=${key}`,
    topRated:`${baseurl}/movie/top_rated?api_key=${key}`,
    trending:`${baseurl}/movie/popular?api_key=${key}&language=en-US&page=2`,
    comedy:`${baseurl}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=true`,
    upcoming:`${baseurl}/movie/upcoming?api_key=${key}`,
    horror:`${baseurl}/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
};

export default requests