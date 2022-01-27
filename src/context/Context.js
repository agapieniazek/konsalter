import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
  lang: JSON.parse(localStorage.getItem("user")),
  menu: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(()=>{
    localStorage.setItem("lang", JSON.stringify(state.lang))
  }, [state.lang]);

  return(
    <Context.Provider value={{
      lang: state.lang,
      menu: state.menu,
      dispatch
    }}>
      {children}
    </Context.Provider>
  )
}