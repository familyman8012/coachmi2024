import { Footer } from "./styles";

function Foot() {
  return (
    <Footer>
      <div className="inner">
        <div className="compaynyInfo">
          <h1>코치미(주)</h1>
          <p>대표 정유리 | 사업자번호 : 831-88-02977</p>
          <p>
            서울특별시 마포구 월드컵북로6길 36  |
            0507-1354-0876 | 
          </p>
        </div>
        <ul className="link_policy">
          <li>코치미 운영정책</li>
          <li>개인정보처리방침</li>
          <li>이용약관</li>
          <li>공지사항</li>
        </ul>
      </div>
    </Footer>
  );
}

export default Foot;
