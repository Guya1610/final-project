import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <p>Header</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export default Header;
