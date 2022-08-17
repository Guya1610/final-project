import { logout, auth } from "../../services/firebase";
import styled from "styled-components";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const redirectTo = useNavigate();
  const [userFirebase] = useAuthState(auth);

  const {
    state: { user, watchlist },
    actions: { getWatchList, updateWatchList, logoutUser },
  } = useContext(UserContext);

  useEffect(() => {
    const userLocalStorage = JSON.parse(window.localStorage.getItem("user"));
    !user && !userLocalStorage ? redirectTo("/login") : getWatchList();
  }, [user]);

  return (
    <Wrapper>
      <WraperHeader>
        <h2>Profile</h2>
        <button
          type="button"
          onClick={() => {
            logout();
            logoutUser();
            redirectTo("/");
          }}
        >
          Log Out
        </button>
      </WraperHeader>

      <Wraperinfos>
        {user && (
          <>
            <img
              src={userFirebase && userFirebase.photoURL}
              referrerPolicy="no-referrer"
              alt="profile image"
            />
            <div>
              <h3>Personal informations</h3>
              <p>Name: {user.name}</p>
              <p>Email:{user.email}</p>
            </div>
          </>
        )}
      </Wraperinfos>
      <WraperWatchList>
        <h3>Favorites location</h3>
        {watchlist && watchlist.length > 0 ? (
          watchlist.map((location, index) => {
            return (
              <NavLink key={`location-${index}`} to={`/dashboard/${location}/null`}>
                {location}
              </NavLink>
            );
          })
        ) : (
          <p>No location saved</p>
        )}
      </WraperWatchList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  padding: var(--page-horizontal-padding);
  min-height: 100vh;
`;

const WraperHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Wraperinfos = styled.div`
  display: flex;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  div {
    padding: 10px;
  }
  h3 {
    margin-bottom: 10px;
  }

  img {
    outline: 2px solid white;
  }
`;

const WraperWatchList = styled.div`
  padding: 20px;
  h3 {
    margin-bottom: 10px;
  }
`;

export default Profile;
