import styled from '@emotion/styled';
import { transitions } from 'Variables/transitions';
import { colors } from 'Variables/colors';

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
  box-shadow: 0px 0px 10px ${colors.mainShadow};
  transition: box-shadow ${transitions.transition};
  &:focus {
    box-shadow: 0px 0px 10px ${colors.darkShadow};
    outline: none;
  }
`;

export const SubmitContact = styled.button`
  height: 30px;
  border: none;
  border-radius: 7px;
  margin-top: 15px;
  background-color: ${colors.mainShadow};
  box-shadow: 5px 5px 5px ${colors.mainShadow};
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: box-shadow ${transitions.transition},
    background-color ${transitions.transition},
    transform ${transitions.transition};
  &:hover {
    background-color: ${colors.mainShadow};
    box-shadow: 5px 5px 5px ${colors.focusShadow};
  }
  &:active {
    transform: scale(0.95);
    box-shadow: 1px 2px 2px ${colors.focusShadow};
  }
`;
