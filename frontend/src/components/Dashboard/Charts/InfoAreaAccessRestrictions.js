import styled from "styled-components";
import { remove_html_tag } from "../../../helper";
import { FaExternalLinkAlt } from "react-icons/fa";

const InfoAreaAccessRestrictions = ({ data }) => {
  return (
    <Wrapper>
      <h3>Area Access Restrictions</h3>
      <WrapperAreaRestrictions>
        <div>
          <h4>HealthPass</h4>
          <Text>
            Guidance: {remove_html_tag(data.areaHealthPass.applicationGuidance)}
          </Text>
          <Text>Required: {data.areaHealthPass.isRequired}</Text>
          <Text>
            How to get one:{" "}
            {remove_html_tag(data.areaHealthPass.obtentionMethods)}
          </Text>
          <Text>Last update: {data.areaHealthPass.lastUpdate}</Text>
        </div>

        <div>
          <h4>Declaration Documents</h4>
          <Text>Required: {data.declarationDocuments.isRequired}</Text>
          <Text>
            Decree:
            <br />
            &#8226; {remove_html_tag(data.declarationDocuments.text)}
          </Text>
          <Text>
            Link:
            <a href={data.declarationDocuments.travelDocumentationLink}>
              Link <LinkIcon />
            </a>
          </Text>
          <Text>Last Update: {data.declarationDocuments.lastUpdate}</Text>
        </div>

        <div>
          <h4>Entry</h4>
          <Text>Ban Status: {data.entry.ban}</Text>
          <Text>
            Decree:
            <br />
            &#8226; {remove_html_tag(data.entry.text)}
          </Text>
          {
            <ul>
              <h5>Border ban</h5>

              {data.entry.borderBan.map((border, index) => {
                return (
                  <li key={`borderban-${index}`}>
                    <Text key={`borderban-type-${index}`}>
                      Type: {border.borderType}
                    </Text>
                    <Text key={`borderban-status-${index}`}>
                      Status: {border.status}
                    </Text>
                  </li>
                );
              })}
            </ul>
          }

          <div>
            <h5>Banned Area</h5>
            <Text key={`border-`}>
              {data.entry.bannedArea.map((border, index) => {
                return border.code + ",";
              })}
            </Text>
          </div>

          <Text>
            Link:
            <a href={data.entry.referenceLink}>
              Link <LinkIcon />
            </a>
          </Text>
          <Text>Last Update: {data.entry.lastUpdate}</Text>
        </div>

        <div>
          <h4>Mask</h4>
          <Text>Required: {data.masks.isRequired}</Text>
          <Text>Decree: {data.masks.text}</Text>
          <Text>Last update: {data.masks.lastUpdate}</Text>
        </div>

        <div>
          <h4>Transportation</h4>
          <Text>...</Text>
        </div>

        <div>
          <h4>TravelQuarantineModality</h4>
          <Text>...</Text>
        </div>

        <div>
          <h4>TravelTest</h4>
          <Text>...</Text>
        </div>
        <div>
          <h4>TravelTestConditionsAndRules</h4>
          <Text>...</Text>
        </div>
      </WrapperAreaRestrictions>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    padding: 10px 0 5px;
  }
  h5 {
    padding: 5px 0 2.5px;
  }
`;
const WrapperAreaRestrictions = styled.div`
  padding: 20px;
  max-height: 500px;
  overflow-y: scroll;
`;
const LinkIcon = styled(FaExternalLinkAlt)`
  font-size: 12px;
`;

const Text = styled.p`
  word-wrap: break-word;
  max-width: 90vw;
`;
export default InfoAreaAccessRestrictions;
