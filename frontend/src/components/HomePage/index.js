import styled from "styled-components";
import News from "../News";
import Banner from "./Banner/Banner";

const HomePage = () => {
  return (
    <Wrapper>
      <News />
      <Banner />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default HomePage;
