import { Link } from "react-router-dom";

export default function MainFooter() {
  return (
    <footer className="flex flex-col gap-4 dark:bg-neutral-900 px-10 pt-5 pb-10">
      <nav className="flex flex-row gap-4">
        <Link to="#">이용약관</Link>
        <Link to="#">개인정보처리방침</Link>
        <Link to="#">클래스 론칭 문의</Link>
      </nav>

      <hr />

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <img src="src/assets/logo-sm.svg" className="w-12 h-12" />
          <div className="flex flex-col gap-6 lg:gap-2">
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-12">
              <span>대표이사: 홍길동</span>
              <span>사업자 번호: 123-12-123456</span>
              <span>통신판매신고번호: 2077-서울서초-0000</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-2 lg:gap-12">
              <span>대표번호: 000-0000-0000</span>
              <span>주소: 서울시 어쩌구 저쩌구</span>
              <span>&copy; All rights reserved.</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:w-1/3">
          <h2 className="pb-5 font-semibold text-lg">고객센터</h2>

          <span>평일 오전 10시 ~ 오후 6시</span>
          <span>
            문의: <a href="mailto:example@example.com">example@example.com</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
