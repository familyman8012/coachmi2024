import { useSession } from "next-auth/client";
import router from "next/router";
import axios from "axios";
import dayjs from "dayjs";
import purify from "dompurify";
import { prodUpStore, QuillStore } from "@src/mobx/store";
import AdminLayout from "@components/layouts/Admin/layout";
import { ConfirmView } from "@components/pageComp/creator/styles";
import { AdminBoxBtn } from "@components/modules/QuillEditor/styles";

function Confirm() {
  //세션 정보 가져오기
  const [session] = useSession();

  // 데이터불러오기
  if (prodUpStore.data !== null) {
    prodUpStore.data.body = QuillStore.data;
    if (
      prodUpStore.data.saleprice === "" ||
      prodUpStore.data.saleprice === null
    ) {
      prodUpStore.data.saleprice = 0;
    }
    if (!prodUpStore.data.imgurl.match(/\S*\.gif/i)) {
      prodUpStore.data.imgurl = prodUpStore.data.imgurl.replace(
        /\/cardoriginal\//,
        "/card/"
      );
    }

    //등록
    const saveProduct = () => {
      const data = {
        ...prodUpStore?.data,
        firstmeet:
          prodUpStore?.data.firstmeet === "" ||
          prodUpStore?.data.firstmeet === "Invalid Date"
            ? null
            : prodUpStore?.data.firstmeet,
        meetday:
          prodUpStore?.data.meetday === "" ||
          prodUpStore?.data.meetday === "Invalid Date"
            ? null
            : prodUpStore?.data.meetday
      };

      axios.post("/api/product/", data).then(function (resp) {
        prodUpStore.reset();
        router.push("./");
      });
    };

    //수정
    const modifyConfrimProduct = (_id: string) => {
      const data = {
        ...prodUpStore?.data,
        firstmeet:
          prodUpStore?.data.firstmeet === "" ||
          prodUpStore?.data.firstmeet === "Invalid Date"
            ? null
            : prodUpStore?.data.firstmeet,
        meetday:
          prodUpStore?.data.meetday === "" ||
          prodUpStore?.data.meetday === "Invalid Date"
            ? null
            : prodUpStore?.data.meetday
      };

      axios.put(`/api/product/${_id}`, data).then(function (resp) {
        prodUpStore.reset();
        router.push("./");
      });
    };

    const stringClass = (key: string) => {
      switch (key) {
        case "one":
          return "1:1 코칭";
        case "self":
          return "셀프 브랜딩";
        case "career":
          return "커리어 비전 세우기";
        case "resume":
          return "이력서/자소서 컨설팅";
        case "interview":
          return "면접 클리닉";
        case "bootcamp":
          return "직무 부트캠프";
        case "healing":
          return "힐링 코칭캠프";
        case "booktalk":
          return "북토크 & 코칭";
        case "seminar":
          return "강연/세미나";
        case "party":
          return "커리어 파티";
      }
    };

    return (
      <AdminLayout genre={"creator"}>
        <>
          <ConfirmView>
            <div className="list">
              <h2>대표이미지</h2>
              <div className="box_basic_info">
                <div className="thumb">
                  <img
                    src={prodUpStore?.data.imgurl}
                    alt="모임대표이미지 등록"
                  />
                </div>
                <dl>
                  <dt>제목</dt>
                  <dd>{prodUpStore?.data.title}</dd>
                  <dt>등록자</dt>
                  <dd>{session?.user.name}</dd>
                  <dt>코치</dt>
                  <dd>{prodUpStore?.data.people}</dd>
                  {prodUpStore?.data.genre !== "one" && (
                    <>
                      <dt>구분</dt>
                      <dd>{stringClass(prodUpStore?.data.genre)}</dd>
                      <dt>최대 인원</dt>
                      <dd>{prodUpStore?.data.maxlimit}</dd>
                      <dt>온라인/오프라인 선택</dt>
                      <dd>{prodUpStore?.data.onoff}</dd>
                      {prodUpStore?.data.location && (
                        <>
                          <dt>장소</dt>
                          <dd>{prodUpStore?.data.location}</dd>
                        </>
                      )}

                      <dt>날짜</dt>
                      <dd>
                        {dayjs(prodUpStore?.data.firstmeet).format(
                          "YY년 M월 DD일 HH시 MM분"
                        )}
                      </dd>
                      <dt>금액</dt>
                      <dd>{prodUpStore?.data.price}</dd>
                      <dt>할인</dt>
                      <dd>{prodUpStore?.data.saleprice}</dd>
                      <dt>최종 금액</dt>
                      <dd>
                        {prodUpStore?.data.price - prodUpStore?.data.saleprice}
                      </dd>
                    </>
                  )}
                </dl>
              </div>
              <h2>상세페이지</h2>
              <div
                className="content"
                dangerouslySetInnerHTML={{
                  __html: purify.sanitize(prodUpStore?.data.body)
                }}
              />
            </div>
            <p>를 등록하시겠습니까?</p>
            <AdminBoxBtn>
              <button onClick={() => router.back()}>뒤로</button>
              {prodUpStore.state === "create" ? (
                <button onClick={saveProduct}>등록</button>
              ) : (
                <button
                  onClick={() => modifyConfrimProduct(prodUpStore?.data._id)}
                >
                  수정
                </button>
              )}
            </AdminBoxBtn>
          </ConfirmView>
        </>
        )
      </AdminLayout>
    );
  }
  return <div>상품을 다시 등록해주세요</div>;
}

export default Confirm;
