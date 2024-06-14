import { LectureSeo } from "@components/elements/CommonSeo";
import Layout from "@components/layouts";
import { mq } from "@components/mq";
import {
  AboutCoachmi,
  IngLecture
} from "@components/pageComp/indexpage/WrapIndex";
import { css } from "@emotion/react";
import React from "react";

function Index() {
  return (
    <Layout>
      <LectureSeo />
      <IngLecture
        css={css`
          padding: 80px 0;
          ${mq[0]} {
            padding: 10px 0;
          }
        `}
      >
        <h3 className="uio_title theme_color">
          <span className="uio_title_bullet theme_background"></span>진행중인
          교육
        </h3>
        <div className="gallery_area type3">
          <ul>
            <li>
              <div className="gallery_img">
                <a href="flickcard://9xbpb2fm">
                  <img
                    src="https://modo-phinf.pstatic.net/20221122_107/1669094914644xsuH4_JPEG/mosaXI23Ms.jpeg"
                    alt="이미지"
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </IngLecture>
    </Layout>
  );
}

export default Index;
