# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)에서 이 저장소의 코드를 작업할 때 참고할 지침을 제공합니다.

## 프로젝트 개요

**프론트엔드 개발자 팬페이지**는 프론트엔드 개발 기술과 트렌드를 소개하는 Next.js 15 웹 애플리케이션입니다. 풍부한 커스텀 애니메이션과 모던 개발 도구를 활용합니다.

## 개발 명령어

### 개발 서버 실행
```bash
npm run dev
```
포트 3000에서 Next.js 개발 서버를 시작합니다. 핫 리로드 활성화.

### 프로덕션 빌드
```bash
npm run build
```
`.next` 디렉토리에 최적화된 프로덕션 빌드를 생성합니다.

### 프로덕션 빌드 실행
```bash
npm start
```
빌드 완료 후 프로덕션 서버를 시작합니다.

### 린팅
```bash
npm run lint
```
Next.js 린팅(ESLint 사용)을 실행하여 TypeScript와 코드 품질을 검사합니다.

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 및 메타데이터
│   ├── page.tsx            # 모든 섹션을 포함한 홈페이지
│   └── globals.css         # 전역 스타일 및 애니메이션 정의
```

**아키텍처 특징:**
- Next.js App Router 사용 (Pages Router 아님)
- 여러 섹션으로 구성된 단일 페이지 레이아웃
- TypeScript strict 모드 활성화
- 경로 별칭 `@/*`는 `src/*`로 매핑

## 기술 스택

- **프레임워크:** Next.js 15.1.0
- **UI 라이브러리:** React 19.0.0
- **스타일링:** Tailwind CSS 3.4.0 (PostCSS 포함)
- **언어:** TypeScript 5.7.0
- **애니메이션:** globals.css의 커스텀 CSS 키프레임

## 애니메이션 시스템

커스텀 애니메이션은 `src/app/globals.css`에 정의되며 유틸리티 클래스로 사용됩니다:

### 사용 가능한 애니메이션 클래스
- `.animate-fadeIn` – 불투명도 페이드 (1s)
- `.animate-slideUp` – 위로 슬라이드 (0.8s)
- `.animate-slideDown` – 아래로 슬라이드 (0.8s)
- `.animate-slideInLeft` – 왼쪽에서 슬라이드 (0.8s)
- `.animate-slideInRight` – 오른쪽에서 슬라이드 (0.8s)
- `.animate-bounce-custom` – 수직 바운스 (2s 무한)
- `.animate-pulse-custom` – 불투명도 펄스 (2s 무한)
- `.animate-gradientShift` – 그래디언트 위치 전환 (3s 무한)
- `.animate-glow` – 박스 섀도우 글로우 효과 (2s 무한)
- `.animate-rotate` – 360° 회전 (8s 무한)
- `.animate-scale` – 크기 증감 펄스 (2s 무한)

**사용법:** JSX 요소에 애니메이션 클래스를 직접 적용합니다. 엇갈린 타이밍을 위해 `style={{ animationDelay: '0.2s' }}`를 사용합니다.

## 스타일링 규칙

- **Tailwind CSS:** 모든 스타일링에 유틸리티-퍼스트 접근법 사용
- **커스텀 CSS:** `globals.css`는 커스텀 애니메이션과 전역 리셋만 사용
- **간격:** Tailwind 표준 스케일 사용 (p-4, gap-8 등)
- **색상:** Tailwind 기본 색상 팔레트 사용 (예: `from-blue-600`, `to-purple-600`)

## 설정 파일

- **next.config.js** – 비어있음 (커스텀 Next.js 설정 없음)
- **tailwind.config.js** – 표준 설정 및 콘텐츠 경로
- **postcss.config.js** – Autoprefixer와 Tailwind 설정
- **tsconfig.json** – 엄격한 TypeScript, ES2020 대상

## Git 및 CI/CD

### GitHub Actions 워크플로우
- **claude-code-review.yml** – PR 생성 시 자동 코드 리뷰
- **claude.yml** – 댓글 및 PR 리뷰에서 `@claude` 멘션 응답

### 현재 브랜치
`feature/add-animations` 브랜치에서 애니메이션 개발 진행 중.

### .gitignore
필수 디렉토리 제외:
- `node_modules/` – 의존성
- `.next/` – 빌드 아티팩트

## 개발 패턴

### 파일 구조
- 페이지 컴포넌트: `src/app/`
- 전역 스타일: `src/app/globals.css`
- src 디렉토리의 절대 경로 임포트: `@/` 프리픽스 사용

### React/TypeScript 패턴
- 모든 `.tsx` 파일에 TypeScript 사용 (strict 모드)
- 타입 메타데이터 임포트: `import type { Metadata }`
- 루트 레이아웃에서 필요시 hydration 경고 억제

### 페이지 컴포넌트
메인 `page.tsx`는 다음을 포함합니다:
- 로고와 애니메이션 아이콘이 있는 헤더
- 그래디언트 텍스트의 히어로 섹션
- 호버 상태가 있는 기능 그리드
- 기술 스택 쇼케이스
- 애니메이션 이모지가 있는 푸터

각 주요 섹션은 시맨틱 `<section>` 태그로 감싸져 있으며 적절한 애니메이션이 적용됩니다.

## 주요 의존성

- **react & react-dom** – UI 렌더링
- **next** – 프레임워크 및 개발 도구
- **typescript** – 타입 체킹
- **tailwindcss** – CSS 유틸리티 프레임워크
- **postcss & autoprefixer** – CSS 처리

## 공통 작업

### 새로운 애니메이션 추가
1. `src/app/globals.css`에 `@keyframes` 정의
2. 대응하는 `.animate-*` 클래스 생성
3. JSX 요소에 클래스 적용 및 타이밍 조정

### Tailwind 설정 업데이트
1. `tailwind.config.js`의 theme 또는 plugins 수정
2. 새로운 파일 타입 추가 시 콘텐츠 경로 업데이트
3. 개발 서버가 자동 리로드됨

### 페이지 변경
1. 콘텐츠나 구조 변경 시 `src/app/page.tsx` 편집
2. 스타일링에 Tailwind 유틸리티 사용
3. 효과에 애니메이션 클래스 참조
4. 개발 서버가 자동 핫 리로드됨

## 성능 고려사항

- 애니메이션은 CSS로 하드웨어 가속화 활용
- 애니메이션 지연은 인라인 `style` 속성으로 엇갈린 효과 적용
- 동적 콘텐츠가 있는 요소에 `suppressHydrationWarning` 사용
- Tailwind의 JIT 컴파일로 사용된 스타일만 포함
