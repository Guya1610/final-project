import { createContext, useReducer } from "react";

export const StatsContext = createContext(null);

const initialState = {
  stats: null,
  status: "loading",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "get-stats": {
      return {
        ...state,
        stats: action.stats.data.Countries,
        status: 200,
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

export const StatsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getStats = async () => {
    await fetch("/api/information")
      .then((response) => response.json())
      .then((stats) => {
        dispatch({
          type: "get-stats",
          stats: stats,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const setStatus = (data) => {
    dispatch({
      type: "set-status",
      ...data,
    });
  };

  return (
    <StatsContext.Provider
      value={{
        state,
        actions: {
          getStats,
          setStatus,
        },
      }}
    >
      {children}
    </StatsContext.Provider>
  );
};
