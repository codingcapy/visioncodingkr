export default function HomePage() {
	return (
		<main className="flex-1">
			<div className="">
				<section className="home-banner h-[800px] md:h-[680px] py-10 pt-20 bg-gradient-to-t from-blue-900 to-black text-white">
					<h1 className="text-4xl md:text-5xl text-center text-white py-5 text-bold">
						북미 IT 시장에서
					</h1>
					<h1 className="text-4xl md:text-5xl text-center text-white">
						<span className="text-teal-500">성공적</span>으로
						<span className="text-teal-500">취업하기</span>
					</h1>
					<h1 className="text-4xl md:text-5xl text-center text-white py-5 text-bold">
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
							<p>8주</p>
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
				<h1 className="pt-10 text-4xl md:text-6xl text-center">북미 IT 시장에서 성공적 취업까지</h1>
				<h1 className="text-4xl md:text-6xl text-center">이력서와 인터뷰 기반의 커리큘럼</h1>
				<section className="mx-2 py-10 flex flex-col">
					<div className="shadow-xl rounded-xl border border-gray-300 p-10 my-5 md:w-[825px] mx-auto">
						<p className="text-red-500">1주차: 북미 IT 취업 트렌드와 네트워킹</p>
						<p className="py-10">IT 취업 전망 및 연봉: 캐나다와 미국의 최신 IT 취업 동향과 연봉 수준
							북미 취업 과정: 북미의 취업 절차와 면접 과정 이해
							이력서와 LinkedIn: 눈에 띄는 북미 스타일의 이력서 작성과 LinkedIn 프로필 최적화
							네트워킹 팁: 네트워킹을 통해 취업 기회 넓히기</p>
					</div>
					<div className="shadow-xl rounded-xl border border-gray-300 p-10 my-5 md:w-[825px] mx-auto">
						<p className="text-red-500">2주차: 효과적인 구직 전략과 첫 인터뷰 준비</p>
						<p className="py-10">LinkedIn 활용법: 효과적인 네트워킹과 구직 전략
							인사팀 인터뷰 준비: HR 인터뷰에서 준비할 것들, Job Description 분석, 나에게 맞는 회사 찾기</p>
					</div>
					<div className="shadow-xl rounded-xl border border-gray-300 p-10 my-5 md:w-[825px] mx-auto">
						<p className="text-red-500">3주차: 기술 면접 기본기 다지기</p>
						<p className="py-10">기술 면접 개요: 기술 면접에서 주로 다루는 주제와 준비 방법
							코딩 인터뷰 플랫폼: LeetCode, HackerRank, CodeSignal을 활용한 준비 전략
							알고리즘 문제 풀이: Array, String, Linked List 문제 해결 기법</p>
					</div>
					<div className="shadow-xl rounded-xl border border-gray-300 p-10 my-5 md:w-[825px] mx-auto">
						<p className="text-red-500">4주차: 심화 기술 면접 준비</p>
						<p className="py-10">고급 알고리즘: Dynamic Programming, Graphs, Trees 문제 풀이 전략
							문제 해결 과정 설명: 문제 해결 과정을 논리적으로 설명하는 방법</p>
					</div>
					<div className="shadow-xl rounded-xl border border-gray-300 p-10 my-5 md:w-[825px] mx-auto">
						<p className="text-red-500">5주차: 시스템 설계 면접 대비</p>
						<p className="py-10">시스템 설계 기초: 시스템 설계의 기본 개념과 원리 이해
							설계 문제 해결 전략: Scaling, Load Balancing, Database Design 등의 설계 문제 해결법</p>
					</div>
					<div className="shadow-xl rounded-xl border border-gray-300 p-10 my-5 md:w-[825px] mx-auto">
						<p className="text-red-500">6주차: 행동 면접 준비</p>
						<p className="py-10">행동 면접 개요: 행동 면접의 중요성과 준비 방법
							STAR 기법: 상황, 과제, 행동, 결과로 구성된 답변 전략
							빈번히 묻는 질문들: 자주 나오는 행동 면접 질문과 답변 연습</p>
					</div>
					<div className="shadow-xl rounded-xl border border-gray-300 p-10 my-5 md:w-[825px] mx-auto">
						<p className="text-red-500">7주차: 실전 모의 면접</p>
						<p className="py-10">1:1 모의 면접: 테크니컬 및 행동 면접 실전 연습
							피드백: 면접 후 상세 피드백 제공과 개선 방안 제시</p>
					</div>
					<div className="shadow-xl rounded-xl border border-gray-300 p-10 my-5 md:w-[825px] mx-auto">
						<p className="text-red-500">8주차: 최종 리뷰와 개인별 피드백</p>
						<p className="py-10">최종 리뷰와 Q&A: 전체 과정 리뷰 및 질의응답
							최종 모의 면접: 개인별 최종 점검과 피드백
							수료식과 네트워킹 이벤트: 수료식과 함께 네트워킹 기회 제공	</p>
					</div>
				</section>
			</div>
		</main>
	);
}
