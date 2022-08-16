import { createContext, useReducer } from "react";

export const UserContext = createContext(null);

const initialState = {
  user: null,
  watchlist: [],
  status: "loading",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login-user": {
      return {
        ...state,
        user: action.user,
        status: "200",
      };
    }
    case "logout-user": {
      return {
        ...state,
        user: null,
        status: action.status,
      };
    }
    case "get-watchlist": {
      return {
        ...state,
        watchlist: action.data.locations,
      };
    }
    case "update-watchlist": {
      return {
        ...state,
        watchlist: action.data.locations,
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

  const getWatchList = async ( userId ) => {
    const userIdSelected = state.user ? state.user.uid : userId && userId.userId;

    await fetch(`/api/watchlist/${userIdSelected}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "get-watchlist",
          ...data,
        });
      })
      .catch((error) => {
        setStatus("error", error);
      });
  };

  const updateWatchList = async (data, action) => {
    const exist = state.watchlist.find((e) => e === data) ? true : false;

    let objectToSave = exist
      ? state.watchlist.filter((location) => {
          return location !== data;
        })
      : [...state.watchlist, data];

    const params = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body:
        objectToSave === undefined
          ? JSON.stringify([])
          : JSON.stringify(objectToSave),
    };

    state.user &&
      state.watchlist &&
      (await fetch(`/api/watchlist/${state.user.uid}`, params)
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "update-watchlist",
            data: { locations: objectToSave === undefined ? [] : objectToSave },
          });
        })
        .catch((error) => {
          setStatus("error", error);
        }));
  };

  const createWatchList = (data) => {
    dispatch({
      type: "create-watchlist",
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
          createWatchList,
          getWatchList,
          updateWatchList,
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
