export default function Home() {
  return (
    <>
      <main className="flex-1 bg-white">
        <header className="bg-white border-b">
          <div className="max-w-5xl mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold">Frontend Fan Page</h1>
          </div>
        </header>

        <section className="max-w-5xl mx-auto px-4 py-20">
          <h2 className="text-5xl font-bold mb-6">프론트엔드 개발자를 위한 공간</h2>
          <p className="text-xl text-gray-600 mb-8">
            최신 웹 기술과 개발 트렌드를 함께 탐색해보세요
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg">
            시작하기
          </button>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">주요 기능</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">⚡ 빠른 성능</h3>
                <p className="text-gray-600">최적화된 코드와 최신 기술로 빠른 로딩 속도를 제공합니다.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">🎨 아름다운 디자인</h3>
                <p className="text-gray-600">사용자 중심의 디자인으로 최고의 경험을 제공합니다.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">📱 반응형 디자인</h3>
                <p className="text-gray-600">모든 기기에서 완벽한 사용자 경험을 제공합니다.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p>&copy; 2026 Frontend Fan Page. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
