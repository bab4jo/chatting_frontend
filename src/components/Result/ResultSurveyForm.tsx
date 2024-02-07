import * as r from "../Result/_style/ResultSurveyFormStyle";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ResultSurveyForm = () => {
  const navigate = useNavigate();
  const [a1, setA1] = useState<number>(0);
  const [a2, setA2] = useState<number>(0);
  const [a3, setA3] = useState<number>(0);
  const [a4, setA4] = useState<number>(0);
  const [a5, setA5] = useState<number>(0);
  const [name, setName] = useState<string>("");

  const submitSurvey = () => {
    if (a1 !== 0 && a2 !== 0 && a3 !== 0 && a4 !== 0 && a5 !== 0) {
      axios
        .post("https://i10c111.p.ssafy.io/api/v1/surveys", {
          q1: a1,
          q2: a2,
          q3: a3,
          q4: a4,
          q5: a5,
          participant: name,
        })
        .then((res) => {
          navigate("/info");
        })
        .catch((error) => alert("에러가 발생하였습니다."));
    } else {
      alert("설문을 완료해주세요!");
    }
  };

  return (
    <r.Container>
      <r.SubTitle>5초 설문 하기</r.SubTitle>
      <r.Title>설문완료 후 프로젝트에 기여해보세요!</r.Title>

      <r.Question>
        1. 만약 반려견을 키우기로 마음을 먹으셨다면, 어떠한 방법으로 아이를
        데려오고 싶으신가요?
      </r.Question>
      <r.AnswerWrap>
        <label htmlFor="q11">
          <input
            type="radio"
            id="q11"
            name="q1"
            value={1}
            onChange={(e) => setA1(Number(e.target.value))}
          />
          지인을 통해 분양
        </label>
        <label htmlFor="q12">
          <input
            type="radio"
            id="q12"
            name="q1"
            value={2}
            onChange={(e) => setA1(Number(e.target.value))}
          />
          펫샵 등 동물판매업소
        </label>
        <label htmlFor="q13">
          <input
            type="radio"
            id="q13"
            name="q1"
            value={3}
            onChange={(e) => setA1(Number(e.target.value))}
          />
          유기동물 보호소(지역/사설 보호소)
        </label>
      </r.AnswerWrap>

      <r.Question>
        2. (1번 1,2 선택) 왜 유기동물 보호소는 선호하지 않으시나요?
      </r.Question>
      <r.AnswerWrap>
        <label htmlFor="q21">
          <input
            type="radio"
            id="q21"
            name="q2"
            value={1}
            onChange={(e) => setA2(Number(e.target.value))}
          />
          내가 원하는 조건에 딱 맞는 유기견이 없을 것 같다
        </label>
        <label htmlFor="q22">
          <input
            type="radio"
            id="q22"
            name="q2"
            value={2}
            onChange={(e) => setA2(Number(e.target.value))}
          />
          입양 방법이나 절차를 잘 모른다
        </label>
        <label htmlFor="q23">
          <input
            type="radio"
            id="q23"
            name="q2"
            value={3}
            onChange={(e) => setA2(Number(e.target.value))}
          />
          질병이 있을 것 같다
        </label>
        <label htmlFor="q24">
          <input
            type="radio"
            id="q24"
            name="q2"
            value={4}
            onChange={(e) => setA2(Number(e.target.value))}
          />
          행동 문제가 있을 것 같다
        </label>
      </r.AnswerWrap>

      <r.Question>
        3. (1번 3 선택) 유기동물 보호소에서의 입양 절차에 대해 어느 정도 알고
        계신가요?
      </r.Question>
      <r.AnswerWrap>
        <label htmlFor="q31">
          <input
            type="radio"
            id="q31"
            name="q3"
            value={1}
            onChange={(e) => setA3(Number(e.target.value))}
          />
          상세하게 알고 있음
        </label>
        <label htmlFor="q32">
          <input
            type="radio"
            id="q32"
            name="q3"
            value={2}
            onChange={(e) => setA3(Number(e.target.value))}
          />
          대략 어느 정도 알고 있음
        </label>
        <label htmlFor="q33">
          <input
            type="radio"
            id="q33"
            name="q3"
            value={3}
            onChange={(e) => setA3(Number(e.target.value))}
          />
          거의 모르지만 조금 알고 있음
        </label>
        <label htmlFor="q34">
          <input
            type="radio"
            id="q34"
            name="q3"
            value={4}
            onChange={(e) => setA3(Number(e.target.value))}
          />
          잘 모름
        </label>
      </r.AnswerWrap>

      <r.Question>
        4. (3번 1, 2 선택) 입양 절차의 복잡도에 대해 어떻게 생각하시나요?
      </r.Question>
      <r.AnswerWrap>
        <label htmlFor="q41">
          <input
            type="radio"
            id="q41"
            name="q4"
            value={1}
            onChange={(e) => setA4(Number(e.target.value))}
          />
          매우 복잡하다고 생각함
        </label>
        <label htmlFor="q42">
          <input
            type="radio"
            id="q42"
            name="q4"
            value={2}
            onChange={(e) => setA4(Number(e.target.value))}
          />
          어느 정도 복잡하다고 생각함
        </label>
        <label htmlFor="q43">
          <input
            type="radio"
            id="q43"
            name="q4"
            value={3}
            onChange={(e) => setA4(Number(e.target.value))}
          />
          그렇게 복잡하지 않다고 생각함
        </label>
        <label htmlFor="q34">
          <input
            type="radio"
            id="q44"
            name="q4"
            value={4}
            onChange={(e) => setA4(Number(e.target.value))}
          />
          간단하다고 생각함
        </label>
      </r.AnswerWrap>

      <r.Question>
        5. (공통) 유기견을 입양한 사람들의 이야기들에 대해서 어떻게
        생각하시나요?
      </r.Question>
      <r.AnswerWrap>
        <label htmlFor="q51">
          <input
            type="radio"
            id="q51"
            name="q5"
            value={1}
            onChange={(e) => setA5(Number(e.target.value))}
          />
          매우 관심이 있음
        </label>
        <label htmlFor="q52">
          <input
            type="radio"
            id="q52"
            name="q5"
            value={2}
            onChange={(e) => setA5(Number(e.target.value))}
          />
          어느 정도 관심이 있음
        </label>
        <label htmlFor="q53">
          <input
            type="radio"
            id="q53"
            name="q5"
            value={3}
            onChange={(e) => setA5(Number(e.target.value))}
          />
          조금 관심이 있음
        </label>
        <label htmlFor="q54">
          <input
            type="radio"
            id="q54"
            name="q5"
            value={4}
            onChange={(e) => setA5(Number(e.target.value))}
          />
          관심 없음
        </label>
      </r.AnswerWrap>
      <r.Question>6. 메타모스트 아이디를 입력해주세요</r.Question>
      <r.Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="ㅇㅇㅇ[광주_1반_C111]"
      />
      <r.Button type="button" onClick={submitSurvey}>
        설문 제출하기
      </r.Button>
    </r.Container>
  );
};

export default ResultSurveyForm;
