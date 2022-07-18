import styled from 'styled-components';

export const FieldsetRegister = styled.fieldset`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  width: 65%;
  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 8px;
  padding: 20px;
  margin-top: 80px;
  font-size: 28px;
`;

export const Input = styled.input`
  height: 25px;
  width: 90%;
  font-size: 18px;
  padding: 3px;
  background-color: #ffffff;
  border: 0;
  border-bottom: 1px solid rgba(255, 104, 89);
  border-left: 2px solid rgba(255, 104, 89);
  color: black;
  text-align: center;
  outline: none;
`;

export const Select = styled.select`
  height: 31px;
  outline: none;
  border: 0;
  border-bottom: 1px solid rgba(255, 104, 89);
  border-left: 2px solid rgba(255, 104, 89);
  background: #ffffff;
  padding: 3px;
  font-size: 18px;
`;

export const Button = styled.button`
  display: inline-block;
  width: 200px;
  height: 38px;
  border: 0;
  border-radius: 8px;
  font-weight: bold;
  color: #000000;
  background: rgba(255, 104, 89);
  font-size: 15px;
  padding: 5px;
  margin-left: 15px;

  &:disabled {
    background: rgba(255, 104, 89, 0.4);
    border: 2px solid rgba(255, 104, 89, 0.4);
  }

  &:hover,
  &:active {
    box-shadow: rgba(255, 104, 89, 0.4) 0 3px 8px;
  }
`;

export const FieldsetTable = styled.fieldset`
  margin: 0 auto;
  width: 65%;
  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 8px;
  padding: 20px;
  margin-top: 80px;
  font-size: 28px;
`;
