import styled from 'styled-components';

export const ContainerCentralizado = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFFFFF;
  border: 2px solid #000000;
  color: white;
  width: 25%;
  height: 500px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  `;

export const Input = styled.input`
  display: block;
  margin: 0 auto;
  height: 25px;
  width: 90%;
  font-size: 18px;
  padding: 3px;
  background-color: #FFFFFF;
  border: 0;
  border-bottom: 1px solid rgba(255, 104, 89);
  border-left: 2px solid rgba(255, 104, 89);
  color: black;
  text-align: center;
  outline: none;
  
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 70%;
  height: 40px;
  border: 0;
  border-radius: 8px;
  margin-top: 50px;
  font-weight: bold;
  color: #000000;
  background: rgba(255, 104, 89);
  cursor: pointer;


  &:hover,
  &:active {
    box-shadow: rgba(255, 104, 89, .4) 0 3px 8px;
  }

  &:disabled {
      background: rgba(255, 104, 89, .4);
      border: 2px solid rgba(255, 104, 89, .4);
    }
`;

export const BannerLogo = styled.img`
  width: 70%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 40px;
  cursor: pointer;
`;
