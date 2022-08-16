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
            <NavLink to={"/history"}>History</NavLink>
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
              href="https://rapidapi.com/slotixsro-slotixsro-default/api/covid-19-tracking/"
              target="_blank"
              rel="noreferrer"
            >
              COVID-19 Tracking API
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
              href="https://github.com/CSSEGISandData/COVID-19"
              target="_blank"
              rel="noreferrer"
            >
              Center for Systems Science and Engineering (CSSE)
            </a>
          </li>
          <li>
            <a
              href="https://www.joinsherpa.com/products/travel-restrictions"
              target="_blank"
              rel="noreferrer"
            >
             Sherpa
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
  flex-wrap: wrap;
  width: 100%;
  align-content: center;
  justify-content: space-around;
  align-items: flex-end;
  z-index: 999;
  padding: 20px;

  width: 100%;
  background: var(--bg-color);

  p {
    text-decoration: underline;
  }
`;

const WrapperLinks = styled.div``;
const WrapperApi = styled.div``;
const WrapperLastUpdate = styled.div``;

export default Footer;
