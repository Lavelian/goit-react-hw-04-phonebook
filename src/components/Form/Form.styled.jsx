import styled from 'styled-components';
import { Form } from 'formik';

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  & input {
    margin-top: 5px;
    display: block;
    width: 200px;
  }
`;

export const Button = styled.button`
  text-decoration: none;
  display: flex;
  width: 100px;

  color: white;

  margin-top: 10px;

  border-radius: 10px;

  background-image: linear-gradient(
    to right,
    #9eefe1 0%,
    #4830f0 51%,
    #9eefe1 100%
  );
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: 0.5s;

  :hover {
    background-position: right center;
  }
`;
