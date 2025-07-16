import { Link } from "react-router-dom";

export default function MainHeader() {
  return (
    <header className="px-4 py-2 w-full flex flex-row justify-between items-center bg-neutral-900">
      {/* 헤더 좌측 영역 */}
      <nav className="flex flex-row gap-5 items-center">
        {/* 로고 */}
        <Link to="/" className="w-10 aspect-square">
          <img
            src="src/assets/logo-sm.svg"
            alt="Logo"
            className="w-full h-full"
          />
        </Link>

        <div className="hidden lg:flex flex-row gap-5">
          <Link to="#">클래스</Link>
          <Link to="#">배움 노트</Link>

          <span className="h-6 w-[1px] bg-neutral-600"></span>

          <Link to="/topics">토픽 인사이트</Link>

          <span className="h-6 w-[1px] bg-neutral-600"></span>

          <Link to="#">밍랩</Link>
          <Link to="#">밍고 스테이지</Link>

          <span className="h-6 w-[1px] bg-neutral-600"></span>

          <Link to="#">밍고 스토어</Link>
          <Link to="#">밍거진</Link>
        </div>
      </nav>

      {/* 헤더 우측 영역 */}
      <nav className="flex flex-row gap-5 items-center">
        <Link to="/login">로그인</Link>
        <span className="hidden lg:block h-6 w-[1px] bg-neutral-600"></span>
        <Link to="#" className="hidden lg:block">
          우리가 하는 일
        </Link>
      </nav>
    </header>
  );
}
