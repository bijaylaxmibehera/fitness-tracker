import { createStore,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { fitnessReducer } from "./reducer/fitnessReducer";

export const store=createStore(fitnessReducer,applyMiddleware(thunk));