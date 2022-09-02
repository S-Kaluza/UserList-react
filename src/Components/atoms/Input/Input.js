import styled from 'styled-components';
import theme from 'Assets/styles/theme';

const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid ${theme.colors.darkPurple};
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: ${({ isTextArea }) => (isTextArea ? '15px' : '25px')};
  font-size: ${({ theme }) => theme.fontSize.l};
  resize: none;

  &focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.03);
  }
`;

export default Input;
