import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import DeleteButton from 'Components/atoms/DeleteButton/DeleteButton';
import theme from 'Assets/styles/theme';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid black;
  margin-bottom:25px;

  &::after:not(:last-child) { 
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgray;
`;

const Descript = styled.div`
  min-width: 30x;
  min-height: 30px;
  text-align: center;
  margin-right: 10px;
  margin-bottom: inherit;
`;

const Grade = styled.div`
  width: 5vw;
  height: 5vw;
  text-align: center;
  border: 2px solid black;
  border-radius: 75%;
  margin-right: 15px;
  margin-bottom: inherit;
  background-color: ${(props) => {
    if (parseInt(props.grade) >= 2 && parseInt(props.grade) < 3) return 'red';
    if (parseInt(props.grade) >= 3 && parseInt(props.grade) < 4) return 'green';
    if (parseInt(props.grade) >= 4 && parseInt(props.grade) < 5) return theme.colors.warning;
    if (parseInt(props.grade) === 5) return 'yellow';
  }};
`;

const GradeP = styled.p`
  display: block;
`;

const DescriptPName = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: left;
  width: 30vw;
`;

const DescriptPAttendants = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: left;
  width: 30vw;
  font-size: ${theme.fontSize.s};
`;

export function UserListItem(props) {
  return (
    <Wrapper>
      <Grade grade={props.userData.grade} haveBorder>
        <GradeP>{props.userData.grade}</GradeP>
      </Grade>
      <Descript isSquare>
        <DescriptPName>{props.userData.name}</DescriptPName>
        <DescriptPAttendants>attendants: {props.userData.attendants}</DescriptPAttendants>
      </Descript>
      <DeleteButton onClick={() => props.deleteUser(props.userData.id)} />
    </Wrapper>
  );
}

UserListItem.propTypes = {
  userData: propTypes.shape({
    name: propTypes.string.isRequired,
    grade: propTypes.string.isRequired,
    attendants: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
  }),
};
