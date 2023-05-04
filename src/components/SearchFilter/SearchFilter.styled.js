import styled from '@emotion/styled';

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
  margin-bottom: 20px;
  border: none;
  border-radius: 7px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
    outline: none;
  }
`;
