import styled from "styled-components";
import Marquee from "react-fast-marquee";
import { useContext, useEffect } from "react";
import { NewsContext } from "../Contexts/NewsContext";

const News = () => {
  const {
    state: { news },
    actions: { getNews },
  } = useContext(NewsContext);

  useEffect(() => {
    const fetchNews = async () => {
      return await getNews();
    };
    fetchNews();
  }, []);

  return (
    <Wrapper>
      <Marquee
        gradient={false}
        style={{ overflowY: "hidden" }}
        speed={1}
        loop={0}
      >
        {news &&
          news.map((stat) => {
            return (
              <div key={`wrapper-${stat.Country}`}>
                <Text key={`country-${stat.Country}`}>{stat.Country}:</Text>
                <Text key={`active-${stat.Country}`}>
                  Active:
                  {stat.NewConfirmed}
                </Text>
                <Text key={`deaths-${stat.Country}`}>
                  Deaths:{stat.NewDeaths} -
                </Text>
              </div>
            );
          })}
      </Marquee>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: var(--header-height);
  background-image: linear-gradient(
    to top,
    rgba(17, 17, 17, 0.95),
    rgba(17, 17, 17)
  );
  z-index: 9999;

  :first-child {
    color: red;
  }

  p:last-child {
    padding-right: 50px;
  }
`;
const Text = styled.p`
  padding: 5px;
`;

export default News;
