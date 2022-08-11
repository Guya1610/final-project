import styled from "styled-components";

import img from "../../assets/covidmap.jpg";

const History = () => {
  return (
    <Wrapper>
      <ImageBanner src={img} alt="Static map of covid status" />

      <h2>Background</h2>
      <br />
      <Text>
        On December 31, 2019, the World Health Organization (WHO) was informed
        of an outbreak of “pneumonia of unknown cause” detected in Wuhan City,
        Hubei Province, China – the seventh-largest city in China with 11
        million residents. As of January 23, there are over 800 cases of
        2019-nCoV confirmed globally, including cases in at least 20 regions in
        China and nine countries/territories. The first reported infected
        individuals, some of whom showed symptoms as early as December 8, were
        discovered to be among stallholders from the Wuhan South China Seafood
        Market. Subsequently, the wet market was closed on Jan 1. The virus
        causing the outbreak was quickly determined to be a novel coronavirus.
        On January 10, gene sequencing further determined it to be the new Wuhan
        coronavirus, namely 2019-nCoV, a betacoronavirus, related to the Middle
        Eastern Respiratory Syndrome virus (MERS-CoV) and the Severe Acute
        Respiratory Syndrome virus (SARSCoV). However, the mortality and
        transmissibility of 2019-nCoV are still unknown, and likely to vary from
        those of the prior referenced coronaviruses.
      </Text>
      <Text>
        Infected travelers (primarily air) are known to be responsible for
        introductions of the virus outside Wuhan. On Jan 13 Thailand reported
        the first international case outside China, while the first cases within
        China, but outside of Wuhan were reported on January 19, in Guangdong
        and Beijing. On January 20, China’s National Health Commission (NHC)
        confirmed that the coronavirus can be transmitted between humans. On the
        same day human infections with 2019-nCoV had also been confirmed in
        Japan and South Korea, and the following day cases in the U.S. and
        Taiwan were detected in travelers returning from Wuhan. On January 21
        multiple provinces in China were also reporting new cases and infection
        was confirmed in 15 healthcare workers, with six fatalities reported.
        Additional travel cases have now been confirmed in Hong Kong, Macau,
        Singapore and Vietnam. On Jan 22, a WHO emergency committee convened to
        discuss whether the outbreak should be classified as a public health
        emergency of international concern (PHEIC) under International Health
        Regulations, but were initially undecided due to lack of information,
        before deciding against the declaration.
      </Text>
      <Text>
        Of immediate concern is the risk of further transmission resulting from
        high travel volumes and mass gatherings in celebration of the Chinese
        New Year on January 24. In attempts to mitigate local transmission
        within China, unprecedented outbreak control strategies were implemented
        in (initially) three cities. On 23 January 2020, Wuhan suspended all
        public transport and air travel (in and out of the city), placing all 11
        million city residents under quarantine. On Jan 24, Huanggang and Ezhou,
        cities adjacent to Wuhan, will also be placed under a similar
        quarantine, with more cities in China now following suit. Further, many
        cities have canceled Chinese New Year celebrations.
      </Text>
      <Text>
        As Wuhan is a major air transportation hub in central China, various
        measures have been taken on a global scale to mitigate international
        spread. Targeted airport screening of passengers traveling from Wuhan
        was initiated as early as January 1 in Hong Kong and Macau. Taiwan,
        Singapore and Thailand starting to screen arriving passengers on January
        3. In the U.S., the CDC began entry screening of passengers on direct
        and connecting flights from Wuhan to the three main ports of entry on
        January 17, 2020, with Atlanta and Chicago soon to be added. On January
        23 the U.S. CDC raised its travel notice for Wuhan, China, to the
        highest of three levels. Additional Pacific and Asian countries
        including Malaysia, Sri Lanka, Bangladesh and India are now also
        conducting targeted passenger screening at airports.
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: var(--page-horizontal-padding);
  height:100%;
`;

const Text = styled.p`
  padding-bottom: 10px;
`;

const ImageBanner = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export default History;
