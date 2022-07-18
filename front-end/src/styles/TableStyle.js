import styled from 'styled-components';

export const TableContent = styled.table`
width: 100%;
background: #FFFFFF;

td {
  height: 25px;
  font-size: 18px;
  padding: 3px;
}

td:nth-of-type(1) {
  background: #FF5757;
  text-align: center;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

td:nth-of-type(2) {
  background: #F2EFEB;
}

td:nth-of-type(3) {
  background: #F2EFEB;
}

td:nth-of-type(4) {
  background: #FFBD59;
  text-align: center;
}

td:nth-of-type(5) {
  text-align: center;
}

th {
  height: 25px;
  font-size: 18px;
}
`;

export const Button = styled.button`
  background: rgb(172, 32, 61);
  height: 31px;
  width: 100px;
  border: 0;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: rgb(146, 27, 51);
    box-shadow: rgb(146, 27, 51) 0 3px 8px;
  }
`;
