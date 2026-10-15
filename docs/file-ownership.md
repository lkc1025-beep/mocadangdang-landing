# 파일 담당표 (팀장 배정)
섹션 id: hero, brand, products, bean, reviews, subscribe (header=top, footer=footer 는 layout.html)

## 구현 #1 — 첫 화면 · 브랜드 이야기 · 이번달 원두
- site/pages/index/01-hero.html (id=hero)          site/css/sections/index/01-hero.css
- site/pages/index/02-brand.html (id=brand)        site/css/sections/index/02-brand.css
- site/pages/index/04-bean.html (id=bean)          site/css/sections/index/04-bean.css

## 구현 #2 — 대표 상품 · 고객 후기 · 마무리 띠
- site/pages/index/03-products.html (id=products)  site/css/sections/index/03-products.css
- site/pages/index/05-reviews.html (id=reviews)    site/css/sections/index/05-reviews.css
- site/pages/index/06-subscribe.html (id=subscribe) site/css/sections/index/06-subscribe.css

## 구현 #3 — 공통
- site/layout.html (상단 메뉴 + {{SECTIONS}} + 꼬리말)
- site/css/base.css (:root 변수, 버튼, 카드, 이미지 자리 .media, 어두운 띠, 메뉴, 꼬리말)
- site/js/main.js (모바일 메뉴 펼침, 필요할 때만)
- site/pages/index/_title.txt
- site/assets/ (이미지 파일 없음 → 비워 둠. 이미지 자리 규칙은 design-spec 4-6)

## 규칙
- 담당 밖 파일은 읽기만. 공통 스타일이 더 필요하면 보고의 '남은 문제'에 적어 #3 에게 넘긴다.
- 기준 문서: docs/prd.md, docs/design-spec.md. 이미지 자리 마크업은 design-spec 4-6 의 `.media` 규칙을 따른다 (#1, #2 는 이 클래스를 쓰고 새로 만들지 않는다).
- dist/ 는 build.py 만 쓴다.

## 추가 배정 (이미지 반영, 2026-10-15 10:4x)
이미지 5장 도착. 원본 위치: /mnt/user-data/uploads/모카당당_실습/작업용_이미지/src1~5.png (사용자 원본 파일 복사본)
| 원본 | site/assets/ 파일명 | 역할 | 쓰는 곳 |
|---|---|---|---|
| src1.png (1254x1254) | 02_daily-brew.png | 02_원두정기구독_데일리브루 | hero + 상품 카드1 |
| src2.png (1305x1206) | 03_single-origin.png | 03 싱글오리진 | 상품 카드2 |
| src3.png (1536x1024) | 04_drip-bag.png | 04 드립백 | 상품 카드3 |
| src4.png (1374x1145) | 01_bean-poster.png | 01_이번달원두_포스터 | bean |
| src5.png (1536x1024) | 05_pattern.png | 5번째: 커피 일러스트 패턴 | brand 배경 장식 |
- 구현 #3: assets 복사(위 파일명), 필요하면 base.css 의 .media 이미지용 규칙 보강
- 구현 #1: 01-hero, 04-bean, 02-brand 에서 이미지 자리 → <img>
- 구현 #2: 03-products 에서 이미지 자리 → <img>
