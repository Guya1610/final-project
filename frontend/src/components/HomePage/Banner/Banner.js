import clip from "./Earth.mov";
import Poster from "./Earth.jpg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <Wrapper>
      <Link to={"/search"}>Check your destination &gt;</Link>
      <Video autoPlay loop muted poster={Poster}>
        <source src={clip} type="video/mp4" />
        <source src={clip} type="video/ogg" />
      </Video>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 100vw;
  height: 100vh;

  img {
    width: 100vw;
  }
`;
const Video = styled.video`
  width: 100vw;
  max-width: 99.1vw;
`;

const Link = styled(NavLink)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;

  font-size: 2.5em;
  line-height: 2.5em;

  border: 4px solid var(--font-color);
  text-decoration: none;
  padding: 0 20px;

  :hover {
    color: black;
    background: var(--font-color);
  }
`;

export default Banner;
