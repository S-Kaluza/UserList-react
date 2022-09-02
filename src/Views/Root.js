import 'Views/App.css';
import { myData } from 'data/data';
import 'Components/molecules/UserListItem/UserListItem';
import { UserListItem } from 'Components/molecules/UserListItem/UserListItem';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'Assets/styles/globalStyles';
import theme from 'Assets/styles/theme';
import React, { useState, useEffect } from 'react';
import FormField from 'Components/molecules/FormField/FormField';
import AddButton from 'Components/atoms/AddButton/AddButton';
import { Button } from 'style-components';
import MyUserList from 'Components/molecules/UserList/UserList';
import Form from 'Components/molecules/Form/Form';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

const Container = styled.div`
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  min-with: 100vw;
  width: 100%;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  position: relative;
  background-color: white;
  width: 50%;
  min-height: 100vh
  padding: 20px;
  padding-left: 0px;
  border-radius: 25px;
  box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.3);
`;

const StyledListElement = styled.li`
  display: inline-block;
  position: sticky;
  left: 10px;
  background-color: gold;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 7px;
  border: 1px solid black;
  text-align: center;
  width: 15vw;
  height: 3vw;
`;

const StyledNavbar = styled.div`
  background-color: darkgray;
  position: sticky;
  display: flex;
  top: 0;
  min-height: 100%;
  width: 100%;
  border-bottom: 2px solid black;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: block;
  width: 15vw;
  height: 3vw;
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
  const [user, setUser] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  const [formValues, setFormValues] = useState({
    name: '',
    attendants: '',
    grade: '',
  });

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

  const addUser = (name, grade, attendants) => {
    let temp = user.map((data) => data);
    let id = user[user.length - 1].id + 1;
    temp.push({ name: name, grade: grade, attendants: attendants, id: id });
    setUser(temp);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendants: formValues.attendants,
      grade: formValues.grade,
      id: user[user.length - 1].id + 1,
    };

    setFormValues({
      name: '',
      attendants: '',
      grade: '',
    });

    setUser([...user, newUser]);
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledNavbar>
          <ul>
            <StyledListElement>
              <StyledLink to={`/addUser`}>Add user</StyledLink>
            </StyledListElement>
            <StyledListElement>
              <StyledLink to={`/`}>Home</StyledLink>
            </StyledListElement>
          </ul>
        </StyledNavbar>
        <Container>
          {/* <StyledNavbar>
            <StyledLink to={`/addUser`} marginT="90px">
              Add User
            </StyledLink>
            <StyledLink to={`/`}>Home</StyledLink>
          </StyledNavbar> */}
          <Routes>
            <Route path="/addUser" element={<Form handleAddUser={handleAddUser} formValues={formValues} handleInputChange={handleInputChange} />} />
            <Route path="/" element={<MyUserList user={user} deleteUser={deleteUser} isLoading={isLoading} />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </Router>
  );
};

export default UserList;
