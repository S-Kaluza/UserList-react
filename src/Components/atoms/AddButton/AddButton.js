import styled from 'styled-components';

const StyledButton = styled.button`
  height: 50px;
  width: 250px;
  margin: 15px 0 15px 0;
  border-radius: 15px;
  border: 1px solid black;
  &:hover {
    background-color: white;
    cursor: pointer;
  }
`;

const AddButton = (props) => <StyledButton {...props}>Add</StyledButton>;

export default AddButton;
