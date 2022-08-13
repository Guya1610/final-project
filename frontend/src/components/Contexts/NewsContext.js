import { createContext, useReducer } from "react";

export const NewsContext = createContext(null);

const initialState = {
  news: null,
  status: "loading",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "get-news": {
      return {
        ...state,
        news: action.news.data.Countries,
        status: 200,
      };
    }
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

export const NewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getNews = async () => {
    await fetch("/api/information")
      .then((response) => response.json())
      .then((news) => {
        dispatch({
          type: "get-news",
          news: news,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const setLoading = (data) => {
    dispatch({
      type: "set-loading",
      ...data,
    });
  };

  return (
    <NewsContext.Provider
      value={{
        state,
        actions: {
          getNews,
          setLoading,
        },
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
