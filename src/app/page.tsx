export default function Home() {
  return (
    <>
      <main className="flex-1 bg-white">
        <header className="bg-white border-b animate-slideDown">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold animate-pulse-custom">Frontend Fan Page</h1>
            <div className="flex gap-4">
              <span className="text-3xl animate-bounce-custom">✨</span>
              <span className="text-3xl animate-rotate">⚙️</span>
            </div>
          </div>
        </header>

        <section className="max-w-5xl mx-auto px-4 py-20">
          <div className="animate-slideUp">
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradientShift" style={{ backgroundSize: '200% 200%' }}>
              프론트엔드 개발자를 위한 공간
            </h2>
          </div>
          <p className="text-xl text-gray-600 mb-8 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            최신 웹 기술과 개발 트렌드를 함께 탐색해보세요
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg animate-glow transition-all hover:scale-105">
            <span className="inline-block animate-pulse-custom">▶</span> 시작하기
          </button>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center animate-slideDown">
              주요 기능
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow animate-slideInLeft hover:shadow-lg transition-shadow" style={{ animationDelay: '0.1s' }}>
                <div className="text-5xl mb-4 inline-block animate-bounce-custom">⚡</div>
                <h3 className="text-xl font-bold mb-4">빠른 성능</h3>
                <p className="text-gray-600">최적화된 코드와 최신 기술로 빠른 로딩 속도를 제공합니다.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow animate-slideUp hover:shadow-lg transition-shadow" style={{ animationDelay: '0.2s' }}>
                <div className="text-5xl mb-4 inline-block animate-rotate">🎨</div>
                <h3 className="text-xl font-bold mb-4">아름다운 디자인</h3>
                <p className="text-gray-600">사용자 중심의 디자인으로 최고의 경험을 제공합니다.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow animate-slideInRight hover:shadow-lg transition-shadow" style={{ animationDelay: '0.3s' }}>
                <div className="text-5xl mb-4 inline-block animate-pulse-custom">📱</div>
                <h3 className="text-xl font-bold mb-4">반응형 디자인</h3>
                <p className="text-gray-600">모든 기기에서 완벽한 사용자 경험을 제공합니다.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20 animate-fadeIn">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 animate-slideDown">
              기술 스택
            </h2>
            <div className="flex justify-center gap-12 flex-wrap">
              <div className="text-center animate-scale">
                <div className="text-6xl mb-2">⚛️</div>
                <p className="font-semibold">React 19</p>
              </div>
              <div className="text-center animate-scale" style={{ animationDelay: '0.3s' }}>
                <div className="text-6xl mb-2">▲</div>
                <p className="font-semibold">Next.js 15</p>
              </div>
              <div className="text-center animate-scale" style={{ animationDelay: '0.6s' }}>
                <div className="text-6xl mb-2">🎨</div>
                <p className="font-semibold">Tailwind CSS</p>
              </div>
              <div className="text-center animate-scale" style={{ animationDelay: '0.9s' }}>
                <div className="text-6xl mb-2">📘</div>
                <p className="font-semibold">TypeScript</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 animate-slideUp">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="mb-4">&copy; 2026 Frontend Fan Page. All rights reserved.</p>
          <div className="flex justify-center gap-4 text-2xl">
            <span className="animate-bounce-custom" style={{ animationDelay: '0s' }}>🚀</span>
            <span className="animate-bounce-custom" style={{ animationDelay: '0.2s' }}>💻</span>
            <span className="animate-bounce-custom" style={{ animationDelay: '0.4s' }}>✨</span>
          </div>
        </div>
      </footer>
    </>
  )
}
