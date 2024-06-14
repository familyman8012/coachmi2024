import { CommonSeo } from "@components/elements/CommonSeo";
import Layout from "@components/layouts";
import { mq } from "@components/mq";
import { IngLecture } from "@components/pageComp/indexpage/WrapIndex";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

export const About = styled.div`
  width: 110rem;
  margin: 0 auto;
  .gallery_img {
    text-align: center;
  }
  ${mq[0]} {
    width: 95vw;
    margin: 0 auto;
  }
`;

function index() {
  return (
    <Layout>
      <CommonSeo />
      <IngLecture
        css={css`
          padding-top: 8rem;
          ${mq[0]} {
            overflow: hidden;
            width: 95vw;
            margin: 0 auto;
            padding: 10px 0 10px;
          }
        `}
      >
        <h3 className="uio_title theme_color">
          <span className="uio_title_bullet theme_background"></span>코치미소개
        </h3>
      </IngLecture>
      <About>
        <ul className="_image_view_con">
          <li
            className="_image_view_btn"
            data-img-src="https://modo-phinf.pstatic.net/20221122_180/1669094943574dK2gS_JPEG/mosaubFlof.jpeg"
            data-img-index="0"
            data-img-title=""
          >
            <div className="gallery_img">
              <a href="#">
                <img
                  src="https://modo-phinf.pstatic.net/20221122_180/1669094943574dK2gS_JPEG/mosaubFlof.jpeg?type=w1100"
                  alt=""
                />
              </a>
            </div>
            <div className="gallery_txt">
              <div className="txt_area"> </div>
            </div>
          </li>
        </ul>
        <ul
          css={css`
            width: 110rem;
            text-align: center;
            margin: 10rem auto 7rem;

            ${mq[0]} {
              overflow: hidden;
              width: 95vw;
              margin: 0 auto;
              padding: 10px 0 10px;
            }

            .movie_info {
              margin-top: 1.6rem;
              font-size: 0;
              letter-spacing: 0.3px;
              text-align: center;
            }
            .movie_info a {
              overflow: hidden;
              display: inline-block;
              height: 14px;
              margin-left: 1rem;
              font-style: italic;
              font-size: 12px;
              color: #bbb;
              vertical-align: top;
            }
            .movie_info h3 {
              overflow: hidden;
              height: 18px;
              padding: 0;
              display: inline-block;
              font-size: 12px;
              color: #666;
              vertical-align: top;
            }
          `}
        >
          <li className="">
            <div className="gallery_img">
              <a href="#" className="ico_play">
                <img
                  src="https://i.ytimg.com/vi/Q5vdlV7QPNY/maxresdefault.jpg"
                  alt=""
                />
              </a>
              <span className="ico_default">
                <span className="blind">등록된 동영상이 없습니다.</span>
              </span>
            </div>
            <div className="gallery_txt">
              <h3></h3> <p></p>
            </div>
            <div className="movie_info">
              <h3>커리어&nbsp;코칭&nbsp;플랫폼,&nbsp;코치미</h3>
              <a
                href="http://www.youtube.com/embed/Q5vdlV7QPNY"
                target="_blank"
              >
                youtube.com
              </a>
              <span
                css={css`
                  padding: 0;
                  margin: 0;
                  margin-left: 5px;
                `}
              >
                <a
                  href="http://savefrom.net/?url=http%3A%2F%2Fwww.youtube.com%2Fembed%2FQ5vdlV7QPNY&amp;utm_source=userjs-chrome&amp;utm_medium=extensions&amp;utm_campaign=link_modifier"
                  target="_blank"
                  title="Get a direct link"
                  css={css`
                    background-image: url("data:image/gif;base64,R0lGODlhEAAQAOZ3APf39+Xl5fT09OPj4/Hx8evr6/3+/u7u7uDh4OPi497e3t7e3/z8/P79/X3GbuXl5ubl5eHg4WzFUfb39+Pj4lzGOV7LOPz7+/n6+vn5+ZTLj9/e387Ozt7f3/7+/vv7/ISbePn5+m/JV1nRKXmVbkCnKVrSLDqsCuDh4d/e3uDn3/z7/H6TdVeaV1uSW+bn5v39/eXm5eXm5kyHP/f39pzGmVy7J3yRd9/f3mLEKkXCHJbka2TVM5vaZn6Wdfn6+YG/c/r5+ZO/jeLi41aHTIeageLn4f39/vr6+kzNG2PVM5i+lomdf2CXYKHVmtzo2YXNeDqsBebl5uHh4HDKWN3g3kKqEH6WeZHTXIPKdnSPbv79/pfmbE7PHpe1l4O8dTO5DODg4VDLIlKUUtzo2J7SmEWsLlG4NJbFjkrJHP7+/VK5Nfz8+zmnC3KKa+Hg4OHh4Y63j/3+/eDg4Ojo6P///8DAwP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAHcALAAAAAAQABAAAAfWgHd2g4SFhYJzdYqLjIpzgx5bBgYwHg1Hk2oNDXKDFwwfDF5NLmMtcStsn4MhGT8YS04aGmU1QRhIGYMTADQAQlAODlloAMYTgwICRmRfVBISIkBPKsqDBAREZmcVFhYVayUz2IMHB1dWOmImI2lgUVrmgwUFLzdtXTxKSSduMfSD6Aik48MGlx05SAykM0gKhAAPAhTB0oNFABkPHg5KMIBCxzlMQFQZMGBIggSDpsCJgGDOmzkIUCAIM2dOhEEcNijQuQDHgg4KOqRYwMGOIENIB90JBAA7");
                    background-repeat: no-repeat;
                    width: 1.6rem;
                    height: 1.6rem;
                    display: inline-block;
                    border: none;
                    text-decoration: none;
                    padding: 0px;
                    position: relative;
                  `}
                ></a>
              </span>
            </div>
          </li>
        </ul>
      </About>
    </Layout>
  );
}

export default index;
