import styled from 'styled-components';

const StyledButton = styled.button`
  display: initial;
  position: static;
  color: white;
  width: 2em;
  height: 2em;
  background-color: black;
  border-radius: 50px;
  border: none;
  margin-bottom: inherit;
  float: right;
`;

const DeleteButton = (props) => <StyledButton {...props}>X</StyledButton>;

export default DeleteButton;
