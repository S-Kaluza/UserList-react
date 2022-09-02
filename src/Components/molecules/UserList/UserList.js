import styled from 'styled-components';
import { UserListItem } from '../UserListItem/UserListItem';

const Wrapper = styled.div`
  position: static;
  background-color: white;
  width: 50%;
  min-height: 100vh
  padding: 20px;
  padding-left: 0px;
  border-radius: 25px;
  box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.3);
`;

const MyUserList = (props) => {
  return (
    <Wrapper>
      <h1>{props.isLoading ? 'Loading...' : 'Users: '}</h1>
      <ul>
        {props.user.map((userData) => (
          <UserListItem deleteUser={props.deleteUser} userData={userData} key={userData.id} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default MyUserList;
