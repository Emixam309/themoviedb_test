import filmType from "./type";

export const getFilmAction = film => ({
    type: filmType.GET_FILM,
    payload: film
})

export const getFilmSuccessAction = film => ({
    type: filmType.GET_FILM_SUCCESS,
    payload: film
})

export const getListFilmsAction = query => ({
    type: filmType.GET_LIST_FILMS,
    payload: query
})

export const getListFilmsSuccessAction = films => ({
    type: filmType.GET_LIST_FILMS_SUCCESS,
    payload: films
})

export const getPopularFilmsAction = () => ({
    type: filmType.GET_POPULAR_FILMS
})

export const getPopularFilmsSuccessAction = films => ({
    type: filmType.GET_POPULAR_FILMS_SUCCESS,
    payload: films
})