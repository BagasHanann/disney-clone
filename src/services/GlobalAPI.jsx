import axios from 'axios';

const movieBaseURL = 'https://api.themoviedb.org/3';
const api_key = '4ef9795d4126b74c04671152e0cd152e';

const genreBaseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;

const getTrendingVideos = axios.get(
	`${movieBaseURL}/trending/all/day?api_key=${api_key}`,
);

const getGenreListById = (id) => axios.get(`${genreBaseURL}&with_genres=${id}`);

export default { getTrendingVideos, getGenreListById };
