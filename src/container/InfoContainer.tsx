import { useNavigate } from "react-router-dom";
import * as i from "./_style/InfoContainerStyle";

const InfoContainer = () => {
  const navigate = useNavigate();

  const goMain = () => navigate("/");

  return (
    <i.Container>
      <i.Wrap>
        <i.Thank>
          설문에 응해 주셔서 감사합니다 :) <br /> - SSAFY 광주 1반 11팀 일동 -
        </i.Thank>
        <i.Image src="/img/Group%20215.png" alt="" />
        <i.Logo>Coming soon!</i.Logo>
        <i.BottomWrap>
          <div>[pawsitive 의 주요 기능]</div>
          <div>일관화되고 편리한 입양 절차</div>
          <div>나에게 딱 맞는 유기견 추천 서비스</div>
          <div>행동 및 건강상태에 따른 맞춤형 교육 컨텐츠 제공</div>
          <div>입양인들을 위한 기록 및 공유 서비스</div>
        </i.BottomWrap>
        <i.Button type="button" onClick={goMain}>
          처음으로
        </i.Button>
      </i.Wrap>
    </i.Container>
  );
};

export default InfoContainer;
