<!-- 포트폴리오 저장소 내 문서입니다. 실제 레포 README로 옮길 땐 이미지 경로를 조정하세요. -->

# 🎬 TripCut (K-드라마 촬영지 기반 여행 PWA)

<p align="center">
  <img src="./tripcuthero.png" width="700" alt="TripCut Hero" />
</p>

---

## 👥 팀원 소개

> 팀원 정보는 **추가 예정**입니다.

| <img src="[팀원1 이미지]" width="150"/> | <img src="[팀원2 이미지]" width="150"/> | <img src="[팀원3 이미지]" width="150"/> | <img src="[팀원4 이미지]" width="150"/> |
| --- | --- | --- | --- |
| 팀원1 이름 | 팀원2 이름 | 팀원3 이름 | 팀원4 이름 |
| <a href="[GitHub URL]" target="_blank"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white"/></a> | <a href="[GitHub URL]" target="_blank"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white"/></a> | <a href="[GitHub URL]" target="_blank"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white"/></a> | <a href="[GitHub URL]" target="_blank"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white"/></a> |

---

## 🎬 프로젝트 개요

### 01. 프로젝트 주제

> K-드라마 촬영지를 중심으로 여행지를 탐색/저장/리뷰할 수 있는 모바일 최적화 웹(PWA)

### 02. 프로젝트 소개

Next.js 기반 모바일 최적화 웹(PWA) 서비스입니다.

- **탐색/검색**: 작품명/여행지명 검색, 태그/지역 필터
- **상세 페이지**: 기본 정보/리뷰/주변 정보 등 섹션 단위 구성
- **코스/저장**: 추천 코스 + 북마크
- **인증**: 카카오 소셜 로그인
- **통신**: FastAPI 중개 서버 및 Spring Boot API 서버와 연동(TourAPI)

운영 관점

- 다중 백엔드 통신 구조에서 **도메인별 API 모듈 분리 + 공통 인터셉터**로 요청/인증 처리를 일원화했습니다.
- 초기 진입(SSR)과 상세 데이터 로딩을 분리해, 네트워크 지연 시에도 화면이 단계적으로 채워지도록 구성했습니다.

### 03. 프로젝트 필요성

- **모바일에서의 탐색 흐름**
  - 탐색 → 저장 → 상세 확인 → 코스 구성으로 이어지는 흐름을 모바일 UX에 맞게 정리했습니다.

### 04. 주요 기능

- **PWA**: 홈 화면 추가/기본 캐싱 설정
- **검색/필터**: 다중 조건 필터를 URL 파라미터와 동기화(공유/북마크 가능)
- **상세 화면 구성**: 정보 과부하를 줄이기 위한 단계적 정보 표시(Bottom Sheet)
- **다중 API 연동**: FastAPI 중개 + Spring Boot + TourAPI

---

## 📷 주요 화면

> 화면 GIF/스크린샷은 **추가 예정**입니다.

---

## ⚙️ 기술 스택

### Frontend

- **Next.js**, React, TypeScript
- **Tailwind CSS**
- **PWA**, Axios

### Backend / API

- **FastAPI**
- **Spring Boot**
- **TourAPI**
- Kakao Login API

---

## 🌐 서버 정보

- **배포**: 미정/추가 예정

---

## 🗓️ WBS / 요구사항 / ERD / DDL / DML

> 문서화 자료는 **추가 예정**입니다.

---

## 🧩 아키텍처(요약)

Next.js(SSR/CSR 혼합) 프론트에서 도메인별 API 모듈을 분리하고, FastAPI 중개 계층을 통해 Spring Boot/TourAPI와 연동하는 구조입니다.

---

## ⚙️ 로컬 실행 방법

### 1. 레포지토리 클론

```bash
git clone https://github.com/mstagon/TourAPI_FrontEnd
cd TourAPI_FrontEnd
```

### 2. 실행

- **추가 예정** (환경 변수/백엔드 URL 설정 포함)

---

## 🎉 회고

모바일 웹에서 검색/필터 → 상세 → 저장/코스로 이어지는 사용자 흐름을 만들면서, Next.js의 SSR/CSR 경계를 어디에 둘지 고민한 프로젝트였습니다.  
과장된 지표 대신, 실제로 구현한 화면/기능과 데이터 흐름을 기준으로 정리하는 방식이 더 설득력이 있다는 것도 배웠습니다.

---

## 📄 라이선스

- 미정 (추가 예정)

---

## 📞 문의

- **Email**: devcms21@gmail.com
- **Portfolio**: https://devcms.me/projects/tripcut
