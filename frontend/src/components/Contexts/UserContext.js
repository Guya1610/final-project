import { createContext, useReducer } from "react";

export const UserContext = createContext(null);

const initialState = {
  user: null,
  status: "loading",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login-user": {
      return {
        ...state,
        user: action.user,
        status: action.status,
      };
    }
    case "logout-user": {
      return {
        ...state,
        user: null,
        status: action.status,
      };
    }

    case "set-status": {
      return {
        ...state,
        status: action.status,
      };
    }

    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loginUser = (data) => {
    dispatch({
      type: "login-user",
      ...data,
    });
  };

  const logoutUser = (data) => {
    dispatch({
      type: "logout-user",
      ...data,
    });
  };

  const setStatus = (data) => {
    dispatch({
      type: "set-status",
      ...data,
    });
  };

  return (
    <UserContext.Provider
      value={{
        state,
        actions: {
          loginUser,
          logoutUser,
          setStatus,
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
