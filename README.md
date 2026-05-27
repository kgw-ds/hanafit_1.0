# 하나핏 (HanaFit) · UI Kit — Vercel 배포 가이드

청년 금융 어드바이저 프로토타입. 25개 화면 · 페르소나 최서연(24).

## 폴더 구조
```
deploy/
├── index.html              ← 진입점
├── styles.css              ← 디자인 토큰 (Hana 1Q)
├── fonts/                  ← Hana 2.0 + Pretendard
├── assets/illust/          ← 3D 클레이 일러스트
├── hana1q-app/             ← Hana 1Q 컴포넌트 (IOSDevice, TabBar 등)
└── hanafit/                ← 화면 JSX (Screen1Home … Screen28EasyJoin)
```

총 **약 2MB** (standalone 23MB 대비 1/10). Vercel/GitHub 무리 없이 배포 가능.

---

## ① GitHub에 올리기

이 `deploy/` 폴더를 그대로 GitHub 저장소 루트에 푸시하세요.

```bash
cd deploy
git init
git add .
git commit -m "initial: hanafit UI kit"
git branch -M main
git remote add origin https://github.com/<user>/hanafit-ui-kit.git
git push -u origin main
```

---

## ② Vercel에 배포하기

### 방법 A — GitHub 연동 (추천)
1. https://vercel.com 접속 · GitHub 로그인
2. **Add New… → Project** 클릭
3. 위에서 만든 저장소 선택
4. Framework Preset: **Other** (자동 감지됨)
5. Build Command, Output Directory **둘 다 비워둠** (정적 파일)
6. Deploy 클릭 → 끝

### 방법 B — Vercel CLI (드래그앤드롭 대안)
```bash
npm i -g vercel
cd deploy
vercel        # 첫 배포 (질문 모두 기본값)
vercel --prod # 프로덕션 도메인
```

---

## 동작 원리
- React/Babel/babel-standalone은 **unpkg CDN**에서 로드 (번들 불필요)
- JSX는 브라우저에서 직접 transpile (개발 모드)
- 외부 의존성 0개. 정적 파일 호스팅이면 어디든 동작

## 트러블슈팅
- **첫 로딩이 살짝 느림** → Babel-standalone(약 2MB)이 CDN에서 transpile하기 때문. 캐시 후엔 빠름. 프로덕션 최적화하려면 별도 빌드(esbuild/Vite) 필요.
- **폰트가 fallback으로 보임** → `fonts/` 폴더가 제대로 업로드됐는지 확인.
- **이미지 깨짐** → `assets/illust/` 파일 누락. JSX에서는 `assets/illust/X.svg` (앞에 `/` 없음)로 참조됨.
