import styled from "styled-components";
import { RestrictionsContext } from "../Contexts/RestrictionsContext";
import { useContext, useCallback, useEffect } from "react";
import { debounce_leading } from "../../helper";

const SearchEngine = () => {
  const {
    state: { restrictions, location, autoComplete },
    actions: { setStatus, setLocation, getRestrictions, getAutoComplete },
  } = useContext(RestrictionsContext);

  const handleSubmit = async (e, value) => {
    const restrictionsSearch = {
      city: value.iataCode,
      country: value.address.countryCode,
    };
    e.preventDefault();
    await getRestrictions(restrictionsSearch);
  };

  useEffect(() => {
    // a condition may be added in case it shouldn't be executed every time
    location && getAutoComplete();
  }, [location]);

  const handleChange = (e, key) => {
    e.preventDefault();
    setLocation({ [key]: e.target.value });
  };

  const optimizedCalling = useCallback(debounce_leading(handleChange), []);

  return (
    <Wrapper>
      <h2> Search restrictions</h2>
      <WrapperForm>
        <p>
          Search by airport name or city name and learn more about restrictions
          and requirements for safely travel around the globe
        </p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              type="radio"
              id="city"
              name="baseSearch"
              value={"0"}
              onChange={(e) => {
                handleChange(e, "baseUrl");
              }}
              checked={location.baseUrl === "0"}
            />
            <label htmlFor="city">City</label>

            <input
              type="radio"
              id="airport"
              name="baseSearch"
              value={"1"}
              onChange={(e) => {
                handleChange(e, "baseUrl");
              }}
              checked={location.baseUrl === "1"}
            />
            <label htmlFor="airport">Airport</label>
          </div>
          <div>
            <input
              type="text"
              name="city"
              onChange={(e) => optimizedCalling(e, "location")}
            />

            {autoComplete && autoComplete.length > 0 && !restrictions && (
              <WrapperSuggestions>
                {autoComplete.map((value, index) => {
                  return (
                    <button
                      key={`autocomplete-${index}`}
                      onClick={(e) => handleSubmit(e, value)}
                    >
                      {value.name}
                    </button>
                  );
                })}
              </WrapperSuggestions>
            )}
          </div>

          <button type="submit">Search</button>
        </form>
      </WrapperForm>
      <WrapperResults>
        <h2>
          {location &&
            location.location &&
            "Travel restrictions for:" + location.location}
        </h2>

        <div>
          <h3>Summary</h3>
          {restrictions && restrictions.summary.text}
          <h3>Risk level</h3>
          {restrictions && restrictions.diseaseRiskLevel.text}
          <h3>Hotspots</h3>
          {restrictions && restrictions.hotspots.text}
          <h3>Area Restrictions</h3>
          {restrictions &&
            restrictions.areaRestrictions.map((restriction) => {
              return <p>{restriction.text}</p>;
            })}
          <h3>Area Access Restriction</h3>
          <h4>Entry:</h4>
          {restrictions && restrictions.areaAccessRestriction.entry.text}

          <h4>Exit:</h4>
          {restrictions && restrictions.areaAccessRestriction.exit.text}

          <h4>Masks:</h4>
          {restrictions && restrictions.areaAccessRestriction.masks.text}

          <h4>transportation:</h4>
          {restrictions &&
            restrictions.areaAccessRestriction.transportation.text}

          <h4>travelQuarantineModality:</h4>
          {restrictions &&
            restrictions.areaAccessRestriction.travelQuarantineModality.text}

          <h4>travelTest:</h4>
          {restrictions &&
            "Required: " +
              restrictions.areaAccessRestriction.travelTest.isRequired}

          <h4>travelVaccination:</h4>
          {restrictions &&
            "Required: " +
              restrictions.areaAccessRestriction.travelVaccination.isRequired}
        </div>
      </WrapperResults>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
`;
const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  outline: 1px solid white;

  form {
    padding: 20px 0;
    text-align: center;
    div {
      padding: 10px;
    }
  }

  position: relative;
`;

const WrapperResults = styled.div``;

const WrapperSuggestions = styled.div`
  display: flex;
  flex-direction: column;
  background: black;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);

  button {
    margin-top: 5px;
  }
`;

export default SearchEngine;
