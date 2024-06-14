import styled from "@emotion/styled";
import { mq } from "@components/mq";

const WrapIndex = styled.div`
  max-width: 110rem;
  width: 100%;
  margin: 0 auto;
  ${mq[0]} {
    width: 100%;
  }
  ${mq[1]} {
    padding: 0;
  }
`;

export const AboutCoachmi = styled.div`
  .section_spot .spot_homesite {
    display: table;
  }
  .section_spot.is_intro .is_bottom {
    position: relative;
    left: 50%;
    height: 16.6rem;
    margin: 6rem 0 0 -55rem;
    width: auto;
    padding-bottom: 0;
    background-color: transparent;
  }
  .section_spot.type_full .spot_homesite {
    text-align: center;
  }
  .section_spot .spot_homesite .site_info {
    display: table-cell;
    position: relative;
    z-index: 10;
    padding-top: 3.9rem;
    vertical-align: middle;
    letter-spacing: -0.8px;

    ${mq[0]} {
      display: none;
    }
  }
  .section_spot.is_intro .is_bottom .site_info {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 20.5rem;
    height: 100%;
    padding: 0 2rem 0 0;
    text-align: left;
    vertical-align: top;
  }
  .section_spot.type_full .spot_homesite .site_info {
    padding-top: 0;
  }
  .section_spot .spot_homesite .site_thumb {
    display: inline-block;
    float: left;
    position: relative;
    width: 10rem;
    height: 10rem;
    margin-right: 2rem;
  }
  .section_spot .is_bottom .site_thumb {
    display: block;
    float: none;
    width: 8rem;
    height: 8rem;
    margin: 0 auto 1rem;
  }
  .section_spot.is_intro .is_bottom .site_thumb {
    margin: 0 0 1.8rem;
  }
  .section_spot .spot_homesite .site_thumb img {
    width: 100%;
    -webkit-border-radius: 100%;
    border-radius: 100%;
    vertical-align: top;
  }
  .section_spot .spot_homesite .site_thumb:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-border-radius: 100%;
    border-radius: 100%;
    border: 1px solid rgba(0, 0, 0, 0.08);
    content: "";
  }
  .section_spot .spot_homesite .site_name {
    margin-top: 0.6rem;
    font-size: 2rerm;
    font-weight: 300;
    line-height: 3.8rem;
    color: #fff;
    letter-spacing: -0.8px;
    word-wrap: break-word;
    word-break: break-all;
  }
  .section_spot .is_bottom .site_name {
    font-size: 1.5rem;
    color: #333;
  }
  .section_spot.is_intro .is_bottom .site_name {
    font-weight: 400;
    line-height: 2.4rem;
  }
  .section_spot .spot_homesite .site_name {
    margin-top: 6rem;
    font-size: 2rem;
    font-weight: 300;
    line-height: 3.8rem;
    color: #fff;
    letter-spacing: -0.8px;
    word-wrap: break-word;
    word-break: break-all;
  }
  .section_spot .is_bottom .site_name {
    font-size: 1.5rem;
    color: #333;
  }
  .section_spot.is_intro .is_bottom .site_name {
    font-weight: 400;
    line-height: 2.4rem;
  }
  .section_spot .spot_homesite .site_description {
    margin-top: 0.2rem;
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 2.5rem;
    letter-spacing: -0.6px;
    word-wrap: break-word;
    word-break: break-all;
  }
  .section_spot.is_intro .is_bottom .site_description {
    overflow: hidden;
    max-height: 5rem;
    margin-top: 0.4rem;
    font-size: 13px;
    color: #999;
    line-height: 2.2rem;
  }
  .section_spot.is_intro .is_bottom + .intro_box {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 110rem;
    margin: -16.6rem auto 7rem;
    padding-left: 20.5rem;

    ${mq[0]} {
      width: 100vw !important;
      margin: -16.6rem 0 7rem !important;
      padding-left: 0 !important;

      .uio_content {
        border-left: none !important;
      }
    }
  }
  .section_spot.is_intro .is_bottom + .intro_box {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 110rem;
    margin: -16.6rem auto 7rem;
    padding-left: 20.5rem;
  }
  .section_spot.is_intro .is_bottom + .intro_box .uio_content {
    display: table;
    width: 100%;
    height: 16.6rem;
    border-left: 1px solid #ebebeb;
  }
  .section_spot.is_intro .is_bottom + .intro_box .intro_section {
    position: relative;
    display: table-cell;
    text-align: left;
    vertical-align: middle;
  }
  .theme_color {
    color: #00a29a !important;
  }
  .intro_box .point_text {
    display: inline-block;
    position: relative;
    margin-bottom: 8px;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: -0.8px;
  }
  .section_spot.is_intro .is_bottom + .intro_box .point_text {
    margin-left: 4rem;
  }
  .intro_box .text_intro {
    position: relative;
    overflow: hidden;
    height: auto;
    margin: 0 21.7rem;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.89;
    letter-spacing: -0.6px;
    color: #333;
    word-wrap: break-word;
    word-break: break-all;
  }
  .section_spot.is_intro .is_bottom + .intro_box .text_intro {
    margin: 0 4rem;
  }
  .intro_box .text_intro {
    position: relative;
    overflow: hidden;
    height: auto;
    margin: 0 21.7rem;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.89;
    letter-spacing: -0.6px;
    color: #333;
    word-wrap: break-word;
    word-break: break-all;
  }
`;

export const IngLecture = styled.div`
  width: 110rem;
  margin: 0 auto;

  ${mq[0]} {
    width: 95vw;
    margin: 0 auto;
  }

  .uio_title {
    display: inline-block;
    position: relative;
    font-size: 20px;
    margin-bottom: 4rem;
    color: #999;
    font-weight: 400;
    letter-spacing: -0.8px;
  }

  .theme_color {
    color: #00a29a !important;
  }

  .uio_title_bullet {
    position: absolute;
    left: 0;
    bottom: -1rem;
    width: 100%;
    height: 1px;
    z-index: 1;
  }
  .theme_background {
    background-color: #00a29a !important;
  }
  .uio_title:after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1rem;
    content: "";
    width: 110rem;
    height: 1px;
    background-color: #ebebeb;
  }
`;

export default WrapIndex;
