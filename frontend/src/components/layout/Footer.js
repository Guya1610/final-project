import styled from "styled-components";
import { NavLink } from "react-router-dom";
import moment from "moment";

const Footer = () => {
  return (
    <Wrapper>
      <WrapperLinks>
        <p>Links</p>
        <br />
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/map"}>Map</NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
        </ul>
        {/* link  */}
      </WrapperLinks>
      <WrapperApi>
        <p>Ressources</p>
        <br />
        <ul>
          <li>
            <a
              href="https://www.ecdc.europa.eu/en/covid-19/data"
              target="_blank"
              rel="noreferrer"
            >
              European Centre for Disease Prevention and Control
            </a>
          </li>
          <li>
            <a
              href="https://developers.travelperk.com/docs"
              target="_blank"
              rel="noreferrer"
            >
              Travelperk
            </a>
          </li>
          <li>
            <a
              href="https://developers.amadeus.com/"
              target="_blank"
              rel="noreferrer"
            >
              Amadeus
            </a>
          </li>
          <li>
            <a
              href="https://www.react-simple-maps.io/docs/getting-started/"
              target="_blank"
              rel="noreferrer"
            >
              React-simple-maps
            </a>
          </li>
        </ul>
        {/* api reference */}
      </WrapperApi>
      <WrapperLastUpdate>
        <p>Last updated: {moment().format("YYYY/MM/DD")}</p>
        {/* Last update */}
      </WrapperLastUpdate>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: space-around;
  align-items: flex-end;
  z-index: 999;
  padding: 20px;

  p {
    text-decoration: underline;
  }
`;

const WrapperLinks = styled.div``;
const WrapperApi = styled.div``;
const WrapperLastUpdate = styled.div``;

export default Footer;
