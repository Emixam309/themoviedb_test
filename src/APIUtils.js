

export default {
    getPopularFilms: () => {
        return fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}&language=fr-FR`)
            .then(res => res.json());
    },
    getFilm: (filmId) => {
        return fetch(`https://api.themoviedb.org/3/movie/${filmId}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=fr-FR`)
            .then(res => res.json());
    },
    getListFilms: (query) => {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&query="${query}"&language=fr-FR`)
            .then(res => res.json());
    }
}