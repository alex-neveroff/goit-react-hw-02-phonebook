import styled from '@emotion/styled';

export const PhonebookForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
  font-weight: bold;
`;

export const Field = styled.input`
  height: 30px;
  padding-left: 10px;
  border: none;
  border-radius: 7px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
    outline: none;
  }
`;

export const SubmitContact = styled.button`
  height: 30px;
  border: none;
  border-radius: 7px;
  margin-top: 15px;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
  }
  &:active {
    transform: scale(0.95);
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.4);
  }
`;
