import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import { dbConnect, Product } from "../../pages/api";
import purify from "dompurify";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { DetailSeo } from "@components/elements/CommonSeo";
import Layout from "@components/layouts";
import {
  Benefit,
  ClubDetailInfo,
  Faq,
  Refund,
  WePlay,
  InfoMemberChart,
  InfoCard
} from "@components/pageComp/detailview";
import Review from "@components/pageComp/detailview/Review";
import Curriculum from "@components/pageComp/detailview/Curriculum";
import { IProduct } from "@src/typings/db";
import {
  Content,
  DetailViewWrap,
  EditTxt
} from "@components/pageComp/detailview/styles";
import { useProdDetail } from "@src/hooks/api/useProducts/useProductDetail";
import dayjs from "dayjs";
import { css } from "@emotion/react";
import _ from "lodash";

export interface IDetail {
  item: IProduct;
}

const DetailView = ({ item }: IDetail) => {
  const [session] = useSession();
  const router = useRouter();
  const { _id } = router.query;
  const today = dayjs().format("YYYYMMDD");

  const { data } = useQuery("detail", () => item);
  const { data: data2 } = useProdDetail(String(_id));

  const linkPay = (_id: string, coachId: string) => {
    if (session === null) {
      alert("로그인 후 결제 가능합니다.");
      return;
    }
    router.push(`/payment/${_id}?coachId=${coachId}`);
  };

  return (
    <>
      <DetailSeo
        _id={String(_id)}
        imgurl={String(data?.imgurl)}
        title={String(data?.title)}
      />
      <Layout className="detail">
        <DetailViewWrap>
          {data && _id !== undefined && data2 !== undefined && (
            <>
              <InfoCard
                data={data2}
                _id={String(_id)}
                session={session}
                community={false}
              />

              <Content>
                <EditTxt
                  dangerouslySetInnerHTML={{
                    __html: purify.sanitize(data?.body)
                  }}
                />

                {data.isvod ? (
                  <Curriculum data={data} />
                ) : (
                  <ClubDetailInfo item={data} />
                )}
                <InfoMemberChart />

                <Review item={data} id={String(_id)} />
                {/* <WePlay />
                <Benefit /> */}
                <Benefit />
                <Refund title={data.title} />
                {/* <Faq /> */}
              </Content>
            </>
          )}
        </DetailViewWrap>
      </Layout>
    </>
  );
};

export default DetailView;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { _id: "637bbbbe05438c34362e0151" } }],
    fallback: true // --> false 시 1,2,3외에는 404
  };
};

export const getStaticProps: GetStaticProps = async ctx => {
  await dbConnect();

  const _id = ctx.params?._id;
  const result = await Product.find(
    { _id },
    { createdAt: false, updatedAt: false }
  ).lean();

  const data = JSON.parse(JSON.stringify(result[0]));

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("detail", () => data);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      item: data
    }
  };
};
