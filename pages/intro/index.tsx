import { LectureSeo } from "@components/elements/CommonSeo";
import Layout from "@components/layouts";
import { mq } from "@components/mq";
import { IngLecture } from "@components/pageComp/indexpage/WrapIndex";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

export const Intro = styled.div`
  ${mq[0]} {
    .gallery_area.type4 ul {
      width: 95vw !important;
      li {
        float: none !important;
        width: 100%;

        .gallery_txt {
          .txt_area {
            h3 {
              font-size: 15px !important;
            }
            p {
              font-size: 13px !important;
            }
          }
        }
      }
    }
  }
  .gallery_area.type4 {
    margin: 0;
  }
  .gallery_area {
    position: relative;
    height: 100%;
  }
  .gallery_area {
    overflow: hidden;
  }
  .gallery_area.type4 ul {
    width: 110rem;
    margin: 2rem auto 0;
  }
  .gallery_area.type4 li {
    float: left;
    width: 50%;
    padding: 0 4rem 3rem 2rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
   
  }
  .component_box:first-child .gallery_area.type4 li:first-child + li:before,
  .component_box:first-child .gallery_area.type4 li:first-child:before {
    border: 0;
  }
  .gallery_area.type4 li:first-of-type:before,
  .gallery_area.type4 li:nth-of-type(2):before {
    display: none;
  }
  .gallery_area.type4 li:before {
    ${mq[0]} {
      border-top:none !important;
    }
    display: block;
    padding-top: 3rem;
    border-top: 1px solid #ebebeb;
    content: "";
  }
  .gallery_area.type4.type4.img_lft .gallery_img {
    float: left;
    margin-right: 3rem;
  }
  .gallery_area.type4 .gallery_img {
    width: 13rem;
    height: 13rem;
  }
  .gallery_area .gallery_img {
    position: relative;
  }
  .gallery_area .gallery_img img {
    display: block;
    width: 100%;
    vertical-align: top;
  }
  .gallery_area.type4 .gallery_txt {
    overflow: hidden;
    font-size: 0;
  }
  .gallery_area.v_align_m .gallery_txt,
  .gallery_area.v_align_m .txt_area {
    vertical-align: middle;
  }

  .gallery_area.align_l .gallery_txt {
    text-align: left;
  }
  .gallery_area.type4 .gallery_txt .txt_area {
    display: inline-block;
  }
  .gallery_area.v_align_m .gallery_txt,
  .gallery_area.v_align_m .txt_area {
    vertical-align: middle;
  }
  .gallery_area.type4 .gallery_txt h3 {
    max-width: 28.2rem;
    max-height: 19px
    font-weight: 500;
    letter-spacing: -0.7px;
    font-size: 1.3rem;
  }
  .gallery_area .gallery_txt h3 {
    overflow: hidden;
    color: #333;
  }
  .gallery_area.type4 .gallery_txt h3 {
    max-width: 28.2rem;
    max-height: 19px
    font-weight: 500;
    letter-spacing: -0.7px;
    font-size: 1.3rem;
  }
  .gallery_area .gallery_txt h3 {
    overflow: hidden;
    color: #333;
  }
  .gallery_area.type4 .gallery_txt p {
    max-height: 72px;
    margin-top: 0.5rem;
    font-size: 1.3rem;
    line-height: 1.85;
    letter-spacing: -0.9px;
  }

  .gallery_area .gallery_txt p {
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
    color: #666;
  }
  .gallery_area.type4 .gallery_txt:after {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    content: "";
  }
  .gallery_area.type4 li {
    float: left;
    width: 50%;
    padding: 0 4rem 3rem 2rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
`;

export const CoachIntro = styled.div`
  .txt_component.align_l {
    text-align: left;
    color: rgb(0, 162, 154);
  }
  .txt_component {
    overflow: hidden;
    color: #222;
    word-break: break-all;
    word-wrap: break-word;
  }
  .txt_component {
    margin: 0;
  }
  .gallery_area.type4 {
    margin: 0;
  }
  .gallery_area {
    position: relative;
    height: 100%;
  }
  .gallery_area {
    overflow: hidden;
  }
  .gallery_area.type4 ul {
    margin-left: -2rem;
  }
  .gallery_area.type4 li {
    float: left;
    width: 50%;
    padding: 0 4rem 3rem 2rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    ${mq[0]} {
      float:none !important;
      width: 100% !important;

      .txt_area {
        h3 {font-size:15px !important}
        p {font-size:13px !important}
      }
    }
  }
  .gallery_area.type4 li:before {
    display: block;
    padding-top: 3rem;
    border-top: 1px solid #ebebeb;
    content: "";
  }
  .gallery_area.type4.type4.img_lft .gallery_img {
    float: left;
    margin-right: 3rem;
  }
  .gallery_area.type4 .gallery_img {
    width: 13rem;
    height: 13rem;
  }
  .gallery_area .gallery_img {
    position: relative;
  }
  .gallery_area .gallery_img a {
    display: block;
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
  }
  .gallery_area .gallery_img img {
    display: block;
    width: 100%;
    vertical-align: top;
  }
  .gallery_area.type4 .gallery_txt {
    overflow: hidden;
    font-size: 0;
  }
  .gallery_area.v_align_m .gallery_txt,
  .gallery_area.v_align_m .txt_area {
    vertical-align: middle;
  }
  .gallery_area.align_l .gallery_txt {
    text-align: left;
  }
  .gallery_area.type4 .gallery_txt .txt_area {
    display: inline-block;
  }
  .gallery_area.v_align_m .gallery_txt,
  .gallery_area.v_align_m .txt_area {
    vertical-align: middle;
  }
  .gallery_area.type4 .gallery_txt h3 {
    max-width: 28.2rem;
    max-height: 19px
    font-weight: 500;
    letter-spacing: -0.7px;
    font-size: 1.3rem;
  }
  .gallery_area .gallery_txt h3 {
    overflow: hidden;
    color: #333;
  }
  .gallery_area.type4 .gallery_txt h3 {
    max-width: 28.2rem;
    max-height: 19px
    font-weight: 500;
    letter-spacing: -0.7px;
    font-size: 1.3rem;
  }
  .gallery_area .gallery_txt h3 {
    overflow: hidden;
    color: #333;
  }
  .gallery_area.type4 .gallery_txt p {
    max-height: 72px;
    margin-top: 0.5rem;
    font-size: 1.3rem;
    line-height: 1.85;
    letter-spacing: -0.9px;
  }

  .gallery_area .gallery_txt p {
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
    color: #666;
  }
  .gallery_area.type4 .gallery_txt:after {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    content: "";
  }
  .aside_notice .section .txt_info:after,
  .banner_box .item:after,
  .board_box .card_type .btn_area:after,
  .btn_wrap .btn_theme:after,
  .btn_wrap .btn_theme_v2.btn_type_v2:after,
  .btn_wrap .theme_a.btn_type_v2:after,
  .card_board .info_area:after,
  .coupon_section:after,
  .gallery_area ul:after,
  .gallery_area.type4 li:after,
  .hub_section .category_area:after,
  .hub_section .location_area .list_location:after,
  .info_box .area_aaccount .list_info .item_description .text:after,
  .info_box .area_aaccount:after,
  .info_box .list_info:after,
  .main .board_box .area_info:after,
  .main .board_box .list_board:after,
  .menu_box .info_area:after {
    display: block;
    clear: both;
    content: "";
  }
`;

function index() {
  return (
    <Layout>
      <LectureSeo />
      <IngLecture
        css={css`
          padding-top: 80px;
          ${mq[0]} {
            padding: 10px 0;
          }
        `}
      >
        <h3 className="uio_title theme_color">
          <span className="uio_title_bullet theme_background"></span>교육소개
        </h3>
      </IngLecture>
      <Intro>
        <div className="gallery_area _image_view_container type4 img_lft align_l v_align_m black_bg sma   ">
          <ul className="">
            <li
              className="  _image_view_btn"
              data-img-src="https://modo-phinf.pstatic.net/20221103_245/1667477239448u95ip_PNG/mosalVKYDJ.png"
              data-img-index="0"
              data-img-title="커리어 비전"
            >
              <div className="gallery_img">
                <span>
                  <img
                    src="https://modo-phinf.pstatic.net/20221103_245/1667477239448u95ip_PNG/mosalVKYDJ.png?type=f130_130"
                    alt=""
                  />
                </span>
              </div>
              <div className="gallery_txt">
                <div className="txt_area">
                  <h3>
                    <span>커리어&nbsp;비전</span>
                  </h3>
                  <p>
                    인생을&nbsp;더&nbsp;행복하게&nbsp;사는&nbsp;나만의&nbsp;경력개발&nbsp;계획을&nbsp;수립해보세요.
                  </p>
                </div>
              </div>
            </li>
            <li
              className="  _image_view_btn"
              data-img-src="https://modo-phinf.pstatic.net/20221103_178/1667477239893UQS0u_PNG/mosarQjerg.png"
              data-img-index="1"
              data-img-title="셀프 브랜딩"
            >
              <div className="gallery_img">
                <span>
                  <img
                    src="https://modo-phinf.pstatic.net/20221103_178/1667477239893UQS0u_PNG/mosarQjerg.png?type=f130_130"
                    alt=""
                  />
                </span>
              </div>
              <div className="gallery_txt">
                <div className="txt_area">
                  <h3>
                    <span>셀프&nbsp;브랜딩</span>
                  </h3>
                  <p>나의&nbsp;가치&nbsp;발견,&nbsp;셀프&nbsp;브랜딩</p>
                </div>
              </div>
            </li>
            <li
              className="  _image_view_btn"
              data-img-src="https://modo-phinf.pstatic.net/20221103_185/1667477240349DgaX6_PNG/mosa8wbUqQ.png"
              data-img-index="2"
              data-img-title="이력서 작성"
            >
              <div className="gallery_img">
                <span>
                  <img
                    data-lazy-img-src="https://modo-phinf.pstatic.net/20221103_185/1667477240349DgaX6_PNG/mosa8wbUqQ.png?type=f130_130"
                    alt=""
                    src="https://modo-phinf.pstatic.net/20221103_185/1667477240349DgaX6_PNG/mosa8wbUqQ.png?type=f130_130"
                  />
                </span>
              </div>
              <div className="gallery_txt">
                <div className="txt_area">
                  <h3>
                    <span>이력서&nbsp;작성</span>
                  </h3>
                  <p>
                    "뽑히는&nbsp;이력서는&nbsp;무엇이&nbsp;다를까?"&nbsp;강점기반&nbsp;이력서&nbsp;작성
                  </p>
                </div>
              </div>
            </li>
            <li
              className="  _image_view_btn"
              data-img-src="https://modo-phinf.pstatic.net/20221103_261/1667477241118HdnjD_PNG/mosauhcCDC.png"
              data-img-index="3"
              data-img-title="면접 클리닉"
            >
              <div className="gallery_img">
                <span>
                  <img
                    data-lazy-img-src="https://modo-phinf.pstatic.net/20221103_261/1667477241118HdnjD_PNG/mosauhcCDC.png?type=f130_130"
                    alt=""
                    src="https://modo-phinf.pstatic.net/20221103_261/1667477241118HdnjD_PNG/mosauhcCDC.png?type=f130_130"
                  />
                </span>
              </div>
              <div className="gallery_txt">
                <div className="txt_area">
                  <h3>
                    <span>면접&nbsp;클리닉</span>
                  </h3>
                  <p>한&nbsp;번에&nbsp;끝내는&nbsp;면접&nbsp;대비</p>
                </div>
              </div>
            </li>
            <li
              className="  _image_view_btn"
              data-img-src="https://modo-phinf.pstatic.net/20221103_235/1667477241584agXNl_PNG/mosa5rtksw.png"
              data-img-index="4"
              data-img-title="1:1&nbsp;코칭"
            >
              <div className="gallery_img">
                <span>
                  <img
                    data-lazy-img-src="https://modo-phinf.pstatic.net/20221103_235/1667477241584agXNl_PNG/mosa5rtksw.png?type=f130_130"
                    alt=""
                    src="https://modo-phinf.pstatic.net/20221103_235/1667477241584agXNl_PNG/mosa5rtksw.png?type=f130_130"
                  />
                </span>
              </div>
              <div className="gallery_txt">
                <div className="txt_area">
                  <h3>
                    <span>1:1&nbsp;코칭</span>
                  </h3>
                  <p>나만의&nbsp;코칭시간을&nbsp;예약하세요</p>
                </div>
              </div>
            </li>
            <li
              className="  _image_view_btn"
              data-img-src="https://modo-phinf.pstatic.net/20221103_183/1667477242104Y1gk6_PNG/mosaV73wZh.png"
              data-img-index="5"
              data-img-title="직무 부트캠프"
            >
              <div className="gallery_img">
                <span>
                  <img
                    data-lazy-img-src="https://modo-phinf.pstatic.net/20221103_183/1667477242104Y1gk6_PNG/mosaV73wZh.png?type=f130_130"
                    alt=""
                    src="https://modo-phinf.pstatic.net/20221103_183/1667477242104Y1gk6_PNG/mosaV73wZh.png?type=f130_130"
                  />
                </span>
              </div>
              <div className="gallery_txt">
                <div className="txt_area">
                  <h3>
                    <span>직무&nbsp;부트캠프</span>
                  </h3>
                  <p>부트캠프에서&nbsp;높여보자!&nbsp;직무&nbsp;부트캠프</p>
                </div>
              </div>
            </li>
            <li
              className="  _image_view_btn"
              data-img-src="https://modo-phinf.pstatic.net/20221103_85/1667477242831CAlJF_PNG/mosaV6o5cW.png"
              data-img-index="6"
              data-img-title="힐링캠프"
            >
              <div className="gallery_img">
                <span>
                  <img
                    data-lazy-img-src="https://modo-phinf.pstatic.net/20221103_85/1667477242831CAlJF_PNG/mosaV6o5cW.png?type=f130_130"
                    alt=""
                    src="https://modo-phinf.pstatic.net/20221103_85/1667477242831CAlJF_PNG/mosaV6o5cW.png?type=f130_130"
                  />
                </span>
              </div>
              <div className="gallery_txt">
                <div className="txt_area">
                  <h3>
                    <span>힐링캠프</span>
                  </h3>
                  <p>
                    이&nbsp;세상&nbsp;힐링이&nbsp;아님~&nbsp;꿈과&nbsp;비전을&nbsp;위한&nbsp;여행,&nbsp;힐링캠프
                  </p>
                </div>
              </div>
            </li>
            <li
              className="  _image_view_btn"
              data-img-src="https://modo-phinf.pstatic.net/20221103_118/1667477243474u2lzU_PNG/mosaQiEmnt.png"
              data-img-index="7"
              data-img-title="북토크 &amp; 코칭"
            >
              <div className="gallery_img">
                <span>
                  <img
                    data-lazy-img-src="https://modo-phinf.pstatic.net/20221103_118/1667477243474u2lzU_PNG/mosaQiEmnt.png?type=f130_130"
                    alt=""
                    src="https://modo-phinf.pstatic.net/20221103_118/1667477243474u2lzU_PNG/mosaQiEmnt.png?type=f130_130"
                  />
                </span>
              </div>
              <div className="gallery_txt">
                <div className="txt_area">
                  <h3>
                    <span>북토크&nbsp;&amp;&nbsp;코칭</span>
                  </h3>
                  <p>
                    저자와&nbsp;함께하는&nbsp;코칭&nbsp;북토크!&nbsp;참가자들과의&nbsp;네트워크는&nbsp;덤!
                  </p>
                </div>
              </div>
            </li>
            <li
              className="  _image_view_btn"
              data-img-src="https://modo-phinf.pstatic.net/20221103_189/1667477244000C2JGl_PNG/mosaDOxLyo.png"
              data-img-index="8"
              data-img-title="세미나"
            >
              <div className="gallery_img">
                <span>
                  <img
                    data-lazy-img-src="https://modo-phinf.pstatic.net/20221103_189/1667477244000C2JGl_PNG/mosaDOxLyo.png?type=f130_130"
                    alt=""
                    src="https://modo-phinf.pstatic.net/20221103_189/1667477244000C2JGl_PNG/mosaDOxLyo.png?type=f130_130"
                  />
                </span>
              </div>
              <div className="gallery_txt">
                <div className="txt_area">
                  <h3>
                    <span>세미나</span>
                  </h3>
                  <p>취업,&nbsp;이직을&nbsp;위한&nbsp;경력개발&nbsp;세미나</p>
                </div>
              </div>
            </li>
            <li
              className="  _image_view_btn"
              data-img-src="https://modo-phinf.pstatic.net/20221103_295/1667477244362f51mG_PNG/mosaePt9T6.png"
              data-img-index="9"
              data-img-title="커리어 파티"
            >
              <div className="gallery_img">
                <span>
                  <img
                    data-lazy-img-src="https://modo-phinf.pstatic.net/20221103_295/1667477244362f51mG_PNG/mosaePt9T6.png?type=f130_130"
                    alt=""
                    src="https://modo-phinf.pstatic.net/20221103_295/1667477244362f51mG_PNG/mosaePt9T6.png?type=f130_130"
                  />
                </span>
              </div>
              <div className="gallery_txt">
                <div className="txt_area">
                  <h3>
                    <span>커리어&nbsp;파티</span>
                  </h3>
                  <p>
                    너와&nbsp;나의&nbsp;커리어&nbsp;연결고리,&nbsp;성장과&nbsp;나눔이&nbsp;있는&nbsp;파티
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Intro>
      <CoachIntro
        css={css`
          width: 110rem;
          margin: 10rem auto;
          ${mq[0]} {
            width: 95vw;
          }
        `}
      >
        <div className="txt_box">
          <div
            className="txt_component color1 big align_l t_space "
            css={css`
              color: rgb(0, 162, 154);
              padding: 3rem 0;
            `}
          >
            <h4>강사진&nbsp;소개</h4>
          </div>
        </div>
        <div className="gallery_area _image_view_container type4 img_lft align_l v_align_m black_bg sma   ">
          <ul className="_image_view_con">
            <li
              className="  _image_view_btn"
              data-img-src="https://modo-phinf.pstatic.net/20221025_242/1666668780853f2Rrb_PNG/mosaguMIXZ.png"
              data-img-index="0"
              data-img-title="정유리"
            >
              <div className="gallery_img">
                <a href="#">
                  <img
                    data-lazy-img-src="https://modo-phinf.pstatic.net/20221025_242/1666668780853f2Rrb_PNG/mosaguMIXZ.png?type=f130_130"
                    alt=""
                    src="https://modo-phinf.pstatic.net/20221025_242/1666668780853f2Rrb_PNG/mosaguMIXZ.png?type=f130_130"
                  />
                </a>
              </div>
              <div className="gallery_txt">
                <div className="txt_area">
                  <h3>
                    <span>정유리</span>
                  </h3>
                  <p>
                    #커리어코칭&nbsp;#비즈니스코칭&nbsp;#회복탄력성&nbsp;#성장마인드셋&nbsp;#리더십코칭
                  </p>
                </div>
              </div>
            </li>
            <li
              className="  _image_view_btn"
              data-img-src="https://modo-phinf.pstatic.net/20221025_280/1666668788443GjjIi_PNG/mosa7IISTF.png"
              data-img-index="1"
              data-img-title="조원섭"
            >
              <div className="gallery_img">
                <a href="#">
                  <img
                    data-lazy-img-src="https://modo-phinf.pstatic.net/20221025_280/1666668788443GjjIi_PNG/mosa7IISTF.png?type=f130_130"
                    alt=""
                    src="https://modo-phinf.pstatic.net/20221025_280/1666668788443GjjIi_PNG/mosa7IISTF.png?type=f130_130"
                  />
                </a>
              </div>
              <div className="gallery_txt">
                <div className="txt_area">
                  <h3>
                    <span>조원섭</span>
                  </h3>
                  <p>
                    #마케팅코칭&nbsp;#브랜딩코칭&nbsp;#커리어코칭&nbsp;#도형심리&nbsp;#강점기반코칭
                  </p>
                </div>
              </div>
            </li>
            <li
              className="  _image_view_btn"
              data-img-src="https://modo-phinf.pstatic.net/20221025_200/1666668791640taYP9_PNG/mosa6z06WB.png"
              data-img-index="2"
              data-img-title="이유정"
            >
              <div className="gallery_img">
                <a href="#">
                  <img
                    data-lazy-img-src="https://modo-phinf.pstatic.net/20221025_200/1666668791640taYP9_PNG/mosa6z06WB.png?type=f130_130"
                    alt=""
                    src="https://modo-phinf.pstatic.net/20221025_200/1666668791640taYP9_PNG/mosa6z06WB.png?type=f130_130"
                  />
                </a>
              </div>
              <div className="gallery_txt">
                <div className="txt_area">
                  <h3>
                    <span>이유정</span>
                  </h3>
                  <p>#커리어코칭&nbsp;#성장마인드셋&nbsp;#NLP</p>
                </div>
              </div>
            </li>
            <li
              className="  _image_view_btn"
              data-img-src="https://modo-phinf.pstatic.net/20221025_91/1666668809527N5beb_PNG/mosaahvVc3.png"
              data-img-index="3"
              data-img-title="정다정"
            >
              <div className="gallery_img">
                <a href="#">
                  <img
                    data-lazy-img-src="https://modo-phinf.pstatic.net/20221025_91/1666668809527N5beb_PNG/mosaahvVc3.png?type=f130_130"
                    alt=""
                    src="https://modo-phinf.pstatic.net/20221025_91/1666668809527N5beb_PNG/mosaahvVc3.png?type=f130_130"
                  />
                </a>
              </div>
              <div className="gallery_txt">
                <div className="txt_area">
                  <h3>
                    <span>정다정</span>
                  </h3>
                  <p>#마케팅코칭&nbsp;#커리어코칭&nbsp;#비즈니스코칭</p>
                </div>
              </div>
            </li>
            <li
              className="  _image_view_btn"
              data-img-src="https://modo-phinf.pstatic.net/20221025_56/1666668821309iy49v_PNG/mosaYqT0mf.png"
              data-img-index="4"
              data-img-title="김영아"
            >
              <div className="gallery_img">
                <a href="#">
                  <img
                    data-lazy-img-src="https://modo-phinf.pstatic.net/20221025_56/1666668821309iy49v_PNG/mosaYqT0mf.png?type=f130_130"
                    alt=""
                    src="https://modo-phinf.pstatic.net/20221025_56/1666668821309iy49v_PNG/mosaYqT0mf.png?type=f130_130"
                  />
                </a>
              </div>
              <div className="gallery_txt">
                <div className="txt_area">
                  <h3>
                    <span>김영아</span>
                  </h3>
                  <p>#커리어코칭&nbsp;#직업상담&nbsp;#창직코칭</p>
                </div>
              </div>
            </li>
            <li
              className="  _image_view_btn"
              data-img-src="https://modo-phinf.pstatic.net/20221025_26/16666688251043qHhG_PNG/mosaKBiCHI.png"
              data-img-index="5"
              data-img-title="김세준"
            >
              <div className="gallery_img">
                <a href="#">
                  <img
                    data-lazy-img-src="https://modo-phinf.pstatic.net/20221025_26/16666688251043qHhG_PNG/mosaKBiCHI.png?type=f130_130"
                    alt=""
                    src="https://modo-phinf.pstatic.net/20221025_26/16666688251043qHhG_PNG/mosaKBiCHI.png?type=f130_130"
                  />
                </a>
              </div>
              <div className="gallery_txt">
                <div className="txt_area">
                  <h3>
                    <span>김세준</span>
                  </h3>
                  <p>#NCS&nbsp;#취업&nbsp;#면접&nbsp;#자소서</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </CoachIntro>
    </Layout>
  );
}

export default index;
