import 'Views/App.css';
import { myData } from 'data/data';
import 'Components/molecules/UserListItem/UserListItem';
import { UserListItem } from 'Components/molecules/UserListItem/UserListItem';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'Assets/styles/globalStyles';
import theme from 'Assets/styles/theme';
import React, { useState, useEffect } from 'react';

const Container = styled.div`
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  min-with: 100vw;
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;

const Wrapper = styled.div`
  background-color: white;
  width: 50%;
  min-height: 100%
  padding: 20px;
  padding-left: 0px;
  border-radius: 25px;
  box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.3);
`;

const mockApi = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (myData) {
        resolve([...myData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UserList = () => {
  let [user, setUser] = useState([]);
  let [isLoading, setLoadingState] = useState(true);

  useEffect(() => {
    mockApi()
      .then((data) => {
        setLoadingState(false);
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = (userId) => {
    const filteredUsers = user.filter((data) => data.id != userId);
    setUser(filteredUsers);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Wrapper>
          <h1>{isLoading ? 'Loading...' : 'Users: '}</h1>
          <ul>
            {user.map((userData) => (
              <UserListItem deleteUser={deleteUser} userData={userData} key={userData.id} />
            ))}
          </ul>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};

export default UserList;
