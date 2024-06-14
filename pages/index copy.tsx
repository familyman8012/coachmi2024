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

const Home = ({ SsrData }: ISSR) => {
  const { blogData, noticeData, products } = SsrData;

  const { data } = useProductsMain(products);
  const productsData = data?.products;

  console.log("productsData productsData", productsData);

  const genreTitle1 = [
    { title: "나의 가치 발견, 셀프 브랜딩", url: "/view/self" },

    {
      title: '"뽑히는 이력서는 무엇이 다를까?" 강점기반 이력서 작성',
      url: "/view/resume"
    },
    {
      title: "한 번에 끝내는 면접 대비, 면접 클리닉",
      url: "/view/interview"
    },
    {
      title: "커리어 비전 세우기",
      url: "/view/career"
    }
  ];

  const genreTitle2 = [
    { title: "1:1 코칭", url: "/view/one" },
    {
      title: "직무역량? 부트캠프에서 높여보자! 직무부트 캠프",
      url: "/view/bootcamp"
    },
    {
      title: "이 세상 힐링이 아님~ 꿈을 위한 여행 힐링캠프",
      url: "/view/healing"
    },
    { title: "북토크", url: "/view/booktalk" },
    { title: "세미나", url: "/view/seminar" },
    { title: "커리어파티", url: "/view/party" }
    // {
    //   title: "사진, 영상, 영화의 세계",
    //   url: "/view/movie"
    // },
  ];

  function getGenreData1() {
    if (Array.isArray(productsData)) {
      return [
        productsData.filter(el => el.genre === "self"),
        productsData.filter(el => el.genre === "resume"),
        productsData.filter(el => el.genre === "interview"),
        productsData.filter(el => el.genre === "career")
      ];
    }
  }

  function getGenreData2() {
    if (Array.isArray(productsData)) {
      return [
        productsData.filter(el => el.genre === "one"),
        productsData.filter(el => el.genre === "bootcamp"),
        productsData.filter(el => el.genre === "healing"),
        // productsData.filter(el => el.genre === "movie"),
        productsData.filter(el => el.genre === "booktalk"),
        productsData.filter(el => el.genre === "seminar"),
        productsData.filter(el => el.genre === "party")
      ];
    }
  }

  const genreData1 = getGenreData1();
  const genreData2 = getGenreData2();

  console.log("genreData1 genreData1", genreData1);

  return (
    <Layout>
      <IndexSeo />
      <MainVisual />
      <WrapIndex>
        <CategoryMenu />
        <CardSlideArea genreData={genreData1} genreTitle={genreTitle1} />
        <Title>진행 중인 인기 이벤트</Title>
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
        </div>
        <CardSlideArea genreData={genreData2} genreTitle={genreTitle2} />
        <Morebtn />
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
