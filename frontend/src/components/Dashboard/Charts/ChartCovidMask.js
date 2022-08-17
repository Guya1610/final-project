import styled from "styled-components";

const ChartCovidMask = ({ data }) => {
  return (
    <Wrapper>
      <h3>Mask</h3>

      <svg width="120" height="120">
        <circle
          stroke={"yellow"}
          strokeWidth="4"
          fill="transparent"
          r="52"
          cx="60"
          cy="60"
        />
        <text x="50%" y="50%" textAnchor="middle" stroke={"yellow"} dy=".3em">
          {data.isRequired}
        </text>
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export default ChartCovidMask;
