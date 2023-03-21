import { createContext, useReducer } from "react";
import UserReducer from "./userReducer";

const INITIAL_STATE = {
  userDetails: null,
  showLogin:false
};

export const UserContext = createContext(INITIAL_STATE);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  return (
    <UserContext.Provider value={{ userDetails: state.userDetails, showLogin:state.showLogin, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
