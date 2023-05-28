import { all } from "redux-saga/effects"
import filmSaga from "./filmSagas"

export default function* rootSaga() {
    yield all ([
        filmSaga()
    ])
}