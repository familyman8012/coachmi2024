import Link from "next/link";
import { CategoryLink } from "@components/layouts/Head";
import { CategoryMenu, IcoLink } from "./styles";

function index() {
  const CategoryMenuItem = [...CategoryLink];
  return (
    <CategoryMenu>
      {CategoryMenuItem.map((el, i) =>
        el.title === "셀프브랜딩" ? (
          <Link href={`/view/${el.url}`} key={i} passHref>
            <IcoLink num={i}>{el.title}</IcoLink>
          </Link>
        ) : (
          <IcoLink onClick={() => alert("준비 중입니다.")}>{el.title}</IcoLink>
        )
      )}
    </CategoryMenu>
  );
}

export default index;
