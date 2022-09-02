import AddButton from 'Components/atoms/AddButton/AddButton';
import FormField from '../FormField/FormField';
import styled from 'styled-components';

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

const Form = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <Wrapper as="form" onSubmit={handleAddUser}>
      <h1>Dodaj nowego użytkownika</h1>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="attendants" id="attendants" name="attendants" value={formValues.attendants} onChange={handleInputChange} />
      <FormField label="Grade" id="grade" name="grade" value={formValues.grade} onChange={handleInputChange} />
      <AddButton type="submit" />
    </Wrapper>
  );
};

export default Form;
