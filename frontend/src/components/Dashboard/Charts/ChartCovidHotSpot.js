import styled from "styled-components";

const ChartCovidHotSpot = ({ data }) => {
  const spots = data.replace("<p>", "").replace("</p>", "").split(",");

  return (
    <Wrapper>
      <h3>Hot spots</h3>
      <WrapperSpot>
        <ul>
          {spots.map((spot, index) => {
            return (
              <li key={`spot-${index}`}>
                <p>{spot}</p>
              </li>
            );
          })}
        </ul>
      </WrapperSpot>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  h3 {
    text-align: center;
  }
`;

const WrapperSpot = styled.div`
  padding: 20px;
  li {
    list-style-type: circle;
  }
`;

export default ChartCovidHotSpot;
