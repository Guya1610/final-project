import styled from "styled-components";
import { useEffect, useContext } from "react";
import ChartCovidRisk from "../Dashboard/Charts/ChartCovidRisk";
import InfoArea from "./Charts/InfoArea.js";
import { RestrictionsContext } from "../Contexts/RestrictionsContext";
import { useParams } from "react-router-dom";
import ChartCovidVaccinated from "./Charts/ChartCovidVaccinated";
import ChartCovidTotal from "./Charts/ChartCovidTotal";
import ChartCovidHotSpot from "./Charts/ChartCovidHotSpot";
import InfoAreaPolicy from "../Dashboard/Charts/InfoAreaPolicy";
import InfoAreaRestrictions from "./Charts/InfoAreaRestrictions";
import InfoAreaAccessRestrictions from "./Charts/InfoAreaAccessRestrictions";
import ChartCovidMask from "./Charts/ChartCovidMask";

const Dashboard = () => {
  const { country, city } = useParams();

  const {
    state: { restrictions },
    actions: { getRestrictions },
  } = useContext(RestrictionsContext);

  useEffect(() => {
    !restrictions &&
      getRestrictions({
        city: city,
        country: country,
      });
  }, []);
  return (
    <Wrapper>
      <h2>Dashboard</h2>
      {restrictions && (
        <WrapperDiv>
          <div>
            {restrictions.area && <InfoArea data={restrictions.area} />}
            {restrictions.diseaseCases && (
              <ChartCovidTotal data={restrictions.diseaseCases} />
            )}
            <WrapperChart1>
              {restrictions.diseaseRiskLevel && (
                <ChartCovidRisk data={restrictions.diseaseRiskLevel.text} />
              )}
              {restrictions.areaAccessRestriction && (
                <ChartCovidMask
                  data={restrictions.areaAccessRestriction.masks}
                />
              )}
            </WrapperChart1>
          </div>
          <WrapperFlex>
            {restrictions.areaVaccinated &&
              restrictions.areaVaccinated.map((vaccinated, index) => {
                return (
                  <ChartCovidVaccinated
                    key={`areavaccinate-${index}`}
                    data={vaccinated}
                  />
                );
              })}
          </WrapperFlex>

          {restrictions.hotspots && (
            <ChartCovidHotSpot data={restrictions.hotspots.text} />
          )}
          {restrictions.areaPolicy && (
            <InfoAreaPolicy data={restrictions.areaPolicy} />
          )}

          <WrapperRestrictions>
            {restrictions.areaRestrictions && (
              <InfoAreaRestrictions data={restrictions.areaRestrictions} />
            )}
            {restrictions.areaAccessRestriction && (
              <InfoAreaAccessRestrictions
                data={restrictions.areaAccessRestriction}
              />
            )}
          </WrapperRestrictions>
        </WrapperDiv>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  padding: 20px;
`;

const WrapperDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const WrapperFlex = styled.div`
  display: flex;
`;
const WrapperChart1 = styled.div`
  display: flex;
`;

const WrapperRestrictions = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export default Dashboard;
