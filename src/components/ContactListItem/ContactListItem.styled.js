import styled from '@emotion/styled';

export const ContactsItem = styled.li`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr;
`;

export const ContactName = styled.p`
  font-size: 18px;
`;

export const ContactNumber = styled.p`
  font-size: 18px;
  justify-self: center;
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  width: 24px;
  height: 24px;
  border: none;
  padding: 0;
  background-color: transparent;
  justify-self: end;
  color: red;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
    outline: none;
  }
  &:active {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const Cross = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const CrossLine = styled.path`
  stroke: currentColor;
`;
