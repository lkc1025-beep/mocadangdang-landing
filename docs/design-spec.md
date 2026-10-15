# 디자인 명세: 모카당당 랜딩페이지 (실습용 가상 업체)

기준 문서: `docs/prd.md` (승인됨), `docs/brief.md`. 문구 · 섹션 순서 · 가격은 PRD 그대로이며 이 문서에서 바꾸지 않는다.
분위기: 따뜻한 카페 / 둥근 모서리 / 여백 넉넉. 실제 업체의 브랜드 모습을 따라 하지 않고 브리프의 색과 글꼴만 쓴다.

---

## 1. 색상 토큰

브리프에서 받은 브랜드 색이 먼저, 그 아래에 보조 색(브랜드 색에서 파생)을 둔다.

### 1-1. 브랜드 색 (브리프 지정)

| 토큰 이름 | HEX | 쓰는 곳 |
|---|---|---|
| `--color-heading` | #006241 | 제목(h1·h2), 작은 제목(eyebrow), 로고 글자, 가격 숫자 |
| `--color-primary` | #00754A | 기본 버튼 배경, 링크 강조, 메뉴 '구독하기' 알약 배경 |
| `--color-dark` | #1E3932 | 어두운 띠(이번달 원두 · 마무리 띠), 꼬리말 배경 |
| `--color-bg` | #F2F0EB | 페이지 전체 배경 (웜 아이보리) |
| `--color-card` | #FFFFFF | 카드 배경, 상단 메뉴 배경 |
| `--color-text` | #333333 | 본문 글자 (진한 회색) |

### 1-2. 보조 색 (새 브랜드 색이 아니라 위 색의 명암 조정)

| 토큰 이름 | HEX | 쓰는 곳 |
|---|---|---|
| `--color-primary-hover` | #005C39 | 기본 버튼 마우스 올림 |
| `--color-primary-active` | #004B2E | 기본 버튼 누름 |
| `--color-text-muted` | #5B5B5B | 보조 설명, 후기 작성자, 작은 주의 글씨 |
| `--color-on-dark` | #FFFFFF | 어두운 띠 위의 제목 · 버튼 글자 |
| `--color-on-dark-muted` | #D5E0DB | 어두운 띠 위의 설명 글자 |
| `--color-on-primary` | #FFFFFF | 초록 버튼 위 글자 |
| `--color-line` | #E3DFD6 | 카드 테두리, 구분선, 메뉴 아래선 |
| `--color-surface-soft` | #E8E4DA | 이미지 자리 배경(밝은 구역) |
| `--color-surface-dark-soft` | #2C4A42 | 이미지 자리 배경(어두운 띠 위) |
| `--color-accent-tint` | #E4EFE9 | 대표 카드 뱃지 배경, 보조 버튼 눌림 배경 |
| `--color-focus` | #00754A | 키보드 포커스 링 (2px 선 + 2px 간격) |

글자 대비 확인(계산값): 흰 글자 / #00754A 약 5.8:1, 흰 글자 / #1E3932 약 12:1, #333333 / #F2F0EB 약 10:1, #5B5B5B / #F2F0EB 약 5.8:1 → 모두 일반 글자 기준 4.5:1 이상.

---

## 2. 글꼴

| 구분 | 글꼴 | 쓰는 굵기 | 쓰는 곳 |
|---|---|---|---|
| 영문 · 숫자 | Manrope | 500, 700, 800 | 작은 제목(eyebrow, 영문), 가격 숫자 (`모카당당` 등 한글 제목은 Noto Sans KR) |
| 한글 | Noto Sans KR | 400, 500, 700 | 본문, 제목, 버튼, 메뉴 |

- 글꼴은 2개(최대 3개 이내). Pretendard는 쓰지 않는다.
- 글꼴 목록(`font-family`): `"Manrope", "Noto Sans KR", system-ui, -apple-system, "Malgun Gothic", sans-serif`
  - 영문 글자는 Manrope, 한글은 Manrope에 없으므로 자동으로 Noto Sans KR이 쓰인다. 한글 위주 요소도 같은 목록을 써서 섞여도 어긋나지 않게 한다.
- 불러오기: Google Fonts, 필요한 굵기만(`Manrope:wght@500;700;800`, `Noto+Sans+KR:wght@400;500;700`), `display=swap`.
- 굵기 쓰임: 400 본문 / 500 메뉴 · 보조 설명 · 작은 제목 / 700 제목 · 버튼 · 가격 / 800 큰 제목 `모카당당`(hero h1)과 대표 카드 가격.

### 글자 크기 단계

줄 간격은 한글 기준으로 넉넉하게. PC / 모바일(390px) 값을 각각 쓴다. `clamp()`는 쓰지 않고 미디어쿼리 한 번(768px)으로 바꾼다.

| 토큰 | PC | 모바일 | 줄 간격 | 굵기 | 쓰는 곳 |
|---|---|---|---|---|---|
| `--font-size-display` | 72px | 44px | 1.15 | 800 | hero 큰 제목 `모카당당` |
| `--font-size-h2` | 40px | 28px | 1.3 | 700 | 섹션 제목 |
| `--font-size-h3` | 24px | 20px | 1.4 | 700 | 카드 이름, 마무리 띠 제목(모바일은 28px, h2 사용) |
| `--font-size-lead` | 20px | 17px | 1.7 | 400 | hero 부제 · 설명, 브랜드 설명 |
| `--font-size-body` | 17px | 16px | 1.75 | 400 | 일반 본문, 카드 설명 |
| `--font-size-small` | 15px | 14px | 1.6 | 500 | 카드 안내 글, 후기 작성자 |
| `--font-size-eyebrow` | 14px | 13px | 1.4 | 700 | 작은 제목 (Coffee Subscription 등). 영문, 글자 간격 0.12em, 대문자 변환 안 함(문구 그대로) |
| `--font-size-price` | 32px | 28px | 1.2 | 700 | 카드 가격 숫자 (대표 카드는 40px / 34px, 800) |
| `--font-size-note` | 13px | 13px | 1.6 | 400 | '※ 실습용 예시 후기입니다' |

- 본문 최소 16px(모바일) 유지. 안내 글 14px 이하로 내리지 않는다(note 13px만 예외, 필수 표시이므로 `--color-text-muted`로 읽기 쉽게).
- 한글 줄바꿈: `word-break: keep-all; overflow-wrap: break-word;` 를 본문 전체에 적용.

---

## 3. 간격 · 모서리 · 그림자

### 간격 (8px 기준)

| 토큰 | 값 | 쓰는 곳 |
|---|---|---|
| `--space-1` | 4px | 아이콘과 글자 사이 |
| `--space-2` | 8px | 작은 제목 ↔ 제목 |
| `--space-3` | 12px | 카드 안 글 줄 사이 |
| `--space-4` | 16px | 모바일 좌우 여백, 버튼 안 세로 여백 |
| `--space-5` | 24px | 카드 안쪽 여백(모바일), 카드 사이 간격 |
| `--space-6` | 32px | 카드 안쪽 여백(PC), 제목 ↔ 본문 덩어리 |
| `--space-7` | 48px | 섹션 안 제목 ↔ 카드 묶음 |
| `--space-8` | 64px | 섹션 위아래 여백(모바일) |
| `--space-9` | 96px | 섹션 위아래 여백(PC) |
| `--space-10` | 128px | hero 위아래 여백(PC) |

- 본문 너비 `--container-max`: 1120px (PC), 좌우 여백 `--container-pad`: 32px(PC) / 20px(모바일). 모바일은 390 − 40 = 350px가 내용 폭.
- 글 덩어리 최대 폭 `--measure`: 640px (긴 설명이 한 줄로 퍼지지 않게).

### 모서리 둥글기

| 토큰 | 값 | 쓰는 곳 |
|---|---|---|
| `--radius-sm` | 8px | 이미지 자리 안쪽 작은 뱃지, 포커스 링 |
| `--radius-md` | 16px | 이미지(카드 안), 메뉴 펼침 패널 |
| `--radius-lg` | 24px | 카드(상품 · 후기) |
| `--radius-xl` | 32px | hero 이미지, 이번달 원두 이미지, 어두운 띠 안 큰 상자 |
| `--radius-pill` | 999px | 버튼, 메뉴 '구독하기' 알약, 뱃지 |

### 그림자 (따뜻한 갈색 톤, 은은하게)

| 토큰 | 값 | 쓰는 곳 |
|---|---|---|
| `--shadow-sm` | `0 2px 8px rgba(30, 57, 50, 0.06)` | 일반 카드 기본, 상단 메뉴(스크롤 후) |
| `--shadow-md` | `0 8px 24px rgba(30, 57, 50, 0.10)` | 카드 마우스 올림, 메뉴 펼침 패널 |
| `--shadow-lg` | `0 16px 40px rgba(30, 57, 50, 0.16)` | 대표 카드(원두 정기구독) 기본 |

### 기타 값

| 토큰 | 값 | 쓰는 곳 |
|---|---|---|
| `--header-height` | 72px (PC) / 64px (모바일) | 상단 메뉴 높이. 앵커 이동 시 `scroll-margin-top: calc(var(--header-height) + 8px)` 를 각 섹션에 적용 |
| `--transition` | `0.2s ease` | 색, 그림자, 위치 변화 |
| `--button-height` | 52px | 버튼 높이 (모바일도 동일, 터치 44px 이상 보장) |

---

## 4. 공통 컴포넌트

모든 상호작용 요소는 포커스 시 `outline: 2px solid var(--color-focus); outline-offset: 2px;` (어두운 띠 위에서는 `#FFFFFF`).

### 4-1. 상단 메뉴 (header, id `top`)

- 위치: 화면 위 고정(`position: sticky; top: 0; z-index: 100`). 배경 `--color-card` 흰색 불투명, 아래 1px `--color-line`. 스크롤이 내려가면 `--shadow-sm` 추가(JS 없이도 항상 약한 그림자 적용해도 됨).
- 구성: 왼쪽 로고 글자 `모카당당`(Noto Sans KR 700, 22px, `--color-heading`, 링크 `#top`으로 맨 위 이동) / 오른쪽 메뉴 5개.
- 메뉴 항목 순서와 이동 대상: 브랜드 `#brand` / 상품 `#products` / 이번달 원두 `#bean` / 후기 `#reviews` / 구독하기 `#subscribe`.

PC (768px 이상):
- 메뉴 5개를 한 줄로 오른쪽 정렬. 항목 글자 16px / 500 / `--color-text`, 항목 사이 간격 32px.
- 마지막 '구독하기'만 알약 모양(`--color-primary` 배경, 흰 글자, 높이 40px, 좌우 안쪽 20px, 700).

모바일 (767px 이하, 390px 기준) — 메뉴 5개 접근 방식 결정:
- **햄버거 버튼 + 펼침 패널**로 한다. (가로 스크롤 줄은 숨은 항목이 생길 수 있어 쓰지 않는다.)
- 닫힌 상태: 왼쪽 로고, 오른쪽 햄버거 버튼(44 × 44px, 선 3줄, 선 색 `--color-heading`). `aria-label="메뉴 열기"`, `aria-expanded="false"`, `aria-controls="site-menu"`.
- 열린 상태: 헤더 바로 아래에 패널이 내려옴. 배경 `--color-card`, 아래쪽 모서리 `--radius-md`, `--shadow-md`. 항목 5개를 세로 목록으로, 각 항목 높이 56px, 좌우 안쪽 20px, 글자 17px / 500, 항목 사이 1px `--color-line`. 마지막 '구독하기'는 패널 안에서 전체 폭 초록 버튼(높이 52px, 둘레 20px 여백)으로 표시. 버튼 아이콘은 X 모양으로 바뀌고 `aria-label="메뉴 닫기"`, `aria-expanded="true"`.
- 항목을 누르면 해당 섹션으로 이동하고 패널이 닫힌다. 바깥을 누르거나 Esc 키로도 닫힌다.
- 자바스크립트가 꺼진 경우를 대비해 패널은 기본 숨김이 아니라 `.js` 클래스가 붙었을 때만 숨긴다(꺼져 있으면 로고 아래에 메뉴가 줄바꿈되어 모두 보임).

상태:
| 상태 | 모습 |
|---|---|
| 기본 | 글자 `--color-text` |
| 마우스 올림 / 누름 | 글자 `--color-primary`, 아래 2px 밑줄(PC) / 배경 `--color-bg`(모바일 패널) |
| 현재 구역 | (선택) 글자 `--color-heading` + 700. 만들지 않아도 됨 |
| 포커스 | 포커스 링 |
| '구독하기' 알약 | 기본 `--color-primary` → 올림 `--color-primary-hover` → 누름 `--color-primary-active` |

### 4-2. 버튼

공통: 높이 52px, 좌우 안쪽 32px, `--radius-pill`, 글자 17px / 700, 글자 가운데, `inline-flex`, `--transition`, 글줄 바뀜 없음(`white-space: nowrap`). 터치 영역 최소 44px.

기본 버튼 `.btn-primary` ('구독 시작하기', 대표 카드 '구독하기'):
| 상태 | 모습 |
|---|---|
| 기본 | 배경 `--color-primary`, 글자 `--color-on-primary`, 그림자 없음 |
| 마우스 올림 | 배경 `--color-primary-hover`, 위로 1px 이동(`translateY(-1px)`) |
| 누름 | 배경 `--color-primary-active`, 이동 없음 |
| 포커스 | 포커스 링 |
| 사용 불가 | 쓰지 않음 (자리 표시 링크라도 비활성으로 보이게 하지 않는다) |

보조 버튼 `.btn-secondary` (상품 카드 2·3의 '담기'):
| 상태 | 모습 |
|---|---|
| 기본 | 배경 투명, 글자와 테두리(2px) `--color-primary` |
| 마우스 올림 | 배경 `--color-accent-tint`, 테두리 `--color-primary-hover` |
| 누름 | 배경 `--color-accent-tint`, 테두리와 글자 `--color-primary-active` |
| 포커스 | 포커스 링 |

어두운 띠 위 버튼 `.btn-on-dark` (마무리 띠의 '구독 시작하기'):
| 상태 | 모습 |
|---|---|
| 기본 | 배경 `#FFFFFF`, 글자 `--color-heading` |
| 마우스 올림 | 배경 `--color-accent-tint` |
| 누름 | 배경 `#CFE3D9` |
| 포커스 | 흰색 포커스 링 |

크기 규칙: 카드 안 버튼은 카드 안쪽 폭 전체(`width: 100%`). hero와 마무리 띠 버튼은 PC에서 자동 폭(최소 200px), 모바일에서 `width: 100%`(내용 폭 350px).

### 4-3. 카드

공통: 배경 `--color-card`, 테두리 1px `--color-line`, `--radius-lg`(24px), 안쪽 여백 `--space-6`(PC) / `--space-5`(모바일), `--shadow-sm`. 카드 안은 세로로 쌓기(이미지 → 이름 → 설명/안내 → 가격 → 버튼), 가격과 버튼은 카드 아래쪽에 정렬(`margin-top: auto`)해 세 카드의 버튼 높이를 맞춘다.

상품 카드 일반 (카드 2, 3):
- 이미지 자리 4:3, 카드 안쪽 폭 전체, `--radius-md`.
- 이름 h3 `--font-size-h3` / 700 `--color-text`. 설명 · 안내 `--font-size-small` / `--color-text-muted`. 가격 `--font-size-price` / 700 / `--color-heading`, 가격 숫자와 '원'은 같은 크기.
- 버튼은 보조 버튼 '담기'.
- 상태: 마우스 올림 시 `--shadow-md` + 위로 4px 이동. 카드 전체는 링크가 아니라 안의 버튼만 누른다.

**대표 카드 (카드 1, 원두 정기구독) — 가장 눈에 띄게:**
- 배경 `--color-card`, 테두리 2px `--color-primary`, `--shadow-lg`, 안쪽 여백 PC 40px / 모바일 24px.
- PC에서 카드 폭을 크게(3열 중 1.25배, 7절 참조)와 위로 -16px 튀어나오게(`transform: translateY(-16px)`) 해서 다른 카드보다 크고 높게 보인다. 모바일은 맨 위에 놓고 테두리 · 그림자 · 뱃지로 구분한다.
- 카드 위 왼쪽에 뱃지 '대표 상품'(PRD 제안 섹션 제목 문구와 같은 말): 배경 `--color-heading`, 흰 글자 13px / 700, 높이 28px, 좌우 12px, `--radius-pill`. 카드 윗변에 걸치게 놓지 않고 이미지 위 왼쪽 16px 안쪽에 겹쳐 둔다.
- 이미지 자리는 4:3 대신 1:1에 가까운 5:4(더 큼).
- '첫 달 배송비 무료'는 알약 모양 글자 표시(배경 `--color-accent-tint`, 글자 `--color-heading` 700 15px, 높이 32px)로 눈에 띄게 한다. 문구는 PRD 그대로.
- 가격 `15,900원/월`: 숫자 40px(모바일 34px) / 800 / `--color-heading`, '원/월'은 18px / 500 `--color-text-muted`.
- 버튼은 기본 버튼(초록 채움) '구독하기', 일반 카드의 보조 버튼과 달리 채워져 있어 위계가 분명하다.
- 마우스 올림: 그림자 `--shadow-lg` 유지, 위로 4px 추가 이동.

후기 카드:
- 배경 `--color-card`, `--radius-lg`, `--shadow-sm`, 안쪽 여백 32px(PC) / 24px(모바일).
- 맨 위에 큰 따옴표 장식 글자 `“`(Manrope 800, 48px, `--color-primary` 불투명도 0.25). 장식이므로 `aria-hidden="true"`.
- 후기 글 `--font-size-body` / 400 / `--color-text`. 구분선 1px `--color-line` 후 작성자(예: '직장인 이OO님') `--font-size-small` / 500 / `--color-text-muted`.
- 별점 · 좋아요 · 개수는 만들지 않는다. 마우스 올림 반응 없음(눌러지는 요소가 아님).

### 4-4. 어두운 띠 (이번달 원두 `bean`, 마무리 띠 `subscribe`)

- 배경 `--color-dark`(#1E3932), 가로 전체 폭. 위아래 안쪽 여백 `--space-9`(PC) / `--space-8`(모바일).
- 글자: 작은 제목 `#BFD8CB`(= 어두운 배경에서 읽히는 연한 초록, `--color-eyebrow-on-dark`), 제목 `--color-on-dark`, 설명 `--color-on-dark-muted`.
- 띠 위 이미지 자리 배경은 `--color-surface-dark-soft`.
- 상태: 띠 자체는 반응 없음. 안의 버튼만 4-2의 `.btn-on-dark`.
- 두 어두운 띠가 서로 붙지 않도록 사이에 후기 섹션(밝은 배경)이 있다. 꼬리말도 `--color-dark`라 마무리 띠와 붙는데, 구분을 위해 꼬리말 위에 1px `rgba(255,255,255,0.12)` 선을 둔다.

### 4-5. 꼬리말 (footer, id `footer`)

- 배경 `--color-dark`, 위 1px 선 `rgba(255,255,255,0.12)`. 위아래 안쪽 여백 40px.
- 문구 `© 2026 모카당당. All rights reserved.` 만. 14px / 400 / `--color-on-dark-muted`, 가운데 정렬. 링크 · 연락처 · 사업자 정보 · SNS는 넣지 않는다(PRD).
- 상태 없음(눌러지는 요소 없음).

### 4-6. 이미지 자리 (placeholder) 규칙

실제 이미지 파일이 없으므로 모든 이미지는 아래 규칙의 '이미지 자리'로 만든다. 나중에 파일로 바꾸기 쉽게, 자리와 실제 이미지가 **같은 틀(.media)** 을 쓴다.

구조(HTML 약속):
```
<figure class="media media--hero" data-ratio="4-3" data-src="02_원두정기구독_데일리브루">
  <!-- 자리 상태: .media__placeholder 가 보임 -->
  <div class="media__placeholder" role="img" aria-label="[대체 문구]">
    <span class="media__label">[대체 문구]</span>
  </div>
  <!-- 교체 시: 위 div를 지우고 아래 img 한 줄로 바꾼다 -->
  <!-- <img src="images/02_원두정기구독_데일리브루.webp" alt="[대체 문구]" width="W" height="H" loading="lazy"> -->
</figure>
```

모습:
- 틀 `.media`: 가로 `width: 100%`, `max-width`는 7절 표의 값, `aspect-ratio`는 종류별 비율(아래), `overflow: hidden`, 둥글기는 종류별(hero · 이번달 원두 `--radius-xl`, 카드 `--radius-md`). 넘침 방지로 `max-width: 100%`.
- 자리 배경: 밝은 구역은 `--color-surface-soft` #E8E4DA, 어두운 띠 위는 `--color-surface-dark-soft` #2C4A42. 안쪽에 1px 점선 테두리(밝은 구역 `#CFC8B8`, 어두운 띠 `#4B6B61`), 안쪽 24px 여백, 둥글기는 틀을 따름.
- 가운데에 컵 모양 단순 선 아이콘(SVG, 48px, 선 색 `--color-text-muted` 불투명도 0.6; 어두운 띠 위는 `#BFD8CB` 불투명도 0.7)과 그 아래 대체 문구를 그대로 보이게 표시(14px / 500, 가운데 정렬, 최대 3줄, 색은 아이콘과 같게). 방문자에게 "이미지 준비 중" 사실이 보이게 한다.
- 대체 문구는 화면에 글자로 보이고 `aria-label`에도 같은 문장을 넣는다. 실제 `img`로 교체하면 `alt`에 같은 문장을 쓴다. 단 hero 이미지와 대표 카드 이미지가 같은 파일(02)이라도 두 번 모두 대체 문구를 넣는다(장식으로 숨기지 않는다).
- 교체 쉽게: `data-src`에 PRD의 파일명을 적어 두어, 빌더가 자리 div를 `<img>`로 한 줄 바꾸면 된다. 비율과 둥글기가 틀에 있으므로 이미지 쪽에서는 `width:100%; height:100%; object-fit:cover;` 만 쓴다.

종류별 비율 · 대체 문구(PRD 이미지 배치표 기준, 대체 문구는 파일명에서 쓴 제안이며 실제 사진 내용은 확인 전):

| 이름 | 비율 | 대체 문구(제안) | 파일명(PRD) |
|---|---|---|---|
| hero 이미지 | 4:5 (세로로 긴 편, PC 오른쪽) | 모카당당 원두 정기구독 데일리 브루 이미지 자리 | 02_원두정기구독_데일리브루 |
| 상품 카드 1 | 5:4 | 원두 정기구독 상품 이미지 자리 | 02_원두정기구독_데일리브루 |
| 상품 카드 2 | 4:3 | 싱글오리진 에티오피아 예가체프 원두 이미지 자리 | 03 ([확인 필요]) |
| 상품 카드 3 | 4:3 | 드립백 10입 세트 이미지 자리 | 04 ([확인 필요]) |
| 이번달 원두 | 3:4 (포스터는 세로 비율 가정) | 9월의 원두 에티오피아 예가체프 포스터 이미지 자리 | 01_이번달원두_포스터 |

- 5번째 이미지는 용도 미정이라 화면에 자리를 만들지 않는다.
- 이미지 자리가 있는 곳에서 실제 파일이 가로로 넘치는 일이 없도록, 이미지는 항상 `.media` 안에 넣고 `display:block; width:100%`.
- 이미지가 없다는 사실을 가리기 위해 가짜 사진 · 스톡 사진 · 가짜 로고는 넣지 않는다.

---

## 5. 섹션별 레이아웃

공통: 모든 섹션은 `.container`(최대 1120px, 가운데, 좌우 여백 PC 32px / 모바일 20px) 안에 둔다. 섹션 위아래 여백 PC 96px / 모바일 64px. 가로 스크롤이 생기면 안 된다(`body { overflow-x: hidden }`에 기대지 말고 요소가 넘치지 않게 만들 것).
배경 번갈아 쓰기: 어두운 띠 외 밝은 섹션은 `--color-bg` 위에 카드(`--color-card`)로 변화를 준다.

섹션 순서와 id (PRD 그대로): header `top` → `hero` → `brand` → `products` → `bean` → `reviews` → `subscribe` → `footer`.

### hero (id `hero`)

PC:
- 배경 `--color-bg`. 위아래 여백 96px(위쪽은 메뉴 높이 포함 느낌으로 충분히).
- 2열(왼쪽 글 55% / 오른쪽 이미지 45%), 열 간격 64px, 세로 가운데 정렬.
- 왼쪽 글 순서: 작은 제목 `Coffee Subscription`(eyebrow, `--color-primary`) → 큰 제목 `모카당당`(72px / 800 / `--color-heading`, 위 간격 12px) → 부제 `매달, 새로운 한 잔의 발견`(28px / 700 / `--color-text`, 위 16px) → 설명(lead 20px, `--color-text-muted` 아닌 `--color-text`, 위 20px, 폭 최대 520px) → 버튼 `구독 시작하기`(기본 버튼, 위 40px).
- 오른쪽: hero 이미지 자리(4:5, 최대 폭 480px, `--radius-xl`, `--shadow-md`). 뒤에 `--color-accent-tint` 원형 장식(지름 360px, 이미지 뒤 오른쪽 아래로 40px 비껴 놓음, 장식이므로 `aria-hidden`).

모바일(390px):
- 1열. 순서: 글 → 버튼 → 이미지. (글과 버튼이 첫 화면에 먼저 보이게. 이미지는 아래.)
- 위 여백 40px, 아래 64px. 큰 제목 44px, 부제 20px / 700, 설명 17px.
- 버튼 전체 폭 350px. 버튼 아래 40px 띄우고 이미지 자리(4:5, 폭 350px → 높이 약 438px, `--radius-xl`).
- 장식 원은 모바일에서 숨긴다.

### brand (id `brand`)

PC:
- 배경 `--color-bg`. 내용은 가운데 정렬, 폭 최대 720px(`--measure` 안에서).
- 순서: 작은 제목 `Our Story` → 제목(h2 40px, `--color-heading`, 위 8px) → 설명(lead 20px, 위 24px, 줄 간격 1.8).
- 제목 위 작은 장식선: 폭 48px, 높이 4px, `--color-primary`, `--radius-pill`, 가운데(eyebrow 위 16px). 장식이며 문구 아님.
- 이미지 없음.

모바일:
- 같은 구조, 가운데 정렬 유지(제목이 2~3줄 되어도 균형). 제목 28px, 설명 17px, 폭 350px. 위아래 여백 64px.

### products (id `products`)

- 배경 `--color-bg`. 섹션 제목: PRD 제안 `대표 상품`(h2, 가운데, 아래 48px) — 작은 제목은 없음. 확정 전 제안 문구임을 빌더에게 표시(HTML 주석).
- PC: 카드 3개를 한 줄로. 열 비율 `1.25fr 1fr 1fr`, 열 간격 24px. 대표 카드가 가장 왼쪽에 있고 더 넓고 위로 16px 튀어나온다(4-3 참조). 세 카드의 바닥선은 `align-items: stretch`로 맞춘다(대표 카드는 위로만 튀어나옴).
- 모바일: 1열 세로 쌓기, 카드 사이 간격 24px, 순서는 PRD 순서(원두 정기구독 → 싱글오리진 → 드립백). 대표 카드는 폭 350px 전체 사용, 테두리 2px 초록, 큰 그림자, 뱃지로 눈에 띄게. 일반 카드 2·3은 같은 폭이며 이미지 비율 4:3(높이 약 214px)로 대표 카드(5:4, 폭 302px → 높이 약 242px)보다 작다.
- 태블릿(768~1023px): 카드 3열이 좁아지므로 대표 카드가 한 줄 전체 폭(이미지 왼쪽 · 글 오른쪽 2열)을 쓰고, 카드 2·3은 아래 줄에 2열. 1024px 이상이 위 PC 규칙.

### bean (id `bean`) — 어두운 띠

PC:
- 배경 `--color-dark`, 가로 전체. 위아래 여백 96px.
- 2열: 왼쪽 이미지 자리(3:4, 최대 폭 400px, `--radius-xl`, 배경 `--color-surface-dark-soft`) / 오른쪽 글(폭 약 560px). 열 간격 80px, 세로 가운데. 
- 글 순서: 작은 제목 `This Month's Bean`(eyebrow, 연한 초록) → 제목 `9월의 원두: 에티오피아 예가체프`(h2 40px, 흰색) → 설명(lead 20px, `--color-on-dark-muted`, 위 24px).
- (PRD 확인 필요 4번: '9월' 표기는 요청 그대로.)

모바일:
- 1열. 순서: 글 → 이미지(글을 먼저 읽고 이미지는 아래). 위아래 여백 64px.
- 제목 28px 흰색, 설명 17px. 이미지 자리 폭 350px(3:4 → 높이 약 467px)는 너무 길어 보이므로 모바일에서는 비율 4:3으로 바꾸고 폭 350px(높이 약 263px)로 한다. 포스터 원본 비율이 정해지면 다시 정한다.

### reviews (id `reviews`)

- 배경 `--color-bg`. 섹션 제목: PRD 제안 `고객 후기`(h2, 가운데, 아래 48px). 
- PC: 카드 3열 동일 폭(`repeat(3, 1fr)`), 간격 24px. 카드 높이는 같게(`stretch`).
- 모바일: 1열 세로, 간격 16px, 폭 350px.
- 섹션 맨 아래(카드 묶음 아래 32px)에 `※ 실습용 예시 후기입니다`: `--font-size-note`(13px) / 400 / `--color-text-muted`, 가운데 정렬. 카드와 같은 영역 안에 두어 후기와 떨어지지 않게 한다. 숨기지 않고, 색 대비 4.5:1 이상 유지. 문구는 그대로.
- 별점 · 평균 점수 · 후기 개수 없음.

### subscribe (id `subscribe`) — 어두운 띠

PC:
- 배경 `--color-dark`. 위아래 여백 96px. 가운데 정렬, 내용 폭 최대 640px.
- 순서: 제목 `매달, 새로운 한 잔을 발견하세요`(h2 40px, 흰색) → 설명 `첫 달 배송비 무료로 지금 시작해보세요.`(lead 20px, `--color-on-dark-muted`, 위 16px) → 버튼 `구독 시작하기`(`.btn-on-dark`, 위 32px, 최소 폭 220px).

모바일:
- 같은 순서, 가운데 정렬. 제목 28px(2줄), 설명 17px, 버튼 전체 폭 350px. 위아래 여백 64px.

### footer (id `footer`)

- PC / 모바일 동일: 가운데 한 줄 문구 `© 2026 모카당당. All rights reserved.` 모바일에서 줄이 길면 두 줄로 자연스럽게 줄바꿈(14px이면 390px에 한 줄 들어가는 길이지만 넘치면 줄바꿈 허용). 위아래 여백 40px.

---

## 6. 모바일 390px 필수 규칙

- 기준 화면 390px. 320~389px에서도 가로 스크롤 없음. 모든 요소 `max-width: 100%`, `box-sizing: border-box`, `min-width: 0`(그리드 자식).
- 전환점(breakpoint): 767px 이하 모바일 / 768~1023px 태블릿 / 1024px 이상 PC. 모바일 우선(작은 화면 CSS가 기본, `min-width`로 넓힘).
- 좌우 여백 20px, 내용 폭 350px.
- 터치 대상(버튼, 메뉴 항목, 햄버거) 높이 44px 이상(버튼 52px, 메뉴 항목 56px).
- 긴 한글 제목이 넘치지 않게 `overflow-wrap: break-word` 와 `word-break: keep-all`. 카드 이름 `싱글오리진 원두 200g · 에티오피아 예가체프`는 모바일에서 2~3줄로 줄바꿈된다.
- 큰 제목 `모카당당` 44px은 390px에서 한 줄로 충분히 들어간다.
- 가격 `15,900원/월`은 한 줄 유지(`white-space: nowrap`).
- 메뉴: 4-1의 햄버거 방식. 메뉴 5개 모두 패널 안에서 보이고 누를 수 있어야 한다.
- 이미지는 폭 350px를 넘지 않는다. 고정 폭(px) `width` 속성 대신 `max-width: 100%` 사용.
- 어두운 띠 안 글은 흰색 계열만 사용해 대비 확보.
- 모션이 불편한 사용자 배려: `@media (prefers-reduced-motion: reduce)` 에서 부드러운 스크롤 · 이동 효과 끄기. 앵커 이동은 `html { scroll-behavior: smooth; }`.

---

## 7. 이미지 표시 크기 (최적화 단계가 쓰는 값)

화면에 표시되는 최대 가로폭(CSS px). 파일은 이 폭의 2배(레티나)까지 만들 수 있으나 그 이상은 필요 없다. 표의 "최대 표시 가로폭"이 기준값이다.

| 이미지 | 쓰이는 곳 | 최대 표시 가로폭 (PC) | 모바일 표시 가로폭 (390px 화면) | 비율 | 2배 파일 가로 |
|---|---|---|---|---|---|
| 02_원두정기구독_데일리브루 (hero) | hero | 480px | 350px | 4:5 | 960px |
| 02_원두정기구독_데일리브루 (대표 카드) | products 카드 1 | 대표 카드 이미지: 약 400px | 302px | 5:4 | 800px |
| 03 (확인 필요) | products 카드 2 | 약 320px | 302px | 4:3 | 640px |
| 04 (확인 필요) | products 카드 3 | 약 320px | 302px | 4:3 | 640px |
| 01_이번달원두_포스터 | bean | 400px | 350px | PC 3:4 / 모바일 4:3 | 800px |

- 카드 이미지 최대 표시 가로폭 = 대표 카드 400px, 일반 카드 320px. (PC 컨테이너 1120px, 열 비율 1.25:1:1, 간격 24px, 카드 안쪽 여백 40/32px 기준 계산값. 태블릿 대표 카드 가로 배치에서도 400px 이하.)
- 같은 02 파일을 hero(480px)와 대표 카드(400px)에 쓰므로 최적화는 가로 960px 한 장으로 만들어 두 곳에 같이 써도 된다. 화면에 맞춰 비율만 `object-fit: cover`로 잘라 쓴다(hero 4:5, 카드 5:4이므로 중요한 피사체는 가운데에 있어야 함 → 빌더 참고).
- 파일 형식 · 용량 목표는 최적화 담당이 정한다(이 명세는 폭만 정함).
- 로고는 글자이므로 이미지 파일 없음.

---

## 8. CSS 변수 이름 목록 (공통 담당이 `base.css` 의 `:root` 에 그대로 옮길 것)

```css
:root {
  /* 색상: 브랜드 (브리프 지정) */
  --color-heading: #006241;
  --color-primary: #00754A;
  --color-dark: #1E3932;
  --color-bg: #F2F0EB;
  --color-card: #FFFFFF;
  --color-text: #333333;

  /* 색상: 보조 */
  --color-primary-hover: #005C39;
  --color-primary-active: #004B2E;
  --color-text-muted: #5B5B5B;
  --color-on-primary: #FFFFFF;
  --color-on-dark: #FFFFFF;
  --color-on-dark-muted: #D5E0DB;
  --color-eyebrow-on-dark: #BFD8CB;
  --color-line: #E3DFD6;
  --color-surface-soft: #E8E4DA;
  --color-surface-dark-soft: #2C4A42;
  --color-accent-tint: #E4EFE9;
  --color-focus: #00754A;

  /* 글꼴 */
  --font-base: "Manrope", "Noto Sans KR", system-ui, -apple-system, "Malgun Gothic", sans-serif;
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-bold: 700;
  --weight-extrabold: 800;

  /* 글자 크기 (모바일 값이 기본, 768px 이상에서 PC 값으로 덮어씀) */
  --font-size-display: 44px;   /* PC 72px */
  --font-size-h2: 28px;        /* PC 40px */
  --font-size-h3: 20px;        /* PC 24px */
  --font-size-lead: 17px;      /* PC 20px */
  --font-size-body: 16px;      /* PC 17px */
  --font-size-small: 14px;     /* PC 15px */
  --font-size-eyebrow: 13px;   /* PC 14px */
  --font-size-price: 28px;     /* PC 32px */
  --font-size-price-featured: 34px; /* PC 40px */
  --font-size-note: 13px;
  --line-height-tight: 1.15;
  --line-height-heading: 1.3;
  --line-height-body: 1.75;
  --letter-spacing-eyebrow: 0.12em;

  /* 간격 */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --space-10: 128px;
  --section-pad-y: 64px;       /* PC 96px */
  --container-max: 1120px;
  --container-pad: 20px;       /* PC 32px */
  --measure: 640px;

  /* 모서리 */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-pill: 999px;

  /* 그림자 */
  --shadow-sm: 0 2px 8px rgba(30, 57, 50, 0.06);
  --shadow-md: 0 8px 24px rgba(30, 57, 50, 0.10);
  --shadow-lg: 0 16px 40px rgba(30, 57, 50, 0.16);

  /* 기타 */
  --header-height: 64px;       /* PC 72px */
  --button-height: 52px;
  --transition: 0.2s ease;

  /* 이미지 표시 최대 폭 (7절) */
  --img-hero-max: 480px;
  --img-card-featured-max: 400px;
  --img-card-max: 320px;
  --img-bean-max: 400px;

  /* 이미지 비율 */
  --ratio-hero: 4 / 5;
  --ratio-card-featured: 5 / 4;
  --ratio-card: 4 / 3;
  --ratio-bean: 4 / 3;         /* PC 3 / 4 */
}

@media (min-width: 768px) {
  :root {
    --font-size-display: 72px;
    --font-size-h2: 40px;
    --font-size-h3: 24px;
    --font-size-lead: 20px;
    --font-size-body: 17px;
    --font-size-small: 15px;
    --font-size-eyebrow: 14px;
    --font-size-price: 32px;
    --font-size-price-featured: 40px;
    --section-pad-y: 96px;
    --container-pad: 32px;
    --header-height: 72px;
    --ratio-bean: 3 / 4;
  }
}
```

---

## 9. 빌더 · 공통 담당에게 남기는 메모

- 문구 · 가격 · 섹션 순서는 `docs/prd.md` 를 그대로 쓴다. 이 명세에서 새로 쓴 글자는 섹션 제목 `대표 상품` · `고객 후기`(PRD 제안 문구)와 대표 카드 뱃지 `대표 상품`, 메뉴 버튼 접근성 문구(`메뉴 열기` / `메뉴 닫기`), 이미지 자리 대체 문구(제안)뿐이다.
- 할인 표시 · 별점 · 숫자 실적 · 가짜 로고는 만들지 않는다.
- '구독 시작하기' 연결 주소와 카드 '구독하기' / '담기' 처리는 PRD [확인 필요]. 명세는 모두 `<a>` 모양 버튼(자리 표시 링크 `#subscribe`)으로 그리면 된다.
- 이미지 파일 03, 04, 5번째와 포스터 원본 비율이 확정되면 4-6 · 7절의 비율과 폭을 다시 확인.
