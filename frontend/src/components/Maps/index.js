import styled from "styled-components";
import Globe from "react-globe.gl";
import countries from "./Countries";
import { useRef, useState, useEffect, useContext } from "react";
import { StatsContext } from "../Contexts/StatsContext";

const Map = () => {
  const globeEl = useRef();

  const [marker, setMarker] = useState([]);

  const {
    state: { stats },
    actions: { getStats },
  } = useContext(StatsContext);

  useEffect(() => {
    // load data to display in map
    const getStatsfromApi = async () => {
      await getStats();
    };
    getStatsfromApi();
  }, []);

  useEffect(() => {
    stats && convertData();
  }, [stats]);

  const convertData = async () => {
    let markers = [];

    stats.map((stat) => {
      countries.map((country) => {
        if (stat.Country.toLowerCase() === country.country.toLowerCase()) {
          markers.push({ ...country, ...stat, color: "white" });
        }
      });
    });

    setMarker(markers);
  };

  const colorWarning = (cases) => {
    switch (true) {
      case cases <= 0: {
        return "white";
      }
      case cases > 0 && cases < 50000: {
        return "yellow";
      }
      case cases > 50000 && cases < 100000: {
        return "#DE970B";
      }
      case cases > 100000 && cases < 200000: {
        return "#ff4500";
      }
      case cases > 200000 && cases < 500000: {
        return "orange";
      }
      case cases > 500000 && cases < 1000000: {
        return "#ff0000";
      }
      case cases > 1000000: {
        return "#c50000";
      }
      default:
        return "white";
    }
  };

  return (
    <Wrapper>
      <WrapperMap>
        <WrapperSideMenu>
          <h2>Actual situation Covid-19</h2>
          <form>
            <label htmlFor={"city"}>City</label>
            <input type={"text"} name={"city"} id={"city"} />
            <button type="submit">Find</button>
          </form>
        </WrapperSideMenu>
        {marker && (
          <GlobleWrapper>
            <Globe
              ref={globeEl}
              height={window.innerHeight - 50}
              onGlobeReady={() =>
                globeEl.current.pointOfView(
                  { lat: 56.130366, lng: -106.34677099999999, altitude: 1 },
                  1000
                )
              }
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              // labels
              labelsData={marker}
              labelLabel={(d) =>
                "Total active cases: " +
                (d.TotalConfirmed - d.TotalDeaths - d.TotalRecovered)
              } //tooltips
              labelLat={(d) => d.lat}
              labelLng={(d) => d.lng}
              labelText={(d) => d.country}
              labelSize={(d) => 0.5}
              labelDotRadius={(d) => 0.5}
              labelColor={(d) =>
                colorWarning(
                  d.TotalConfirmed - d.TotalDeaths - d.TotalRecovered
                )
              }
              labelResolution={2}
            />
          </GlobleWrapper>
        )}
      </WrapperMap>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  overflow-x: hidden;
`;

const WrapperMap = styled.div`
  display: flex;
  max-width: 100vw;
`;

const WrapperSideMenu = styled.div``;

const GlobleWrapper = styled.div`
  height: 90vh;
  overflow-x: hidden;
`;

export default Map;
