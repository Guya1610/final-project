import { createContext, useReducer } from "react";

export const RestrictionsContext = createContext(null);

const initialState = {
  restrictions: null,
  location: {
    location: null,
    baseUrl: "0",
  },
  autoComplete: [],
  status: "loading",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "set-location": {
      return {
        ...state,
        autoComplete: [],
        restrictions: null,
        location: {
          location: action.location ? action.location : null,
          baseUrl: action.baseUrl ? action.baseUrl : state.location.baseUrl,
        },
      };
    }
    case "set-restrictions": {
      return {
        ...state,
        restrictions: action.data,
      };
    }
    case "set-autocomplete": {
      return {
        ...state,
        autoComplete: action.data.data ? action.data.data : action.data,
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

export const RestrictionsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setStatus = (data) => {
    dispatch({
      type: "set-status",
      ...data,
    });
  };

  const setLocation = (data) => {
    dispatch({
      type: "set-location",
      ...data,
    });
  };

  const getAutoComplete = async () => {
    const { location, baseUrl } = state.location;
    location
      ? await fetch(`/api/suggestions/${location}/${baseUrl}`)
          .then((response) => response.json())
          .then((results) => {
            dispatch({
              type: "set-autocomplete",
              ...results,
            });
          })
          .catch((err) => {
            console.log(err);
          })
      : dispatch({
          type: "set-autocomplete",
          data: [],
        });
  };

  const setRestrictions = (data) => {
    dispatch({
      type: "set-restrictions",
      ...data.data,
    });
  };

  const getRestrictions = async (data) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
    await fetch(`/api/restrictions`, requestOptions)
      .then((response) => response.json())
      .then((restrictions) => {
        console.log(restrictions);
        setRestrictions(restrictions);
      })
      .catch((err) => {
        console.log(err);
        setStatus(500, err);
      });
  };

  return (
    <RestrictionsContext.Provider
      value={{
        state,
        actions: {
          setStatus,
          setLocation,
          getAutoComplete,
          getRestrictions,
        },
      }}
    >
      {children}
    </RestrictionsContext.Provider>
  );
};
