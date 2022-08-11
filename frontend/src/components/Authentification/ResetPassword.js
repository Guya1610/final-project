import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordReset } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";
import styled from "styled-components";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
  }, [user, loading]);

  const submitForm = async (e) => {
    e.preventDefault();

    sendPasswordReset(email);
  };

  return (
    <Wrapper>
      <WrapperForm>
        <h2>Password assistance</h2>
        <p>
          Enter the email address associated with your Cov1d Travel account. If
          it's associated to an account we will send you a link to reset your
          password.
        </p>
        <EmailInput
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />

        <button onClick={() => submitForm()}>Forgot Password</button>
      </WrapperForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 75vh;

  max-width: 800px;
  margin: 0 auto;

  h2 {
    padding: 20px;
  }

  p {
    padding: 20px;
  }
`;

const WrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: 1px solid white;
  padding: 20px;
`;

const EmailInput = styled.input`
  margin: 20px;
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

export default ResetPassword;
