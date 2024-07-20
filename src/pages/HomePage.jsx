export default function HomePage() {
  return (
    <main className="flex-1">
      <div className="">
        <section className="home-banner h-[400px] md:h-[600px] py-10 bg-gradient-to-t from-blue-900 to-black text-white">
          <h1 className="text-4xl md:text-6xl text-center text-whiWte py-5">
            북미 IT 시장에서
          </h1>
          <h1 className="text-4xl md:text-6xl text-center text-white">
            <span className="text-teal-500">성공적</span>으로{" "}
            <span className="text-teal-500">취업하기</span>
          </h1>
          <h1 className="text-4xl md:text-6xl text-center text-white py-5">
            8주 완성 코스
          </h1>
          <button className="my-10 px-10 py-5 bg-red-500 rounded-xl text-white flex flex-col mx-auto">
            참가 신청
          </button>
          <div className="md:grid grid-cols-5 mt-32 py-10 bg-blue-950">
            <div className="text-center">
              <p className="text-gray-400">모집 기간</p>
              <p>24.07.15(월) ~ 24.08.15(목)</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400">개강 일정</p>
              <p>24.08.17(토)</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400">과정 기간</p>
              <p>8주 과정</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400">교육 방법</p>
              <p>매주 토요일, 9:00 AM - 11:30 AM (메인 강의)</p>
              <p>매주 일요일, 10:00 AM - 12:00 PM (스터디 그룹)</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400">수업 비용</p>
              <p>100만원</p>
            </div>
          </div>
        </section>
        <section></section>
      </div>
    </main>
  );
}
