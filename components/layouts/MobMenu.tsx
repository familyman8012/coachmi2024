import { useEffect, useState } from "react";
import Link from "next/link";
import { MobileMenu } from "./styles";

function MobMenu() {
  // 메뉴를 위해 url 가져오기
  const [headUrl, setheadUrl] = useState("");
  useEffect(() => {
    setheadUrl(
      window?.location?.pathname.substring(
        window?.location?.pathname.lastIndexOf("/") + 1
      )
    );
  }, []);

  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
    setwinReady(true);
  }, []);

  return (
    <MobileMenu>
      <Link href="/">
        <a>
          <span className={headUrl === "" ? "on" : "off"}> 홈</span>
        </a>
      </Link>

      <Link href="/about">
        <a>
          <span className={headUrl === "about" ? "on" : "off"}>코치미소개</span>
        </a>
      </Link>
      <Link href="/program">
        <a>
          <span className={headUrl === "program" ? "on" : "off"}>프로그램</span>
        </a>
      </Link>
      <Link href="/notice">
        <a>
          <span className={headUrl === "notice" ? "on" : "off"}>뉴스</span>
        </a>
      </Link>
      <Link href="/mypage">
        <a>
          <span className={headUrl === "mypage" ? "on" : "off"}>마이</span>
        </a>
      </Link>
    </MobileMenu>
  );
}

export default MobMenu;
