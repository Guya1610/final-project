import { Outlet } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import styled from "styled-components";

const Home = ({ user }) => {
  return (
    <Wrapper>
      <Header user={user} />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--bg-color);
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  padding-top: var(--header-height);
`;

export default Home;
