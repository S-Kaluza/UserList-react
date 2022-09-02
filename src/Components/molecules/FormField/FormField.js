import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Label from 'Components/atoms/Label/Label';
import Input from 'Components/atoms/Input/Input';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5px;

  ${Label} {
    margin-left: 10px;
  }
`;

const FormField = ({ label, name, id, type = 'text', onChange, value }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} name={name} value={value} onChange={onChange} />
    </Wrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
