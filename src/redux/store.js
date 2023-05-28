import { applyMiddleware, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createStore } from "redux"
import rootReducer from "./root-reducers";
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas";

// const sagaMiddleware = createSagaMiddleware()


// export default function configStore(initialState = {}) {
//     const store = configureStore({reducer: rootReducer}, initialState, applyMiddleware(sagaMiddleware))
//     sagaMiddleware.run(rootSaga)

//     return { store }
// }


const sagaMiddleware = createSagaMiddleware();
const configStore = (initialState = {}) => {

    const store = configureStore(
        {
            reducer: rootReducer,
            middleware: [sagaMiddleware],
            initialState
        }
    );
    // use the same saga middleware that you have enhanced your store with
    sagaMiddleware.run(rootSaga);
    return { store };
}

export default configStore