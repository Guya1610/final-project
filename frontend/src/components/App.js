import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import { UserContext } from "./Contexts/UserContext";
import Home from "./Home";
import HomePage from "./HomePage";
import ResetPassword from "./Authentification/ResetPassword";
import Login from "./Authentification/Login";
import Error from "../Error";
import SearchEngine from "./SearchEngine";
import History from "./History";
import Map from "./Maps";
import Profile from "./Profile";

const App = () => {
  const {
    state: { user },
    actions: { loginUser, getWatchList },
  } = useContext(UserContext);

  useEffect(() => {
    const isLogin = async () => {
      const userLocalStorage = JSON.parse(window.localStorage.getItem("user"));
      userLocalStorage && await loginUser({ user: userLocalStorage });
      userLocalStorage && await getWatchList({ userId: userLocalStorage.uid });
    };
    isLogin();
  }, []);

  return (
    <Wrapper>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home user={user} />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchEngine />} />
            <Route path="/history" element={<History />} />
            <Route path="/map" element={<Map />} />
            <Route exact path="/login" element={<Login userlog={user} loginUser={loginUser} />} />
            <Route exact path="/reset" element={<ResetPassword />} />
            <Route exact path="/profile" element={<Profile />} />
          </Route>
          <Route exact path="*" element={<Error />} />
        </Routes>
      </Router>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--bg-color);
`;

export default App;
