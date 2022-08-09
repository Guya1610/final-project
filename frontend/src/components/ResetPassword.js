import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordReset } from "../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
  }, [user, loading]);
  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />

        <button
          className="login__btn login__google"
          onClick={() => sendPasswordReset(email)}
        >
          Forgot Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
