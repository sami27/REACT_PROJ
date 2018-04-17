import {createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware,combineReducers} from "redux";
import logger from "redux-logger";
import {submitFormData} from "../reducers/Formreducer";
import rootSaga from '../Sagas/Saga'
const sagaMiddleware = createSagaMiddleware();

export const store=createStore(
    combineReducers({submitFormData}),
    {},
    applyMiddleware(logger, sagaMiddleware)
);
 sagaMiddleware.run(rootSaga)

export default store;