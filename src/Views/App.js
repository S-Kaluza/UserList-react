import 'Views/App.css';
import { myData } from 'data/data';
import 'Components/molecules/UserListItem/UserListItem';
import { UserListItem } from 'Components/molecules/UserListItem/UserListItem';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'Assets/styles/globalStyles';
import theme from 'Assets/styles/theme';

const Container = styled.div`
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  background-color: white;
  width: 50%;
  padding: 20px;
  border-radius: 25px;
  box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.3);
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Wrapper>
          <ul>
            {myData.map((userData) => (
              <UserListItem userData={userData} key={userData.id} />
            ))}
          </ul>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
