import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Home from "./Home";
import HomePage from "./HomePage";
import ResetPassword from "./ResetPassword";
import Login from "../components/Login";
import Error from "../Error";
import SearchEngine from "./SearchEngine";
import { UserContext } from "./Contexts/UserContext";

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
