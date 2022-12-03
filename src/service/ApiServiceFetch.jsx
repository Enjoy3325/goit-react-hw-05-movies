const API_KEY = '631075854851454119cb09d20165cf60';
const BASE_URL = 'https://api.themoviedb.org/3';

//? список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.

export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
    );
    return await response.json();
  } catch (error) {}
};

//?  пошук фільму за ключовим словом на сторінці фільмів.

export const fetchMoviesSearch = async (query, page = 1, adult = false) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&q=${query}&language=en-US&${page}&${adult}`
    );
    return await response.json();
  } catch (error) {}
};

// ? запит повної інформації про фільм для сторінки кінофільму.

export const fetchInfoMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/{movie_id}?api_key=${API_KEY}&language=en-US`
    );
    return await response.json();
  } catch (error) {}
};

// ? запит інформації про акторський склад для сторінки кінофільму.

export const fetchMovieCredits = async () => {
  try {
    const response = await fetch(`
${BASE_URL}/movie/{movie_id}/credits?api_key=${API_KEY}&language=en-US`);
    return await response.json();
  } catch (error) {}
};

// ? запит оглядів для сторінки кінофільму.

export const fetchMoviesReviews = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/{movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return await response.json();
    console.log('response.json() :>> ', response.json());
  } catch (error) {}
};