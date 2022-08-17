import styled from "styled-components";
import { remove_html_tag } from "../../../helper";

const InfoAreaRestrictions = ({ data }) => {
  return (
    <Wrapper>
      <h3>Area Restriction Policy</h3>
      <WrapperPolicies>
        {data.map((policy, index) => {
          return (
            <WrapperPolicy key={`policy-${index}`}>
              <p key={`policy-updated-${index}`}>
                Last update: {policy.lastUpdate}
              </p>
              <p key={`policy-type-${index}`}>Type: {policy.restrictionType}</p>
              <p key={`policy-decree-${index}`}>
                Decree: <br />
                &#8226;{remove_html_tag(policy.text)}
              </p>
            </WrapperPolicy>
          );
        })}
      </WrapperPolicies>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapperPolicies = styled.div`
  padding: 20px;
  max-height: 500px;
  overflow-y: scroll;
`;
const WrapperPolicy = styled.div`
  padding: 20px;
`;

export default InfoAreaRestrictions;
