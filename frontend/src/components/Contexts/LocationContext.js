import { createContext, useReducer } from "react";

export const LocationContext = createContext(null);

const initialState = {
  user: null,
  status: "loading",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "set-loading": {
      return {
        ...state,
        status: action.status,
      };
    }

    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
};

export const LocationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoading = (data) => {
    dispatch({
      type: "set-loading",
      ...data,
    });
  };

  return (
    <LocationContext.Provider
      value={{
        state,
        actions: {
          setLoading,
        },
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
