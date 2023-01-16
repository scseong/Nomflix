const API_KEY = '511ecda9cd5542ab97312ea05cd2e3c3';
const BASE_PATH = 'https://api.themoviedb.org/3/';

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (res) => res.json(),
  );
}
