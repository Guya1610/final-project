import Login from "../components/Login";
import Error from "../Error";
import Home from "./Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route exact path="/login" element={<Login />} />
          </Route>
          <Route exact path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
