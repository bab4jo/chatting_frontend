import { useNavigate } from "react-router-dom";
import * as i from "./_style/InfoContainerStyle";
import {
  BottomWrap,
  From,
  InfoBody,
  InfoHeader,
  Span,
  ThankWrap,
} from "./_style/InfoContainerStyle";

const InfoContainer = () => {
  const navigate = useNavigate();

  const goMain = () => navigate("/");

  return (
    <i.Container>
      <i.Wrap>
        <i.ThankWrap>
          <i.Thank>설문에 참여해 주셔서 감사합니다 :)</i.Thank>
          <i.From>- SSAFY 광주 1반 11팀 일동 -</i.From>
        </i.ThankWrap>
        <i.Image src="/img/Group%20215.png" alt="" />
        <i.Logo>Coming soon!</i.Logo>
        <i.InfoWrap>
          <i.InfoHeader>
            pawsitive는 다양한 서비스로 여러분을 찾아갑니다!
          </i.InfoHeader>
          <i.InfoBody>
            <div>일관화되고 편리한 입양 절차</div>
            <div>나에게 딱 맞는 유기견 추천 서비스</div>
            <div>행동 및 건강상태에 따른 맞춤형 교육 컨텐츠 제공</div>
            <div>입양인들을 위한 기록 및 공유 서비스</div>
          </i.InfoBody>
        </i.InfoWrap>
        <i.BottomWrap>
          <i.Span>결과 공유 서비스는 pawsitive에서 이용 가능합니다.</i.Span>
          <i.Button type="button" onClick={goMain}>
            처음으로
          </i.Button>
        </i.BottomWrap>
      </i.Wrap>
    </i.Container>
  );
};

export default InfoContainer;
