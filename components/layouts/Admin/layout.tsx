import { useSession } from "next-auth/client";
import Link from "next/link";
import { WrapLayout } from "./styles";

interface Props {
  children: React.ReactNode;
  genre?: string;
}

const AdminMenu = [
  { menuName: "상품등록", url: "/creator" },
  { menuName: "공지사항", url: "/admin/notice" },
  { menuName: "결제내역", url: "/admin/payment" },
  { menuName: "사용자관리", url: "/admin/user" }
  // { menuName: "메인비쥬얼", url: "/admin/mainvis" }
];

function Adminlayout({ children, genre }: Props) {
  const [session] = useSession();

  console.log("session?.user", session?.user);

  return (
    <WrapLayout>
      <div className="left">
        <ul>
          {AdminMenu.map(el => (
            <li key={el.menuName}>
              <Link href={el.url}>
                <a>{el.menuName}</a>
              </Link>
            </li>
          ))}
          {session?.user.role === "master" && (
            <li>
              <a
                href="https://developers.tosspayments.com/93136/accounts/146791/phases/test/payment-logs"
                target="_blank"
                rel="noreferrer"
              >
                토스 상점관리자
              </a>
            </li>
          )}
        </ul>
      </div>
      <div className="content">{children}</div>
    </WrapLayout>
  );
}

export default Adminlayout;
