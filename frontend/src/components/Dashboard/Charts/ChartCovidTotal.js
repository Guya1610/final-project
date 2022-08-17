import styled from "styled-components";
import CountUp from "react-countup";

const ChartCovidTotal = ({ data }) => {
  return (
    <Wrapper>
      <div>
        <CountUp
          start={0}
          end={data.confirmed}
          duration={2}
          separator=" "
          decimals={4}
          decimal=","
          prefix="Total active cases: "
        />
      </div>

      <div>
        <CountUp
          start={-875.039}
          end={data.deaths}
          duration={2}
          separator=" "
          decimals={4}
          decimal=","
          prefix="Total deaths: "
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  outline: 1px solid white;
  padding: 20px;
`;

export default ChartCovidTotal;
