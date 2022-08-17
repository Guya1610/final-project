import styled from "styled-components";

const ChartCovidRisk = ({ data }) => {
  const color = () => {
    let colorWarning = null;

    switch (data) {
      case "Low": {
        return (colorWarning = "green");
      }
      case "Medium": {
        return (colorWarning = "yellow");
      }
      case "High": {
        return (colorWarning = "orange");
      }
      case "Extreme": {
        return (colorWarning = "red");
      }
      default:
        break;
    }
    return colorWarning;
  };
  return (
    <Wrapper>
      <h3>Risk Level</h3>

      <svg width="120" height="120">
        <circle
          stroke={color()}
          strokeWidth="4"
          fill="transparent"
          r="52"
          cx="60"
          cy="60"
        />
        <text x="50%" y="50%" textAnchor="middle" stroke={color()} dy=".3em">
          {data}
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

export default ChartCovidRisk;
