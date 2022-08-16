import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";

const Login = ({ userlog, loginUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading ) {
      // navigate("/");
    }
  }, [user]);

  return (
    <Wrapper>
      <WrapperForm>
        <h2>Login</h2>
        <FormInput
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <FormInput
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={() => logInWithEmailAndPassword(email, password)}>
          Login
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            signInWithGoogle();
            loginUser({user: user});
          }}
        >
          Login with Google
        </button>

        <WrapperNotRegister>
          <Link to="/reset">Forgot Password</Link>

          <p>
            Don't have an account? <Link to="/register">Register Now</Link>.
          </p>
        </WrapperNotRegister>
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

  button {
    width: 100%;
    max-width: 400px;
    text-align: center;
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

const WrapperNotRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

const FormInput = styled.input`
  margin-bottom: 10px;
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

export default Login;
