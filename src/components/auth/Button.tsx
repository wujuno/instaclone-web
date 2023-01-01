import styled from "styled-components";

const SButton = styled.input`
  border: none;
  border-radius: 3px;
  margin-top: 12px;
  background-color: ${(props) => props.theme.accent};
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  width: 100%;
`;
type ButtonProps = {
    type:string;
    value:string;
}

function Button(props:ButtonProps) {
  return <SButton {...props} />;
}
export default Button;