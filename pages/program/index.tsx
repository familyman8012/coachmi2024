import { GetServerSideProps } from "next";
import { dbConnect, Product, Notice } from "pages/api";
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
import { dehydrate, QueryClient } from "react-query";

const Home = ({ SsrData }: ISSR) => {
  const { blogData, noticeData, products } = SsrData;

  const { data } = useProductsMain(products);
  const productsData = data?.products;

  console.log("productsData", productsData);

  return (
    <Layout>
      <IndexSeo />

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
              <Link href={`/detailview/${el._id}`}>
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
      </WrapIndex>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await dbConnect();

  const [result] = await Promise.all([
    Product.find(
      { isvod: { $ne: true }, islive: { $ne: false } },
      { body: false }
    )
      .sort({ firstmeet: 1 })
      .limit(90)
      .lean()
  ]);

  const SsrData = {
    products: JSON.parse(JSON.stringify(result))
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
