import { useCallback, useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Header,
  LoggedIn,
  Login,
  MenuArea,
  MyPageLayer,
  SearchForm,
  TopNoticeBar
} from "./styles";
import { css } from "@emotion/react";

// export const CategoryLink = [
//   { title: "셀프브랜딩", url: "self" },
//   { title: "이력서 작성", url: "resume" },
//   { title: "면접 클리닉", url: "interview" },
//   { title: "커리어 비전", url: "career" },
//   { title: "1:1 코칭", url: "one" },
//   { title: "직무 부트캠프", url: "bootcamp" },
//   { title: "힐링캠프", url: "healing" },
//   { title: "북토크", url: "booktalk" },
//   { title: "세미나", url: "seminar" },
//   { title: "커리어파티", url: "party" }

// ];

export const CategoryLink = [
  { title: "코치미에 대하여", url: "about" },
  { title: "진행중인 교육", url: "lecture" },
  { title: "교육소개", url: "intro" },
  // { title: "오시는길", url: "contact" },
  { title: "전체프로그램", url: "program" },
  { title: "스토리", url: "notice" }
];

const mypageLink = [
  { title: "내모임", url: "/mypage" },
  { title: "결제사항", url: "/mypage/payment" },
  { title: "프로필 변경", url: "/profile" }
];

function Head() {
  const [session] = useSession();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [searchKeyword, setsearchKeyword] = useState("");
  const [showBulbble, setshowBulbble] = useState(false);

  const router = useRouter();

  // 메뉴를 위해 url 가져오기
  const [headUrl, setheadUrl] = useState("");
  useEffect(() => {
    setheadUrl(
      window?.location?.pathname.substring(
        window?.location?.pathname.lastIndexOf("/")
      ) === ""
        ? "home"
        : window?.location?.pathname.substring(
            window?.location?.pathname.lastIndexOf("/") + 1
          )
    );
  }, []);

  useEffect(() => {
    setIsOpenMenu(false);
  }, [router.query]);

  const handlerSearchWrite = useCallback(e => {
    setsearchKeyword(e.target.value);
  }, []);
  const handleSearchMove = useCallback(
    e => {
      e.preventDefault();
      if (searchKeyword === "") return alert("키워드를 입력하셔야합니다.");
      router.push(`/search?keyword=${searchKeyword}`);
    },
    [router, searchKeyword]
  );

  const handleShowBubble = useCallback(() => {
    setshowBulbble(prev => !prev);
  }, []);

  const goMypage = useCallback(
    (url: string) => {
      router.push(url);
      setshowBulbble(false);
    },
    [router]
  );

  return (
    <>
      <Header>
        <div className="inner">
          <h1>
            <Link href="/">
              <a>
                <img src="/images/logo_coachmi_horizontal.png" alt="코치미" />
              </a>
            </Link>
          </h1>
          <SearchForm onSubmit={handleSearchMove}>
            <span className="btn-search" onClick={handleSearchMove}></span>
            <label className="hiddenZoneV" htmlFor="search-input">
              함께 하고 싶은 제목, 팀리더를 검색해보세요.
            </label>
            <input
              type="text"
              name="keyword"
              placeholder="교육프로그램, 장소, 코치를 검색해보세요."
              maxLength={50}
              autoComplete="off"
              value={searchKeyword}
              onChange={e => handlerSearchWrite(e)}
            />
          </SearchForm>
          <aside>
            <ul>
              {/* <li>
                <Link href="/live">
                  <a>라이브</a>
                </Link>
              </li> */}
              {session?.user.role !== "user" && (
                <li>
                  <Link href="/creator">강의 등록</Link>
                </li>
              )}
              <li>
                <Link href="/notice">
                  {/* <span
                  onClick={() =>
                    alert("크리에이터에 대한 다양한 지원을 준비 중에 있습니다.")
                  }
                > */}
                  공지사항
                  {/* </span> */}
                </Link>
              </li>
              {session?.user.role === "master" && (
                <li>
                  <Link href="/admin/notice">
                    {/* <span
                  onClick={() =>
                    alert("크리에이터에 대한 다양한 지원을 준비 중에 있습니다.")
                  }
                > */}
                    공지사항 등록
                    {/* </span> */}
                  </Link>
                </li>
              )}
              <li className="my">
                <Link href="/mypage">
                  <a>마이페이지</a>
                </Link>
              </li>
            </ul>
          </aside>
          <Login>
            {!session ? (
              <Link href="/signin">로그인</Link>
            ) : (
              <LoggedIn onClick={handleShowBubble}>
                <div className="hiddenZoneV">MY</div>
              </LoggedIn>
            )}
            {showBulbble && (
              <MyPageLayer>
                <ul>
                  {mypageLink.map((el, i) => (
                    <li onClick={() => goMypage(el.url)} key={i}>
                      {el.title}
                    </li>
                  ))}
                  <li
                    onClick={() =>
                      signOut({
                        callbackUrl: "/"
                      })
                    }
                  >
                    로그아웃
                  </li>
                </ul>
              </MyPageLayer>
            )}
          </Login>
        </div>
        <MenuArea>
          {CategoryLink.map(el => (
            <li key={el.url}>
              <Link href={el.url}>
                <a
                  className={
                    headUrl === el.url || "home" === headUrl ? "on" : ""
                  }
                >
                  {el.title}
                </a>
              </Link>
            </li>
          ))}
        </MenuArea>
      </Header>
    </>
  );
}

export default Head;
