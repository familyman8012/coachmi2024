import { mq } from "@components/mq";
import styled from "@emotion/styled";

export const BenefitTxt = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const BenefitWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mq[0]} {
    display: block;
  }
`;

export const BenefitList = styled.dl<{ bgimg: string }>`
  width: 80%;
  height: 106px;
  margin-bottom: 30px;
  padding-left: 126px;
  background: url(${({ bgimg }) => bgimg}) no-repeat left top;
  background-size: 106px;

  dt {
    margin-bottom: 4px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.56;
    letter-spacing: -0.43px;
  }
  dd {
    font-size: 16px;
  }
  ${mq[0]} {
    width: 100%;
    margin-bottom: 30px;
    dt,
    dd {
      font-size: 13px;
    }
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
