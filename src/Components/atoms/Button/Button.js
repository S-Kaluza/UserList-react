import styled from 'styled-components';

const StyledButton = styled.button`
  display: initial;
  position: absolute;
  color: white;
  right: 29%;
  width: 2em;
  height: 2em;
  background-color: black;
  border-radius: 50px;
  border: none;
  margin-bottom: inherit;
  float: right;
`;

const Button = (props) => <StyledButton {...props}>X</StyledButton>;

export default Button;
