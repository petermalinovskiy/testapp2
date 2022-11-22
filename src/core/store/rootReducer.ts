import {combineReducers} from "@reduxjs/toolkit";
import {SystemReducer} from "./system/systemSlice";
import {loginApi} from "~/api/auth";

export const rootReducer = combineReducers({
  system: SystemReducer,
  login: loginApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
