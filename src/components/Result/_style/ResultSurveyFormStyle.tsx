import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const SubTitle = styled.div`
  font-weight: 400;
  font-size: 1em;
  color: #7b7b7b;
  margin-top: 21px;
`;

export const Title = styled.div`
  margin-top: 10px;
  font-weight: 500;
  font-size: 1.2em;
  margin-bottom: 21px;
`;

export const Question = styled.div`
  margin-bottom: 10px;
  line-height: 1.1;
`;

export const AnswerWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  label {
    margin-bottom: 4px;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #cbcbcb;
  border-radius: 5px;
  height: 40px;
  padding: 10px;
`;

export const Button = styled.button`
  width: 100%;
  border-radius: 5px;
  height: 40px;
  margin-top: 30px;
  background-color: #ff9232;
  color: #fff;
`;
