import filmType from "./type";

const initialState = {
    popularFilms: {},
    selectedFilm: {},
    searchedFilms: {}
}

const filmReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case filmType.GET_POPULAR_FILMS_SUCCESS:
            return {
                ...state,
                popularFilms: payload
            }
        case filmType.GET_FILM_SUCCESS:
            return {
                ...state,
                selectedFilm: payload
            }
        case filmType.GET_LIST_FILMS_SUCCESS:
            return {
                ...state,
                searchedFilms: payload
            }
        default:
            return { ...state }
    }
}

export default filmReducer;