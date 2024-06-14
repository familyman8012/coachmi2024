import { GetServerSideProps } from "next";
import { dbConnect, Product, Notice } from "../pages/api";
import { dehydrate, QueryClient } from "react-query";
import { useProductsMain } from "@src/hooks/api/useProducts/useProductsMain";
import { IndexSeo } from "@components/elements/CommonSeo";
import Layout from "@components/layouts";
import Morebtn from "@components/pageComp/indexpage/Morebtn";
import {
  MainVisual,
  WrapIndex,
  CategoryMenu,
  CardSlideArea,
  BlogArea,
  NoticeArea
} from "@components/pageComp/indexpage";
import { ISSR } from "@src/typings/db";
import Title from "@components/elements/Title";
import { css } from "@emotion/react";
import { mq } from "@components/mq";
import Link from "next/link";
import CardBadge from "@components/elements/CardBadge";
import Card from "@components/elements/Card";
import { WrapCategoryArea } from "@components/pageComp/indexpage/CardSlideArea/styles";
import {
  AboutCoachmi,
  IngLecture
} from "@components/pageComp/indexpage/WrapIndex";

const Home = ({ SsrData }: ISSR) => {
  const { blogData, noticeData, products } = SsrData;

  const { data } = useProductsMain(products);
  const productsData = data?.products;

  console.log("productsData", productsData);

  return (
    <Layout>
      <IndexSeo />
      <MainVisual />

      <AboutCoachmi>
        <div className="section_spot _sectionSpot  type_full is_intro">
          <div className="spot_homesite _spotHomesite  is_bottom">
            <div className="site_info">
              <div className="site_thumb">
                <img
                  src="https://modo-phinf.pstatic.net/20221027_177/1666806316320si8Gz_JPEG/mosaS11npf.jpeg?type=f320_320"
                  alt=""
                />
              </div>
              <h1 className="site_name">
                <span className="txt">Coachmi</span>
                <span className="txt">&nbsp;</span>
              </h1>
              <p className="site_description">경력개발 파트너, 코치미</p>
            </div>
          </div>
          <div className="uio_box intro_box _introBox">
            <div className="uio_content">
              <div className="intro_section _introTextArea">
                <strong className="point_text theme_color">
                  커리어코칭 플랫폼
                </strong>
                <p className="text_intro _text_intro">
                  <span className="text" id="introText">
                    코치미는 여러분의 꿈과 커리어 비전에 더 빠르게 도달할 수
                    있도록 돕는 커리어 성장 파트너입니다. 과학적 검증을 통한
                    자기발견, 셀프 브랜딩 전략을 수립할 있도록 최고의 커리어
                    코치를 연결하고, 이를 위한 최적의 직무교육과 소셜 네트워킹을
                    통해 즐겁게 성장할 수 있도록 다양한 커뮤니티 활동을
                    지원합니다. 최고의 코칭 교육 전문가와 경력개발 목표를
                    수립하고, 커리어 네트워킹 파티에도 참여해보세요.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </AboutCoachmi>
      <IngLecture>
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
      <WrapIndex>
        {/* <CategoryMenu /> */}
        <WrapCategoryArea
          css={css`
            width: 110rem;
            ${mq[0]} {
              width: 90vw;
              margin: 0 auto;
            }
          `}
        >
          <Title
            css={css`
              ${mq[0]} {
                padding: 0;
              }
            `}
          >
            전체 상품
          </Title>
          <div
            css={css`
              display: grid;
              gap: 0.5rem 5rem;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              ${mq[0]} {
                grid-template-columns: 1fr 1fr;
                gap: 0.5rem 3rem;
                dd.wrap_price,
                dd .priceNum {
                  font-size: 12px !important;
                }
              }
            `}
          >
            {productsData?.map(el => (
              <Link href={`/detailview/${el._id}`} key={el._id}>
                <a>
                  <CardBadge el={el} />
                  <Card data={el} querykey="main" />
                </a>
              </Link>
            ))}{" "}
          </div>
        </WrapCategoryArea>
        {/* <Title>진행 중인 인기 이벤트</Title>
        <div
          css={css`
            display: flex;
            ${mq[0]} {
              display: block;
              padding: 0 20px;
              > div {
                margin-bottom: 15px;
              }
            }
          `}
        >
          <div>
            <img
              src="/images/bnr_event1.png"
              alt="김미리 작가의 북콘서트에 초대합니다."
            />
          </div>
          <div
            css={css`
              margin-left: auto;
            `}
          >
            <img src="/images/bnr_event2.png" alt="가을 여행" />
          </div>
        </div> */}
        {/* <CardSlideArea genreData={genreData2} genreTitle={genreTitle2} /> */}
        {/* <Morebtn /> */}
        <BlogArea blogData={blogData} />
        <NoticeArea noticeData={noticeData} />
      </WrapIndex>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await dbConnect();

  const [result, result2, result3] = await Promise.all([
    Notice.find(
      { category: "블로그" },
      { body: false, createdAt: false, updatedAt: false }
    )
      .limit(3)
      .lean(),
    Notice.find(
      { category: "공지사항" },
      { body: false, createdAt: false, updatedAt: false }
    )
      .limit(4)
      .lean(),
    Product.find(
      { isvod: { $ne: true }, islive: { $ne: false } },
      { body: false }
    )
      .sort({ firstmeet: 1 })
      .limit(90)
      .lean()
  ]);

  const SsrData = {
    blogData: JSON.parse(JSON.stringify(result)),
    noticeData: JSON.parse(JSON.stringify(result2)),
    products: JSON.parse(JSON.stringify(result3))
  };

  await queryClient.prefetchQuery(["list", "main"], () => SsrData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      SsrData
    }
  };
};

export default Home;
