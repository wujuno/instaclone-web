import styled from "styled-components";
import { isLoggedInVar } from "../apollo";
import { darkModeVar } from "../apollo";

const Title = styled.h1`
  
`;

const Container = styled.div`
  
`;

function Login() {
  return (
    <Container>
      <Title>Login</Title>
      <button onClick={() => isLoggedInVar(true)}>Log in now!</button>
      <button onClick={() => darkModeVar(true)}>To dark</button>
      <button onClick={() => darkModeVar(false)}>To light</button>
    </Container>
  );
}
export default Login;