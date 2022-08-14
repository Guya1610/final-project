import { useContext } from "react";
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

const App = () => {
  const {
    state: { user },
  } = useContext(UserContext);

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
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/reset" element={<ResetPassword />} />
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
