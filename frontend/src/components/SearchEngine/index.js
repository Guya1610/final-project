import styled from "styled-components";
import { RestrictionsContext } from "../Contexts/RestrictionsContext";
import { UserContext } from "../Contexts/UserContext";
import { useContext, useCallback, useEffect } from "react";
import { debounce_leading } from "../../helper";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
const SearchEngine = () => {
  const {
    state: { restrictions, location, autoComplete },
    actions: { setStatus, setLocation, getRestrictions, getAutoComplete },
  } = useContext(RestrictionsContext);
  const {
    state: { watchlist,user },
    actions: { updateWatchList },
  } = useContext(UserContext);

  const handleSubmit = async (e, value) => {
    const restrictionsSearch = {
      city: value.iataCode,
      country: value.address.countryCode,
    };
    e.preventDefault();
    await setLocation({ location: value.name });
    await getRestrictions(restrictionsSearch);
  };

  useEffect(() => {
    location && getAutoComplete();
  }, [location]);

  const handleChange = async (e, key) => {
    e.preventDefault();
    await setLocation({ [key]: e.target.value });
  };

  const optimizedCalling = useCallback(debounce_leading(handleChange), []);

  const isSaved = (areaCode) => {
    const issaved =
      watchlist && watchlist.find((e) => e === areaCode) ? true : false;

    return issaved;
  };

  return (
    <Wrapper>
      <h2> Search restrictions</h2>
      <WrapperForm>
        <p>
          Search by airport name or city name and learn more about restrictions
          and requirements for safely travel around the globe
        </p>
        <form>
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
        {restrictions && (
          <>
            <WrapperHeader>
              <h2>
                {location &&
                  location.location &&
                  "Travel restrictions for: " + location.location}
              </h2>
              <div>
                <button
                  onClick={() =>
                    isSaved(restrictions.area.code)
                      ? updateWatchList(restrictions.area.code, "remove")
                      : updateWatchList(restrictions.area.code, "add")
                  }
                >
                  {user && isSaved(restrictions.area.code) ? (
                    <>
                      Saved <FaStar />
                    </>
                  ) : (
                    <>
                      Save <FaRegStar />
                    </>
                  )}
                </button>
                <NavLink to={`/dashboard/${restrictions.area.code}/${null}`}>
                  <MdSpaceDashboard />
                </NavLink>
              </div>
            </WrapperHeader>

            <div>
              <h3>Summary</h3>
              {restrictions && restrictions.summary.text}
              <h3>Risk level</h3>
              {restrictions && restrictions.diseaseRiskLevel.text}
              <h3>Hotspots</h3>
              {restrictions && restrictions.hotspots.text}

              {restrictions && restrictions.areaRestrictions && (
                <>
                  <h3>Area Restrictions</h3>
                  {restrictions.areaRestrictions.map((restriction, index) => {
                    return (
                      <p key={"restriction-area-" + index}>
                        {restriction.text}
                      </p>
                    );
                  })}
                </>
              )}
              <h3>Entry:</h3>
              {restrictions && restrictions.areaAccessRestriction.entry.text}

              <h3>Exit:</h3>
              {restrictions && restrictions.areaAccessRestriction.exit.text}

              <h3>Masks:</h3>
              {restrictions && restrictions.areaAccessRestriction.masks.text}

              <h3>transportation:</h3>
              {restrictions &&
                restrictions.areaAccessRestriction.transportation.text}

              <h3>travelQuarantineModality:</h3>
              {restrictions &&
                restrictions.areaAccessRestriction.travelQuarantineModality
                  .text}

              <h3>travelTest:</h3>
              {restrictions &&
                "Required: " +
                  restrictions.areaAccessRestriction.travelTest.isRequired}

              <h3>travelVaccination:</h3>
              {restrictions &&
                "Required: " +
                  restrictions.areaAccessRestriction.travelVaccination
                    .isRequired}
            </div>
          </>
        )}
      </WrapperResults>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  min-height: 100vh;
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

const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    outline: none;
  }
`;

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
