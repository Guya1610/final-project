import styled from "styled-components";
import { FaExternalLinkAlt } from "react-icons/fa";
import { remove_html_tag } from "../../../helper";

const InfoAreaPolicy = ({ data }) => {
  return (
    <Wrapper>
      <h3>Policy Area</h3>
      <WrapperPolicy>
        <p>Starting on :{data.startDate}</p>
        <p>Ending on :{data.endDate}</p>
        <p>Status: {data.status}</p>
        <p>
          Decree: <br /> &#8226; {remove_html_tag(data.text)}
        </p>

        <p>
          Link:{" "}
          <a href={data.referenceLink}>
            Reference link <LinkIcon />
          </a>
        </p>
        <p>Last Update: {data.lastUpdate} </p>
      </WrapperPolicy>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  max-width: 350px;
  h3 {
    text-align: center;
  }
`;
const WrapperPolicy = styled.div`
  padding: 20px;
`;

const LinkIcon = styled(FaExternalLinkAlt)`
  font-size: 12px;
`;

export default InfoAreaPolicy;
