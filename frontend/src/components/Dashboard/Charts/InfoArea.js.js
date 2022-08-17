import styled from "styled-components";

const InfoArea = ({ data }) => {
  return (
    <Wrapper>
      <h3>Location</h3>
      <p>
        {data.areaType}: {data.name} ({data.code})
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
`;

export default InfoArea;
