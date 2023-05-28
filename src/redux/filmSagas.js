import { takeEvery, take, select, call, put } from "redux-saga/effects"
import filmType from './type.js'
import axios from "axios";

import { getFilmSuccessAction, getListFilmsSuccessAction, getPopularFilmsSuccessAction } from "./actions";

const REACT_APP_TMDB_KEY = 'd4dfced817985d414b727774821c9678'

function* getPopularFilmsSaga() {
    try {
        const response = yield axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${REACT_APP_TMDB_KEY}&language=fr-FR`)
        if (response.status === 200) {
            yield put(getPopularFilmsSuccessAction(response.data))
        } else {
            console.log('Error:', response.status_message);
        }
    } catch (e) {
        console.log('Error:', e);
    }
}

function* getFilmSaga(film) {
    try {
        const response = yield axios.get(`https://api.themoviedb.org/3/movie/${film.payload.id}?api_key=${REACT_APP_TMDB_KEY}&language=fr-FR`)
        if (response.status === 200) {
            yield put(getFilmSuccessAction(response.data))
        } else {
            console.log('Error:', response.status_message);
        }
    } catch (e) {
        console.log('Error:', e);
    }
}

function* getListFilmsSaga(query) {
    if (query.payload) {
        try {
            const response = yield axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_TMDB_KEY}&query="${query.payload}"&language=fr-FR`)
            if (response.status === 200) {
                yield put(getListFilmsSuccessAction(response.data))
            } else {
                console.log('Error:', response.status_message);
            }
        } catch (e) {
            console.log('Error:', e);
        }
    }
}


export default function* filmSaga() {
    yield takeEvery(filmType.GET_POPULAR_FILMS, getPopularFilmsSaga)
    yield takeEvery(filmType.GET_FILM, getFilmSaga)
    yield takeEvery(filmType.GET_LIST_FILMS, getListFilmsSaga)
}
