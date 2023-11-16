import { createContext, useReducer } from "react";
import questions from "../data/questions";

const STAGES = ["Start", "Playing", "End"];

export const ElectionContext = createContext();

const initialState = {
  gameStage: STAGES[0],
  questions,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    default:
      return state;
  }
};

export const ElectionProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return (
    <ElectionContext.Provider value={value}>
      {children}
    </ElectionContext.Provider>
  );
};
