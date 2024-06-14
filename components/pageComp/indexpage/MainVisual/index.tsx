import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { SwiperSlide } from "swiper/react";
import Slider from "@components/modules/Slider";
import { IMainVis } from "@src/typings/db";
import { Mainvis, SlideItem, TxtBox } from "./styles";
import { css } from "@emotion/react";

export interface IMainVisImgs {
  mainVisImgs: IMainVis[];
}

function Index() {
  const [windowWidthSize, setWindowWidthSize] = useState<number>(1000);

  const handleResize = debounce(() => {
    setWindowWidthSize(window.innerWidth);
  }, 25);

  useEffect(() => {
    setWindowWidthSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const MainVisTxt = [
    {
      txt1: "코치미는",
      txt2: "새로운 친구들과 함께하는",
      txt3: `문화 공간입니다.`
    },
    {
      txt1: "내가 그린 그림으로",
      txt2: "전시회를 열고 싶다면?",
      txt3: `코치미에서 이제 화가의 꿈을 이루어보세요`
    },
    {
      txt1: "스트레스여 안녕~",
      txt2: "신나게 춤추자",
      txt3: `다이어트도 OK~ 몸치도 따라하는 힙한댄스`
    },
    // {
    //   txt1: "인생작 같이 보자.",
    //   txt2: "영화를 같이 만들자.",
    //   txt3: `영화 좋아하는 사람들 모두 모여라.`
    // },
    {
      txt1: "요리는 문화다",
      txt2: "맛있고 재밌는 요리",
      txt3: `맛집도 가고, 요리도 만들고, 친구도 사귀고!`
    },
    {
      txt1: "뮤지컬, 연극",
      txt2: "무대 위의 당신",
      txt3: `공연을 즐기다, 공연을 만들다`
    }
  ];

  return (
    <Mainvis
      css={css`
        position: relative;
      `}
    >
      {/* <Slider>
        {MainVisTxt?.map((el, i: number) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <SlideItem i={i} on={isActive ? "on" : ""}>
                <div className="txtbox">
                  <p className="txt1">{el.txt1}</p>
                  <p className="txt2">{el.txt2}</p>
                  <p className="txt3">{el.txt3}</p>
                  <a>GET START</a>
                </div>
              </SlideItem>
            )}
          </SwiperSlide>
        ))}
      </Slider> */}
      {500 > windowWidthSize ? (
        <>
          <img src="/images/main_vis_mo.png" alt="" />
          <div
            css={css`
              position: absolute;
              z-index: 1000;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              .thumb_img {
                overflow: hidden;
                width: 90px;
                height: 90px;
                margin: 0 auto;
                -webkit-border-radius: 50px;
                border-radius: 50px;
                img {
                  border-radius: 50px;
                }
              }
              .text_area {
                text-align: center;
                .spot_title {
                  overflow: hidden;
                  max-height: 50px;
                  font-size: 22px;
                  font-family: helveticaneue, applesdgothicneo-medium,
                    sans-serif;
                  font-weight: 400;
                  color: #fff;
                  letter-spacing: -0.3px;
                  line-height: 25px;
                }
                .spot_text {
                  overflow: hidden;
                  max-height: 57px;
                  margin-top: 4px;
                  font-size: 15px;
                  color: rgba(255, 255, 255, 0.6);
                  letter-spacing: -0.3px;
                  line-height: 19px;
                }
              }
            `}
          >
            <div className="thumb_img">
              <img
                className=""
                src="https://modo-phinf.pstatic.net/20221027_177/1666806316320si8Gz_JPEG/mosaS11npf.jpeg?type=f320_320"
                width="90"
                height="90"
                alt="임시 이미지"
              />
            </div>
            <div className="text_area">
              <div className="area">
                <h3 className="spot_title">
                  <span>Coachmi</span>
                </h3>
                <p className="spot_text">경력개발 파트너, 코치미</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <img src="/images/main_vis.png" alt="" />
      )}
    </Mainvis>
  );
}

export default Index;
