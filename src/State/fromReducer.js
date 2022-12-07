import React, { createContext, useReducer } from "react";
import { actionTypes } from "./ActionTypes";

export const From_Context = createContext();

export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  education: "",
  PCs: 0,
  term: false,
};

export const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case actionTypes.INPUT:
      return { ...state, [action.payload.name]: action.payload.value };

    case actionTypes.TOGGLE:
      return { ...state, term: !state.term };

    case actionTypes.INCREMENT:
      return { ...state, PCs: state.PCs + 1 };

    case actionTypes.DECREMENT:
      return { ...state, PCs: state.PCs - 1 };

    default:
      return state;
  }
};

// const [state, dispatch] = useReducer(reducer, initialState);
