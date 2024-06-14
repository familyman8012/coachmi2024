import Title from "../Title";
import SectionWrap from "../SectionWrap";
import { BenefitList, BenefitTxt, BenefitWrap } from "./style";

const BenefitData = [
  {
    title: "나만의 적성과 흥미를 찾아보세요",
    desc: "직업심리/적성 검사(갤럽, MBTI, 홀랜드 등) 인증 자격 보유한 전문 코치의 해석. 강점기반 겔프 브랜딩, 경력개발 전략 수립"
  },
  {
    title: "실시간  직무교육을 통해 직무역량 Up!",
    desc: "학습자 니즈 맞춤형 교육 방식 (온/오프라인, 하이브리드, VOD 서비스 제공). 실무 중심 강사와의 지속적 소통 및 무료 Q&A 제공"
  },
  {
    title: "제휴 혜택",
    desc: "라이프스타일, 쇼핑, 교육 등 약 10여 가지의 다양한 제휴 할인 혜택이 제공됩니다."
  },
  {
    title: "다른 클럽 놀러가기",
    desc: "우리 클럽 외 다른 클럽에 놀러 갈 수 있습니다."
  }
];

function index() {
  return (
    <SectionWrap>
      <Title>코치미를 통해 </Title>
      {/* <BenefitTxt>
        클럽을 신청하면 코치미 멤버가 됩니다. 멤버십 기간 동안 혜택을 모두
        누릴 수 있습니다.
      </BenefitTxt> */}
      <BenefitWrap>
        {BenefitData.map((benefit, i) => (
          <BenefitList
            key={benefit.title}
            bgimg={`/images/about_coachmi${i + 1}.png`}
          >
            <dt>{benefit.title}</dt>
            <dd>{benefit.desc}</dd>
          </BenefitList>
        ))}
      </BenefitWrap>
    </SectionWrap>
  );
}

export default index;
