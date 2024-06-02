import { createSlice } from "@reduxjs/toolkit";

export const projectData = createSlice({
  name: 'project',
  initialState: [
    {
      date: "2023.11 ~ 진행중",
      company: '에스티(영등포구청)',
      projectName: '영상대학교 차세대 프로젝트',
      role: 'Powerbuilder 프로그램의 코드를 분석 후 Websquare 를 활용한 차세대',
      site: '',
      details: [
        {
          detail: '☀️ 학사행정 파트 개발',
          subDetails: [
            { subDetail: '　⚡인사' },
            { subDetail: '　　-인사기초관리' },
            { subDetail: '　　-교직원채용관리' },
            { subDetail: '　　-인사기록관리' },
            { subDetail: '　⚡시설' },
            { subDetail: '　　-건축물관리' },
            { subDetail: '　　-토지관리' },
            { subDetail: '　　-구축물관리' },
            { subDetail: '　　-계약관리' },
            { subDetail: '　　-보험관리' },
            { subDetail: '　　' },
            { subDetail: '　- 기획적인 부분없이 Powerbuilder 라는 프로그램의 코드를 분석하여 개발했어야하는데' },
            { subDetail: '　　분석이 쉽지가 않아 시간이 많이 투자되었습니다.' },
            { subDetail: '　　팀원들과 Powerbuilder에 대한 정보를 찾아가며 개발하였습니다.' },
            { subDetail: '　　⚡파일 업로드/다운로드 기능 개발' },
            { subDetail: '　　⚡공통 Popup 개발/수정' },
            { subDetail: '　　⚡오류 query 수정' },
            { subDetail: '　　⚡검색 기능 개발' },
            { subDetail: '　　⚡페이지 별 List 표출' },
          ]
        },
      ],
      skills: [
        { skill: 'Java' },
        { skill: 'Javascript' },
        { skill: 'Jquery' },
        { skill: 'Egov' },
        { skill: 'Websquare5' },
        { skill: 'Oracle' },
        { skill: 'svn' },
        { skill: 'CROWNIX Report(레포팅 툴)' },
      ],
    },
    {
      date: "2023.06 ~ 2023.09",
      company: '에스티(영등포구청)',
      projectName: '경남연구원 인사평가 시스템 개발',
      role: '경남연구원의 연구원에 대한 인사평가 시스템 개발',
      site: '',
      details: [
        {
          detail: '☀️ 연구원의 연구자료에 대한 점수부여 및 순위선정',
          subDetails: [
            { subDetail: '　⚡연구 논문 List' },
            { subDetail: '　⚡연구 논문 검색 기능 개발' },
            { subDetail: '　⚡저장되어있는 연구논문 파일다운 기능 개발' },
            { subDetail: '　⚡논문 종류별 평가자 부여 기능 개발' },
            { subDetail: '　⚡외부, 내부 평가자에 의한 점수 합산' },
            { subDetail: '　⚡합산 된 점수에 의한 순위 부여 기능 개발' },
          ]
        },
      ],
      skills: [
        { skill: 'Java' },
        { skill: 'Javascript' },
        { skill: 'Jquery' },
        { skill: 'Egov' },
        { skill: 'Pudding Ui 라이브러리(더존)' },
        { skill: 'MySql' },
        { skill: 'svn' },
      ],
    },
    {
      date: "2023.04 ~ 2023.05",
      company: '아이티키(가산디지털단지)',
      projectName: 'MedicineSearch 약품 검색 서비스 개발',
      role: '약품 검색 기능 개발(제품명 검색, 모양/색상 검색 기능)',
      site: 'https://github.com/Jungdoosik/drugProject',
      details: [
        {
          detail: '☀️ 공공데이터 API 사용',
          subDetails: [
            { subDetail: '　⚡https://www.data.go.kr/data/15075057/openapi.do' },
            { subDetail: '　　-e약은요' },
            { subDetail: '　⚡https://www.data.go.kr/data/15057639/openapi.do' },
            { subDetail: '　　-낱알정보' },
            { subDetail: '　⚡https://www.data.go.kr/data/15095677/openapi.do' },
            { subDetail: '　　-약품 허가 정보' },
            { subDetail: '　　-약품 허가 상세정보' },
          ]
        },
        {
          detail: '☀️ 약품 검색 기능 개발',
          subDetails: [
            { subDetail: '　⚡약품 명 검색 기능' },
            { subDetail: '　⚡약품의 모양/색상에 따른 검색 기능 개발' },
            { subDetail: '　⚡검색에 의한 List 표출' },
            { subDetail: '　⚡약품에 대한 Detail page 개발' },
          ]
        },
      ],
      skills: [
        { skill: 'Java' },
        { skill: 'Javascript' },
        { skill: 'Jquery' },
        { skill: 'Spring' },
        { skill: 'MySql' },
        { skill: 'git' },
      ],
    },
    {
      date: "2022.10 ~ 2023.04",
      company: '한경정보기술 - 중소기업유통센터(오목교)',
      projectName: '중소기업유통센터 유공자 포상시스템, 공공구매 경쟁제품 조회 개발',
      role: '포상시스템에 관련된 관리자, 사용자, 평가위원 기능 개발, 경젱제품 조회 개발',
      site: 'https://www.smpp.go.kr/cst/smppInf/SelectLawC.do',
      details: [
        {
          detail: '☀️ 유공자포상 시스템 개발',
          subDetails: [
            { subDetail: '　⚡유공자 포상 관리자 공고등록/ 수정' },
            { subDetail: '　⚡유공자 포상 관리자 질문등록/수정/삭제 , 파일첨부/수정/삭제' },
            { subDetail: '　⚡유공자 포상 신청 권한 부여 및 신청' },
            { subDetail: '　⚡유공자 포상 관리자 신청서 확인' },
            { subDetail: '　⚡유공자 포상 관리자 평가(정량평가)-신청서에 관하여 점수를 부여' },
            { subDetail: '　⚡유공자 포상 관리자 평가위원 선정 기능' },
            { subDetail: '　⚡유공자 포상 평가위원 평가(정성평가)' },
            { subDetail: '　⚡유공자 포상 관리자평가, 평가위원 평가가 종료시 평가위원장 최종 포상자 선정(순위대로)' },
            { subDetail: '　⚡유공자 포상 관리자 포상자 선정 완료 후 수정 기능' },
            { subDetail: '　⚡유공자 포상 포상자 List 포상 메인화면에 표출' },
          ]
        },
        {
          detail: '☀️ 공공구매 경젱제품 조회 개발',
          subDetails: [
            { subDetail: '　⚡관리자의 년도별 차수 관리/ 등록/ 삭제' },
            { subDetail: '　⚡차수별 해당 경쟁제품 List표출' },
            { subDetail: '　⚡차수별 경쟁제품 단건 등록' },
            { subDetail: '　⚡경쟁제품 이력확인' },
            { subDetail: '　⚡경쟁제품 상세확인' },
          ]
        },
      ],
      skills: [
        { skill: 'Java' },
        { skill: 'Javascript' },
        { skill: 'Jquery' },
        { skill: 'Egov' },
        { skill: 'Oracle' },
        { skill: 'svn' },
      ],
    },
    {
      date: "2022.05 ~ 2022.09",
      company: '콘센트릭스 - 삼성(잠실)',
      projectName: '삼성 welstory 임직원 쇼핑몰 리뉴얼',
      role: '배송관련 PC화면 개선 담당',
      site: '',
      details: [
        {
          detail: '☀️ 배송 관련 추가 로직 개발 및 퍼블리싱',
          subDetails: [
          ]
        },
        {
          detail: '☀️ 장바구니 관련 api 개발',
          subDetails: [
          ]
        },
      ],
      skills: [
        { skill: 'Vue.js' },
        { skill: 'Nuxt.js' },
        { skill: 'Javascript' },
        { skill: 'MySql' },
        { skill: 'Git' },
      ],
    },
  ],
  reducers: {
    project: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { profile } = projectData.actions;
export default projectData.reducer;