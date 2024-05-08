import type { RecordDetail, RecordInfo } from '~/types/record';

export const record: RecordDetail[] = [
  {
    recordId: 1,
    recordName: '서비스 초안 기획',
    recordDate: '2024-03-11',
    recordWriterId: 1,
    recordContent:
      '<h2>서비스 기획 제안</h2><p>김도연- 축제 팟 구하기 송지은- 코드리뷰 사이트(채팅,에디터 포함) 백승지- 협업툴(AI) 이가연- 협업툴(채팅/음성채팅 포함)</p><h2>필수 구현</h2><p>소셜 로그인/Spring Security 웹소켓 실시간 채팅</p><h2>하고 싶은 구현</h2><p>AI 음성 채팅 에디터</p><p>협업툴 -&gt; UI 쪽에서 일이 많아질듯 코드리뷰 -&gt; 프론트쪽에서는 구현이 ㄱㅊ을거 같지만 백엔드가 좀 단순해질 수 있다</p><p>협업툴, 일정, 팀 전환 AI가 회의 내용 요약해줌</p><h2>기획 틀</h2><ol><li>팀 만들기 (초대코드, 링크, 친구 초대)</li><li>팀별로 프로젝트 관리 (팀별로 프로젝트는 1개가 최대)</li><li>첫번째로 프로젝트 기획,구상 단계 -&gt; 일정, 기능 등 추가 (이게 회의록 목록)</li><li>회의록 기준으로 버스형 일정표 생성 -&gt; AI회의 요약일 수도 있고 작성 기반일 수도 있고 ,,,</li><li>일정표의 동그라미 누르면 CRUD 형태의 회의칸이 뜸</li><li>회의 기록에 따라 잔디 심기 (진척도 볼 수 있음)</li></ol><h2>AI 관련</h2><ul><li>텍스트 채팅 요약 (첨부파일 등을 크롤링해서 텍스트로 전환해 미니 챗지피티가 내장)</li><li>회의록 요약</li></ul><h2>다음 회의까지 해야하는 일</h2><p>간단하게 레퍼런스할 정도의 사례 알아보긴</p>',
    tagList: [
      '서비스',
      '기획',
      '아이디어',
      '제안',
      '18일차',
      '작성자',
      '프론트',
      '백엔드',
      '작업물',
    ],
    memberList: [
      { memberId: 1, name: '송지은' },
      { memberId: 2, name: '이가연' },
      { memberId: 4, name: '김도연' },
    ],
  },
  {
    recordId: 2,
    recordName: '서비스 세부 기획 & 수행계획서 일부 작성',
    recordDate: '2024-03-13',
    recordWriterId: 2,
    recordContent:
      '<h2>기획 고도화 브리핑</h2><ul><li><p>송지은</p><p><a href="https://prod-files-secure.s3.us-west-2.amazonaws.com/1518a9da-0e39-4734-808f-35897e20811c/af5d92e9-a11b-4011-812f-340073c10fd1/%E1%84%8B%E1%85%B5%E1%84%85%E1%85%B3%E1%86%B7_%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%82%E1%85%B3%E1%86%AB_%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%87%E1%85%AE%E1%86%A8_(1).pdf">송지은</a></p><ul><li>파일 서버 용량 관리, 보안 필요</li><li>회의록 동시 편집 [채팅보다 동시 편집] → 혹은 팀장만 편집 가능 권한 부여<ul><li>개인별 수정 혹은 동시에 에디터 사용</li></ul></li><li>친구 추가, 프로필 등 공수가 많이 듬</li><li>여러 팀 참여 → 나중에 작업<ul><li>여러 플젝끼리 작업시 통신 작업 시간 오래 걸림</li></ul></li></ul></li><li>이가연<ul><li>회원가입/로그인..</li><li>실시간 채팅</li><li>알림<ul><li>채팅알림, 회의시작 알림</li><li>웹소켓</li></ul></li><li>팀구성 → 초대코드</li><li>부가기능<ul><li>캘린더<ul><li>프론트 : 라이브러리 사용 가능</li></ul></li><li>에디터 공동작업기능<ul><li>에디터 백엔드</li></ul></li><li>대시보드<ul><li>버스형 → 대시보드로 변경</li></ul></li></ul></li></ul></li></ul><p>&nbsp;</p><ul><li><p>백승지</p><p><a href="https://www.figma.com/embed?embed_host=notion&amp;url=https%3A%2F%2Fwww.figma.com%2Ffile%2FaitHtCy4GLaAlA1KzaIVHi%2FUntitled%3Ftype%3Dwhiteboard%26node-id%3D19-2020%26t%3DTxdg3BvcYyw94p3J-0">https://www.figma.com/embed?embed_host=notion&amp;url=https%3A%2F%2Fwww.figma.com%2Ffile%2FaitHtCy4GLaAlA1KzaIVHi%2FUntitled%3Ftype%3Dwhiteboard%26node-id%3D19-2020%26t%3DTxdg3BvcYyw94p3J-0</a></p><ul><li>버스형 재고려 필요</li></ul></li><li>김도연<ul><li>관련 사례 분석<ul><li>협업툴_플로우</li><li>공동작업 기능 없음</li></ul></li></ul></li></ul><h2>메인 기능 (서비스의 정체성)</h2><ul><li>회의록 관리</li></ul><h2>필수 기능</h2><p>&nbsp;</p><ul><li>팀 생성<ul><li>팀 참가 → 초대코드</li></ul></li><li><p>로그인/회원가입</p><p>소셜로그인</p></li><li>회의록<ul><li>회의록 작성 (수정)<ul><li>동시작업(CRDT) (작성 완료 이후에도 실시간 CRUD 할거?)</li><li>빠른 동기화에는 Redis가 좋다고 함</li></ul></li><li>회의록 삭제</li><li>회의록 조회<ul><li>회의록 관련 질문 AI 챗봇 (플로우 형식)</li><li>첨부파일</li></ul></li></ul></li><li>회의록 목록 조회<ul><li>기간 조회</li><li>태그별 조회</li></ul></li><li>메인화면 (대시보드)<ul><li>태그<ul><li>원형그래프(퍼센트)</li><li>태그 순위 (목록)</li></ul></li><li>회의록 목록</li></ul></li></ul><h2>부가 기능</h2><ul><li>알림서비스 (음성 채팅)</li></ul><p>&nbsp;</p><p>이런식으로 구현하고 싶었음 (채팅 대신 음성채팅)</p><ul><li>프로젝트 전환</li><li>회의 안에서 논의해야하는 안건에 대해 체크박스 제공 뒤 미완료 건에 대해 자동으로 다음 회의록안에 작성시킴</li></ul>',
    tagList: ['기획', '고도화', '아이디어'],
    memberList: [
      { memberId: 2, name: '이가연' },
      { memberId: 3, name: '백승지' },
      { memberId: 4, name: '김도연' },
    ],
  },
  {
    recordId: 3,
    recordName: '수행계획서 작성',
    recordDate: '2024-03-14',
    recordWriterId: 4,
    recordContent:
      '<h2>참고자료</h2><ul><li>프론트엔드<ul><li><a href="https://ckeditor.com/">https://ckeditor.com/</a></li><li><a href="https://www.tiny.cloud/">https://www.tiny.cloud/</a></li></ul></li><li>공동편집기<ul><li><a href="https://velog.io/@hbsps/CRDT-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-CRDT%EB%9E%80#%EB%AC%B8%EC%A0%9C%EC%A0%90-1">[CRDT 구현하기] CRDT란? (velog.io)</a></li></ul></li></ul><h2>와이어 프레임</h2><ul><li>랜딩페이지</li><li>프로젝트 참가</li><li>프로젝트 생성</li><li>프로젝트 메인페이지 (대시보드)</li><li>회의록 조회</li><li>회의록 생성</li><li>AI 챗봇 채팅</li></ul><h2>1. 제목 (주제와 관련된 시스템/서비스명)</h2><h2>2. 팀명, 팀장, 팀원 정보(학번, 이름, 이메일 등 포함)</h2><p>백승지/20200976/컴퓨터학과/20200976@dongduk.ac.kr</p><p>이가연/20200993/컴퓨터학과/dlfkdu@gmail.com</p><p>김도연/20200948/컴퓨터학과/ehdus5176@gmail.com</p><p>송지은/20190971/컴퓨터학과/20190971@dongduk.ac.kr</p><h2>3. 시스템 개요</h2><ul><li><p>개발 배경 및 목적</p><p>실생활에 도움이 될 수 있되 다양한 기능을 포함한 서비스를 개발하기 위해 고민하다 대학생들을 대상으로 하는 프로젝트 협업 툴을 고안했습니다. 다수의 협업을 거치며 디스코드, 구글 독스, 노션 등 여러 가지 협업툴을 사용해왔고, 이를 하나로 통합하면 좋겠다는 아이디어에서 출발했습니다.</p></li><li><p>특징 및 장점</p><p>대시보드를 통해 프로젝트를 진행하며 진행된 회의의 속성을 한눈에 알아볼 수 있습니다. 회의록 안에 태깅된 태그를 통해 사용자가 원하는 회의록을 필터링하여 조회 할 수 있습니다.</p><p>동시 편집 기능을 제공함으로써 회의 진행 과정을 유연하게 공유할 수 있습니다. 진행완료된 회의록을 기반으로 미니챗봇을 제공하여 사용자가 원하는 정보에 빠르게 접근 할 수 있습니다.</p></li><li><p>관련 사례 분석 등</p><ol><li>쉽고 빠른 협업툴, 플로우</li></ol><ul><li><a href="https://apps.apple.com/kr/app/%ED%98%91%EC%97%85%ED%88%B4-%ED%94%8C%EB%A1%9C%EC%9A%B0-%EB%A9%94%EC%8B%A0%EC%A0%80%EC%97%90-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%98%91%EC%97%85%EC%9D%84-%EB%8D%94%ED%95%98%EB%8B%A4/id939143477?platform=iphone">App Store에서 제공하는 협업툴 플로우 : 메신저에 프로젝트 협업을 더하다! (apple.com)</a></li></ul><p>&nbsp;</p><ul><li>회사에서 유용하게 쓸 수 있는 협업 어플</li><li>주요기능: 사내 채팅, 업무 공유(게시글&amp;댓글), 외부 초대, 무기한 파일 보관, 활용 기능(투두리스트)</li></ul><ol><li>디스코드</li></ol><ul><li><a href="https://discord.com/">https://discord.com/</a></li></ul><p>&nbsp;</p><ul><li>문자, 영상들도 주고 받을 수 있어 마치 카카오톡 같은 메신저 앱처럼 여러 분야에서 활용할 수 있음 (음성채팅&amp;실시간채팅 기능)</li><li>화상 통화, 파일 전송, 멘션, 역할 지정 등의 다양한 기능을 지원하여 업무용으로도 활용도가 높음</li></ul><ol><li>Google Docs</li></ol><ul><li><a href="https://www.google.com/intl/ko_KR/docs/about/">https://www.google.com/intl/ko_KR/docs/about/</a></li></ul><p>&nbsp;</p><ul><li>최대 장점: 실시간 문서 편집 기능</li><li>협업이 쉬움 (구글 독스에서는 누구나 문서를 공유하고 주석을 작성할 수 있음)</li></ul></li></ul><h2>4. 개발 범위</h2><ul><li><p>핵심 기능 정의 및 설명</p><p>[회의록 관리 서비스]</p><ul><li>프로젝트 관리<ul><li>프로젝트 생성<ul><li>사용자는 회의록 관리를 위한 하나의 프로젝트를 생성할 수 있다. 생성시 프로젝트 명과 기간, 참여 가능한 인원수, 프로젝트 설명에 대한 내용을 작성한다.</li></ul></li><li>프로젝트 참여코드 조회<ul><li>사용자는 팀원을 초대할 참여코드를 조회할 수 있다.</li></ul></li><li>프로젝트 참가<ul><li>프로젝트 참여코드를 입력하면 자동으로 프로젝트를 생성할 수 있다.</li></ul></li><li>프로젝트 나가기<ul><li>참여하고 있는 프로젝트에서 나가게 되며 새로운 프로젝트를 생성/참가할 수 있는 상태가 된다.</li></ul></li></ul></li><li>회원 관리<ul><li>로그인 / 로그아웃<ul><li>사용자는 소셜 계정을 이용해 서비스에 로그인/로그아웃 한다.</li></ul></li><li>소셜 회원가입<ul><li>사용자는 소셜 계정을 이용해 서비스에 회원가입할 수 있다.</li></ul></li><li>회원 탈퇴<ul><li>사용자는 서비스에 탈퇴할 수 있다.</li></ul></li></ul></li><li>회의록 관리<ul><li>회의록 생성<ul><li>사용자는 회의록 제목, 회의 일시, 참석자, 태그, 회의록을 작성할 수 있다.</li><li>하나의 프로젝트에서 속한 팀원들은 생성된 회의록에서 동시로 회의록을 작성할 수 있다.</li></ul></li><li>회의록 수정<ul><li>사용자는 작성된 회의록을 수정할 수 있다.</li></ul></li><li>회의록 삭제<ul><li>사용자는 본인이 작성한 회의록만 삭제할 수 있다.</li></ul></li><li>회의록 조회<ul><li>사용자는 작성된 회의록을 조회할 수 있다.</li></ul></li><li>회의록 질문 AI 챗봇<ul><li>사용자는 회의록 조회에서 AI 챗봇을 이용해 해당 회의록에 대한 내용을 물어보고, 요약할 수 있다.</li></ul></li><li>회의록 목록 조회<ul><li>기간별 조회<ul><li>회의록을 기간별로 조회할 수 있다.</li></ul></li><li>태그별 조회<ul><li>태그별로 회의록을 조회할 수 있다.</li></ul></li></ul></li></ul></li><li>대시보드<ul><li>태그 목록 조회<ul><li>모든 회의록에 태그된 태그들의 목록을 많이 태그된 순서대로 조회할 수 있다.</li></ul></li><li>태그 퍼센트 그래프<ul><li>모든 회의록에 태그된 태그들의 비율을 원형그래프로 조회할 수 있다.</li></ul></li><li>회의록 목록<ul><li>회의록 목록을 최신순으로 조회할 수 있다.</li></ul></li></ul></li></ul></li><li><p>시스템 구성도 (MVC 기반의 구조와 구성요소 포함</p><p>&nbsp;</p></li></ul><h2>5. 개발 환경 및 사용 기술</h2><ul><li>기술스택<ul><li>Back-end: Spring Boot, JPA, JSP, MySql, Thymeleaf, QueryDSL, WebSocket, WebRTC 등</li><li>Front-end: HTML, CSS, JavaScript, TypeScript, React, msw, storybook, tanstack-query, axios, WebSocket, WebRTC</li></ul></li></ul><h2>6. 업무 분담</h2><ul><li><p>팀원 별 역할 및 담당업무를 세부적으로 정의</p><p>김도연 (팀원/백엔드) : 회의록 CRUD, 동시 편집, 권한/인증, 팀 생성/참가</p><p>백승지(팀장/백엔드) : AI 챗봇, 동시편집, 권한/인증, 프로젝트 관리(생성&amp;참여코드 조회&amp; 참가&amp; 나가기) UI구현 및 로직구현,</p><p>송지은(팀원/프론트) : 프론트 UI Design System 구축, 프로젝트 환경 세팅, 컴포넌트 별 테스트 (Storybook)구현, 회원관리(로그인/로그아웃, 소셜 회원가입, 회원 탈퇴) UI구현 및 로직구현, 회의록 관리(생성, 수정, 삭제, 조회, 목록조회) UI구현 및 로직 구현, 프론트 동시편집 기능 구현, AI 챗봇 로직 구현 및 연결, 대시보드(태그목록조회, 태그 그래프조회, 회의록 목록) 구현</p><p>이가연 : 소셜 로그인, 동시 편집, 초대 기능, 권한/인증</p></li></ul><h2>7. 추진 일정</h2><ul><li><p>세부 개발 일정을 gantt chart 형식으로 표현</p><p>&nbsp;</p></li><li>중간/기말고사 기간 고려</li></ul>',
    tagList: [
      '기획',
      '와이어프레임',
      '개발범위',
      '개요',
      '역할분담',
      '일정추산',
    ],
    memberList: [
      { memberId: 1, name: '송지은' },
      { memberId: 2, name: '이가연' },
      { memberId: 3, name: '백승지' },
    ],
  },
  {
    recordId: 4,
    recordName: '수행계획서 작성2 mvc 구조 & 일정 정리',
    recordDate: '2024-03-17',
    recordWriterId: 3,
    recordContent:
      '<h2>MVC 구조</h2><p>&nbsp;</p><h2>일정 정리</h2><p>&nbsp;</p><h2>개발 기능 정리</h2><p>&nbsp;</p><p>&nbsp;</p>',
    tagList: ['서류'],
    memberList: [
      { memberId: 1, name: '송지은' },
      { memberId: 2, name: '이가연' },
      { memberId: 3, name: '백승지' },
      { memberId: 4, name: '김도연' },
    ],
  },
  {
    recordId: 5,
    recordName: '화면 설계 피드백 및 기능 역할 분담',
    recordDate: '2024-03-18',
    recordWriterId: 1,
    recordContent:
      '<p><a href="https://www.figma.com/file/m6tMlzVgIYLUx5OWtzTIbD/Untitled?type=design&amp;node-id=0%3A1&amp;mode=design&amp;t=QBpMUZKdAOF18KWb-1">https://www.figma.com/file/m6tMlzVgIYLUx5OWtzTIbD/Untitled?type=design&amp;node-id=0%3A1&amp;mode=design&amp;t=QBpMUZKdAOF18KWb-1</a></p><h2>피그마 디자인 피드백</h2><h2>팀생성</h2><ul><li>팀 생성 시 인원수 제한<ul><li>기본 6명 최소 1명 최대 10명</li></ul></li></ul><h2>팀</h2><ul><li>팀원 목록 보기</li></ul><h2>회의록 생성</h2><ul><li>텍스트 편집기 or 마크다운 구현</li></ul><h2>회의록 조회</h2><ul><li>작성자만 수정&amp;삭제버튼 확인가능</li></ul>',
    tagList: ['디자인', '피드백'],
    memberList: [
      { memberId: 1, name: '송지은' },
      { memberId: 2, name: '이가연' },
      { memberId: 3, name: '백승지' },
      { memberId: 4, name: '김도연' },
    ],
  },
  {
    recordId: 6,
    recordName: '진행상황 공유 & 상호 피드백',
    recordDate: '2024-04-04',
    recordWriterId: 2,
    recordContent:
      '<h2>진행상황 공유</h2><h2>프론트</h2><ul><li><p>송지은</p><h3>진행중</h3><ul><li>로그인 API &amp; 모킹 &amp; 연결 &amp; 전역상태 구현</li><li>프로젝트 생성/참가 API &amp; 모킹 &amp; 연결 &amp; 전역상태 구현</li></ul><h3>다음주 목표</h3><ul><li>로그인 관련</li><li>프로젝트 생성&amp;참가 관련</li><li>프로젝트 참여 정보 관련</li><li>프로젝트 내부 페이지 헤더 및 UI 마크업</li></ul><h3>완료</h3><ul><li>공통 컴포넌트 구현</li><li>환경설정 완료</li><li>랜딩 &amp; 팀 생성/참가 &amp; 팀 생성&amp; 팀 참가 UI 구현</li><li>랜딩 &amp; 팀 생성/참가 &amp; 팀 생성&amp; 팀 참가 로직 구현</li></ul></li></ul><h2>백엔드</h2><ul><li><p>백승지</p><p>완료</p><ul><li>프로젝트 생성</li><li>프로젝트 참가</li><li>프로젝트 나가기</li><li>에러코드</li><li>스웨거</li></ul><p>진행중</p><ul><li>코드 수정</li></ul><p>담주 목표</p><ul><li>챗봇</li><li>에러처리 문서처리</li></ul></li><li><p>이가연</p><p>완료</p><ul><li>회의록 &amp; 태그 &amp; 회의록 매핑 객체 생성</li><li>회의록 &amp; 태그 &amp; 회의록 매핑 객체 삭제</li></ul><p>진행중</p><ul><li>Delete → @SqlDelete로 바꾸기</li><li>예외처리</li><li>멤버 권한 부여</li><li>멤버 프로젝트 소속 여부 확인 로직</li></ul><p>다음주 목표</p><ul><li>모든 회의록 조회</li><li>필터링 조회</li></ul></li><li><p>김도연</p><p>완료</p><ul><li>소셜 로그인 api 명세서 작성</li></ul><p>진행중</p><ul><li>소셜 로그인 코드 진행 중</li></ul><p>담주 목표</p><ul><li>소셜 로그인 코드 완성</li><li>url param으로 생성된 token(accessToken, refreshToken) 전달 로 변경</li><li>login으로 redirect 처리</li><li>테스트 코드 작성하면서 (테스트 커버리지 80~) → 소셜 로그인은 테스트 코드 안됨, 없이 하기</li><li>error code: oauth 관련</li><li>헤더 추가</li></ul></li></ul><h2>제안</h2><ol><li>백엔드끼리 코드리뷰<ol><li>셀프 머지 하지말아주세요</li><li>PR 완성시 카톡이나 알림 남기고 리뷰한 뒤 머지하</li></ol></li><li>문서화 열심히<ol><li>여러분은 명세서에 한번 쓰면 되지만 저는 하나하나 다 봐야합니다.</li></ol></li><li>뭐 도입할때는 백엔드끼리 논의하고 결정한 뒤 통일해서 적용해주세요</li><li>API 작성 통일하기 (승지님 API 참고)</li><li>URI는 최대한 완성본 위주로 올리기</li></ol><h2>에러처리</h2><ol><li>만들어진 클래스에 코드 각자 작성하는걸로</li><li>에러코드 정리해서 올리기</li></ol><h2><strong>매핑 엔티티 필요한 것</strong></h2>',
    tagList: ['진행상황', '피드백', '일정추산'],
    memberList: [
      { memberId: 1, name: '송지은' },
      { memberId: 2, name: '이가연' },
      { memberId: 3, name: '백승지' },
      { memberId: 4, name: '김도연' },
    ],
  },
  {
    recordId: 7,
    recordName: '진행상황 공유',
    recordDate: '2024-04-11',
    recordWriterId: 3,
    recordContent:
      '<h2>진행상황 공유</h2><h2>프론트</h2><ul><li><p>송지은</p><h3>진행중</h3><ul><li>프로젝트 참가 관련 구현중</li></ul><h3>다음주 목표</h3><ul><li>프로젝트 내부 페이지 헤더 및 UI 마크업</li><li>프로젝트 회의록 조회 &amp; 생성 &amp; 수정 &amp; 삭제 구현</li></ul><h3>완료</h3><ul><li>로그인 관련</li><li>프로젝트 생성 관련 API &amp; msw 구현</li><li>프로젝트 참여 정보 관련 API &amp; msw 구현</li></ul></li></ul><h2>백엔드</h2><ul><li><p>백승지</p><p>완료</p><ul><li>매핑테이블에 따른 프로젝트 생성, 참가, 나가기 로직 변경</li></ul><p>진행중</p><ul><li>open ai 붙이기</li></ul><p>담주 목표</p><ul><li>open ai 마무리</li></ul></li><li><p>이가연</p><p>완료</p><ul><li>예외처리</li><li>멤버 권한 부여</li><li>피드백 받은 로직 전부 구현</li></ul><p>진행중</p><ul><li>회의록 조회</li><li>테스트코드</li></ul><p>다다음주 목표</p><ul><li>회의록 조회 완성</li></ul></li><li><p>김도연</p><p>완료</p><ul><li>소셜 로그인 api 명세서 수정</li><li>노션에 id, secret 기재</li><li>소셜 로그인 oauth 코드 작성</li></ul><p>진행중</p><ul><li>소셜 로그인 코드 에러 고쳐야 함</li></ul><p>담주 목표</p><ul><li>소셜 로그인 코드 에러 고치기</li><li>예외 처리 구현</li></ul></li></ul><h2>제안</h2><p>대시보드의 태그 그래프</p><p>→ crontab 사용하여 특정 시간 기준으로 그래프를 업데이트한다</p><p>→ 메인페이지 들어갈때마다 그래프를 업데이트한다 **</p><p>→ 회의록하나 등록시마다 그래프를 업데이트한다.</p><p>(dashbord) table</p><p>project id , tag id , count</p>',
    tagList: ['진행상황', '일정추산', '제안'],
    memberList: [
      { memberId: 1, name: '송지은' },
      { memberId: 2, name: '이가연' },
      { memberId: 3, name: '백승지' },
      { memberId: 4, name: '김도연' },
    ],
  },
  {
    recordId: 8,
    recordName: '분업 및 진행상황 공유',
    recordDate: '2025-04-16',
    recordWriterId: 4,
    recordContent:
      '<h2>진행상황 공유</h2><h2>프론트</h2><ul><li><p>송지은</p><h3>&nbsp;</h3></li></ul><h2>백엔드</h2><ul><li><p>백승지</p><p>완료</p><ul><li>open ai 붙이기</li></ul><p>진행중</p><ul><li>open ai 관련 코드 layer로 변경</li></ul><p>담주 목표</p><ul><li>중간 제출 자료</li><li>open ai 관련 요청, 응답, 에러 관련 프론트와 상의 후 피드백 반영</li><li>JWT및 Spring Security붙이기</li></ul></li><li><p>이가연</p><p>완료</p><ul><li>예외처리</li><li>멤버 권한 부여</li><li>피드백 받은 로직 전부 구현</li></ul><p>진행중</p><ul><li>회의록 조회</li><li>테스트코드</li></ul><p>다다음주 목표</p><ul><li>회의록 조회 완성</li></ul></li><li><p>김도연</p><p>완료</p><ul><li>소셜 로그인 api 명세서 수정</li><li>노션에 id, secret 기재</li><li>소셜 로그인 oauth 코드 작성</li></ul><p>진행중</p><ul><li>소셜 로그인 코드 에러 고쳐야 함</li></ul><p>담주 목표</p><ul><li>소셜 로그인 코드 에러 고치기</li><li>예외 처리 구현</li></ul></li></ul><h2>제안</h2><p>대시보드의 태그 그래프</p><p>→ crontab 사용하여 특정 시간 기준으로 그래프를 업데이트한다</p><p>→ 메인페이지 들어갈때마다 그래프를 업데이트한다 **</p><p>→ 회의록하나 등록시마다 그래프를 업데이트한다.</p><p>(dashbord) table</p><p>project id , tag id , count</p>',
    tagList: ['진행상황', '제안', '일정추산'],
    memberList: [
      { memberId: 1, name: '송지은' },
      { memberId: 2, name: '이가연' },
      { memberId: 4, name: '김도연' },
    ],
  },
  {
    recordId: 11,
    recordName: '1서비스 초안 기획',
    recordDate: '2025-03-11',
    recordWriterId: 1,
    recordContent:
      '<h2>서비스 기획 제안</h2><p>김도연- 축제 팟 구하기 송지은- 코드리뷰 사이트(채팅,에디터 포함) 백승지- 협업툴(AI) 이가연- 협업툴(채팅/음성채팅 포함)</p><h2>필수 구현</h2><p>소셜 로그인/Spring Security 웹소켓 실시간 채팅</p><h2>하고 싶은 구현</h2><p>AI 음성 채팅 에디터</p><p>협업툴 -&gt; UI 쪽에서 일이 많아질듯 코드리뷰 -&gt; 프론트쪽에서는 구현이 ㄱㅊ을거 같지만 백엔드가 좀 단순해질 수 있다</p><p>협업툴, 일정, 팀 전환 AI가 회의 내용 요약해줌</p><h2>기획 틀</h2><ol><li>팀 만들기 (초대코드, 링크, 친구 초대)</li><li>팀별로 프로젝트 관리 (팀별로 프로젝트는 1개가 최대)</li><li>첫번째로 프로젝트 기획,구상 단계 -&gt; 일정, 기능 등 추가 (이게 회의록 목록)</li><li>회의록 기준으로 버스형 일정표 생성 -&gt; AI회의 요약일 수도 있고 작성 기반일 수도 있고 ,,,</li><li>일정표의 동그라미 누르면 CRUD 형태의 회의칸이 뜸</li><li>회의 기록에 따라 잔디 심기 (진척도 볼 수 있음)</li></ol><h2>AI 관련</h2><ul><li>텍스트 채팅 요약 (첨부파일 등을 크롤링해서 텍스트로 전환해 미니 챗지피티가 내장)</li><li>회의록 요약</li></ul><h2>다음 회의까지 해야하는 일</h2><p>간단하게 레퍼런스할 정도의 사례 알아보긴</p>',
    tagList: ['서비스', '기획', '아이디어', '제안'],
    memberList: [
      { memberId: 1, name: '송지은' },
      { memberId: 2, name: '이가연' },
      { memberId: 3, name: '백승지' },
      { memberId: 4, name: '김도연' },
    ],
  },
  {
    recordId: 12,
    recordName: '1서비스 세부 기획 & 수행계획서 일부 작성',
    recordDate: '2025-03-13',
    recordWriterId: 2,
    recordContent:
      '<h2>기획 고도화 브리핑</h2><ul><li><p>송지은</p><p><a href="https://prod-files-secure.s3.us-west-2.amazonaws.com/1518a9da-0e39-4734-808f-35897e20811c/af5d92e9-a11b-4011-812f-340073c10fd1/%E1%84%8B%E1%85%B5%E1%84%85%E1%85%B3%E1%86%B7_%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%82%E1%85%B3%E1%86%AB_%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%87%E1%85%AE%E1%86%A8_(1).pdf">송지은</a></p><ul><li>파일 서버 용량 관리, 보안 필요</li><li>회의록 동시 편집 [채팅보다 동시 편집] → 혹은 팀장만 편집 가능 권한 부여<ul><li>개인별 수정 혹은 동시에 에디터 사용</li></ul></li><li>친구 추가, 프로필 등 공수가 많이 듬</li><li>여러 팀 참여 → 나중에 작업<ul><li>여러 플젝끼리 작업시 통신 작업 시간 오래 걸림</li></ul></li></ul></li><li>이가연<ul><li>회원가입/로그인..</li><li>실시간 채팅</li><li>알림<ul><li>채팅알림, 회의시작 알림</li><li>웹소켓</li></ul></li><li>팀구성 → 초대코드</li><li>부가기능<ul><li>캘린더<ul><li>프론트 : 라이브러리 사용 가능</li></ul></li><li>에디터 공동작업기능<ul><li>에디터 백엔드</li></ul></li><li>대시보드<ul><li>버스형 → 대시보드로 변경</li></ul></li></ul></li></ul></li></ul><p>&nbsp;</p><ul><li><p>백승지</p><p><a href="https://www.figma.com/embed?embed_host=notion&amp;url=https%3A%2F%2Fwww.figma.com%2Ffile%2FaitHtCy4GLaAlA1KzaIVHi%2FUntitled%3Ftype%3Dwhiteboard%26node-id%3D19-2020%26t%3DTxdg3BvcYyw94p3J-0">https://www.figma.com/embed?embed_host=notion&amp;url=https%3A%2F%2Fwww.figma.com%2Ffile%2FaitHtCy4GLaAlA1KzaIVHi%2FUntitled%3Ftype%3Dwhiteboard%26node-id%3D19-2020%26t%3DTxdg3BvcYyw94p3J-0</a></p><ul><li>버스형 재고려 필요</li></ul></li><li>김도연<ul><li>관련 사례 분석<ul><li>협업툴_플로우</li><li>공동작업 기능 없음</li></ul></li></ul></li></ul><h2>메인 기능 (서비스의 정체성)</h2><ul><li>회의록 관리</li></ul><h2>필수 기능</h2><p>&nbsp;</p><ul><li>팀 생성<ul><li>팀 참가 → 초대코드</li></ul></li><li><p>로그인/회원가입</p><p>소셜로그인</p></li><li>회의록<ul><li>회의록 작성 (수정)<ul><li>동시작업(CRDT) (작성 완료 이후에도 실시간 CRUD 할거?)</li><li>빠른 동기화에는 Redis가 좋다고 함</li></ul></li><li>회의록 삭제</li><li>회의록 조회<ul><li>회의록 관련 질문 AI 챗봇 (플로우 형식)</li><li>첨부파일</li></ul></li></ul></li><li>회의록 목록 조회<ul><li>기간 조회</li><li>태그별 조회</li></ul></li><li>메인화면 (대시보드)<ul><li>태그<ul><li>원형그래프(퍼센트)</li><li>태그 순위 (목록)</li></ul></li><li>회의록 목록</li></ul></li></ul><h2>부가 기능</h2><ul><li>알림서비스 (음성 채팅)</li></ul><p>&nbsp;</p><p>이런식으로 구현하고 싶었음 (채팅 대신 음성채팅)</p><ul><li>프로젝트 전환</li><li>회의 안에서 논의해야하는 안건에 대해 체크박스 제공 뒤 미완료 건에 대해 자동으로 다음 회의록안에 작성시킴</li></ul>',
    tagList: ['기획', '고도화', '아이디어'],
    memberList: [
      { memberId: 1, name: '송지은' },
      { memberId: 2, name: '이가연' },
      { memberId: 3, name: '백승지' },
      { memberId: 4, name: '김도연' },
    ],
  },
  {
    recordId: 13,
    recordName: '1수행계획서 작성',
    recordDate: '2025-03-14',
    recordWriterId: 4,
    recordContent:
      '<h2>참고자료</h2><ul><li>프론트엔드<ul><li><a href="https://ckeditor.com/">https://ckeditor.com/</a></li><li><a href="https://www.tiny.cloud/">https://www.tiny.cloud/</a></li></ul></li><li>공동편집기<ul><li><a href="https://velog.io/@hbsps/CRDT-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-CRDT%EB%9E%80#%EB%AC%B8%EC%A0%9C%EC%A0%90-1">[CRDT 구현하기] CRDT란? (velog.io)</a></li></ul></li></ul><h2>와이어 프레임</h2><ul><li>랜딩페이지</li><li>프로젝트 참가</li><li>프로젝트 생성</li><li>프로젝트 메인페이지 (대시보드)</li><li>회의록 조회</li><li>회의록 생성</li><li>AI 챗봇 채팅</li></ul><h2>1. 제목 (주제와 관련된 시스템/서비스명)</h2><h2>2. 팀명, 팀장, 팀원 정보(학번, 이름, 이메일 등 포함)</h2><p>백승지/20200976/컴퓨터학과/20200976@dongduk.ac.kr</p><p>이가연/20200993/컴퓨터학과/dlfkdu@gmail.com</p><p>김도연/20200948/컴퓨터학과/ehdus5176@gmail.com</p><p>송지은/20190971/컴퓨터학과/20190971@dongduk.ac.kr</p><h2>3. 시스템 개요</h2><ul><li><p>개발 배경 및 목적</p><p>실생활에 도움이 될 수 있되 다양한 기능을 포함한 서비스를 개발하기 위해 고민하다 대학생들을 대상으로 하는 프로젝트 협업 툴을 고안했습니다. 다수의 협업을 거치며 디스코드, 구글 독스, 노션 등 여러 가지 협업툴을 사용해왔고, 이를 하나로 통합하면 좋겠다는 아이디어에서 출발했습니다.</p></li><li><p>특징 및 장점</p><p>대시보드를 통해 프로젝트를 진행하며 진행된 회의의 속성을 한눈에 알아볼 수 있습니다. 회의록 안에 태깅된 태그를 통해 사용자가 원하는 회의록을 필터링하여 조회 할 수 있습니다.</p><p>동시 편집 기능을 제공함으로써 회의 진행 과정을 유연하게 공유할 수 있습니다. 진행완료된 회의록을 기반으로 미니챗봇을 제공하여 사용자가 원하는 정보에 빠르게 접근 할 수 있습니다.</p></li><li><p>관련 사례 분석 등</p><ol><li>쉽고 빠른 협업툴, 플로우</li></ol><ul><li><a href="https://apps.apple.com/kr/app/%ED%98%91%EC%97%85%ED%88%B4-%ED%94%8C%EB%A1%9C%EC%9A%B0-%EB%A9%94%EC%8B%A0%EC%A0%80%EC%97%90-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%98%91%EC%97%85%EC%9D%84-%EB%8D%94%ED%95%98%EB%8B%A4/id939143477?platform=iphone">App Store에서 제공하는 협업툴 플로우 : 메신저에 프로젝트 협업을 더하다! (apple.com)</a></li></ul><p>&nbsp;</p><ul><li>회사에서 유용하게 쓸 수 있는 협업 어플</li><li>주요기능: 사내 채팅, 업무 공유(게시글&amp;댓글), 외부 초대, 무기한 파일 보관, 활용 기능(투두리스트)</li></ul><ol><li>디스코드</li></ol><ul><li><a href="https://discord.com/">https://discord.com/</a></li></ul><p>&nbsp;</p><ul><li>문자, 영상들도 주고 받을 수 있어 마치 카카오톡 같은 메신저 앱처럼 여러 분야에서 활용할 수 있음 (음성채팅&amp;실시간채팅 기능)</li><li>화상 통화, 파일 전송, 멘션, 역할 지정 등의 다양한 기능을 지원하여 업무용으로도 활용도가 높음</li></ul><ol><li>Google Docs</li></ol><ul><li><a href="https://www.google.com/intl/ko_KR/docs/about/">https://www.google.com/intl/ko_KR/docs/about/</a></li></ul><p>&nbsp;</p><ul><li>최대 장점: 실시간 문서 편집 기능</li><li>협업이 쉬움 (구글 독스에서는 누구나 문서를 공유하고 주석을 작성할 수 있음)</li></ul></li></ul><h2>4. 개발 범위</h2><ul><li><p>핵심 기능 정의 및 설명</p><p>[회의록 관리 서비스]</p><ul><li>프로젝트 관리<ul><li>프로젝트 생성<ul><li>사용자는 회의록 관리를 위한 하나의 프로젝트를 생성할 수 있다. 생성시 프로젝트 명과 기간, 참여 가능한 인원수, 프로젝트 설명에 대한 내용을 작성한다.</li></ul></li><li>프로젝트 참여코드 조회<ul><li>사용자는 팀원을 초대할 참여코드를 조회할 수 있다.</li></ul></li><li>프로젝트 참가<ul><li>프로젝트 참여코드를 입력하면 자동으로 프로젝트를 생성할 수 있다.</li></ul></li><li>프로젝트 나가기<ul><li>참여하고 있는 프로젝트에서 나가게 되며 새로운 프로젝트를 생성/참가할 수 있는 상태가 된다.</li></ul></li></ul></li><li>회원 관리<ul><li>로그인 / 로그아웃<ul><li>사용자는 소셜 계정을 이용해 서비스에 로그인/로그아웃 한다.</li></ul></li><li>소셜 회원가입<ul><li>사용자는 소셜 계정을 이용해 서비스에 회원가입할 수 있다.</li></ul></li><li>회원 탈퇴<ul><li>사용자는 서비스에 탈퇴할 수 있다.</li></ul></li></ul></li><li>회의록 관리<ul><li>회의록 생성<ul><li>사용자는 회의록 제목, 회의 일시, 참석자, 태그, 회의록을 작성할 수 있다.</li><li>하나의 프로젝트에서 속한 팀원들은 생성된 회의록에서 동시로 회의록을 작성할 수 있다.</li></ul></li><li>회의록 수정<ul><li>사용자는 작성된 회의록을 수정할 수 있다.</li></ul></li><li>회의록 삭제<ul><li>사용자는 본인이 작성한 회의록만 삭제할 수 있다.</li></ul></li><li>회의록 조회<ul><li>사용자는 작성된 회의록을 조회할 수 있다.</li></ul></li><li>회의록 질문 AI 챗봇<ul><li>사용자는 회의록 조회에서 AI 챗봇을 이용해 해당 회의록에 대한 내용을 물어보고, 요약할 수 있다.</li></ul></li><li>회의록 목록 조회<ul><li>기간별 조회<ul><li>회의록을 기간별로 조회할 수 있다.</li></ul></li><li>태그별 조회<ul><li>태그별로 회의록을 조회할 수 있다.</li></ul></li></ul></li></ul></li><li>대시보드<ul><li>태그 목록 조회<ul><li>모든 회의록에 태그된 태그들의 목록을 많이 태그된 순서대로 조회할 수 있다.</li></ul></li><li>태그 퍼센트 그래프<ul><li>모든 회의록에 태그된 태그들의 비율을 원형그래프로 조회할 수 있다.</li></ul></li><li>회의록 목록<ul><li>회의록 목록을 최신순으로 조회할 수 있다.</li></ul></li></ul></li></ul></li><li><p>시스템 구성도 (MVC 기반의 구조와 구성요소 포함</p><p>&nbsp;</p></li></ul><h2>5. 개발 환경 및 사용 기술</h2><ul><li>기술스택<ul><li>Back-end: Spring Boot, JPA, JSP, MySql, Thymeleaf, QueryDSL, WebSocket, WebRTC 등</li><li>Front-end: HTML, CSS, JavaScript, TypeScript, React, msw, storybook, tanstack-query, axios, WebSocket, WebRTC</li></ul></li></ul><h2>6. 업무 분담</h2><ul><li><p>팀원 별 역할 및 담당업무를 세부적으로 정의</p><p>김도연 (팀원/백엔드) : 회의록 CRUD, 동시 편집, 권한/인증, 팀 생성/참가</p><p>백승지(팀장/백엔드) : AI 챗봇, 동시편집, 권한/인증, 프로젝트 관리(생성&amp;참여코드 조회&amp; 참가&amp; 나가기) UI구현 및 로직구현,</p><p>송지은(팀원/프론트) : 프론트 UI Design System 구축, 프로젝트 환경 세팅, 컴포넌트 별 테스트 (Storybook)구현, 회원관리(로그인/로그아웃, 소셜 회원가입, 회원 탈퇴) UI구현 및 로직구현, 회의록 관리(생성, 수정, 삭제, 조회, 목록조회) UI구현 및 로직 구현, 프론트 동시편집 기능 구현, AI 챗봇 로직 구현 및 연결, 대시보드(태그목록조회, 태그 그래프조회, 회의록 목록) 구현</p><p>이가연 : 소셜 로그인, 동시 편집, 초대 기능, 권한/인증</p></li></ul><h2>7. 추진 일정</h2><ul><li><p>세부 개발 일정을 gantt chart 형식으로 표현</p><p>&nbsp;</p></li><li>중간/기말고사 기간 고려</li></ul>',
    tagList: [
      '기획',
      '와이어프레임',
      '개발범위',
      '개요',
      '역할분담',
      '일정추산',
    ],
    memberList: [
      { memberId: 1, name: '송지은' },
      { memberId: 2, name: '이가연' },
      { memberId: 3, name: '백승지' },
      { memberId: 4, name: '김도연' },
    ],
  },
  {
    recordId: 14,
    recordName: '1수행계획서 작성2 mvc 구조 & 일정 정리',
    recordDate: '2025-03-17',
    recordWriterId: 3,
    recordContent:
      '<h2>MVC 구조</h2><p>&nbsp;</p><h2>일정 정리</h2><p>&nbsp;</p><h2>개발 기능 정리</h2><p>&nbsp;</p><p>&nbsp;</p>',
    tagList: ['서류'],
    memberList: [
      { memberId: 3, name: '백승지' },
      { memberId: 4, name: '김도연' },
    ],
  },
  {
    recordId: 15,
    recordName: '1화면 설계 피드백 및 기능 역할 분담',
    recordDate: '2025-03-18',
    recordWriterId: 1,
    recordContent:
      '<p><a href="https://www.figma.com/file/m6tMlzVgIYLUx5OWtzTIbD/Untitled?type=design&amp;node-id=0%3A1&amp;mode=design&amp;t=QBpMUZKdAOF18KWb-1">https://www.figma.com/file/m6tMlzVgIYLUx5OWtzTIbD/Untitled?type=design&amp;node-id=0%3A1&amp;mode=design&amp;t=QBpMUZKdAOF18KWb-1</a></p><h2>피그마 디자인 피드백</h2><h2>팀생성</h2><ul><li>팀 생성 시 인원수 제한<ul><li>기본 6명 최소 1명 최대 10명</li></ul></li></ul><h2>팀</h2><ul><li>팀원 목록 보기</li></ul><h2>회의록 생성</h2><ul><li>텍스트 편집기 or 마크다운 구현</li></ul><h2>회의록 조회</h2><ul><li>작성자만 수정&amp;삭제버튼 확인가능</li></ul>',
    tagList: ['디자인', '피드백'],
    memberList: [
      { memberId: 1, name: '송지은' },
      { memberId: 2, name: '이가연' },
      { memberId: 3, name: '백승지' },
      { memberId: 4, name: '김도연' },
    ],
  },
  {
    recordId: 16,
    recordName: '1진행상황 공유 & 상호 피드백',
    recordDate: '2025-04-04',
    recordWriterId: 2,
    recordContent:
      '<h2>진행상황 공유</h2><h2>프론트</h2><ul><li><p>송지은</p><h3>진행중</h3><ul><li>로그인 API &amp; 모킹 &amp; 연결 &amp; 전역상태 구현</li><li>프로젝트 생성/참가 API &amp; 모킹 &amp; 연결 &amp; 전역상태 구현</li></ul><h3>다음주 목표</h3><ul><li>로그인 관련</li><li>프로젝트 생성&amp;참가 관련</li><li>프로젝트 참여 정보 관련</li><li>프로젝트 내부 페이지 헤더 및 UI 마크업</li></ul><h3>완료</h3><ul><li>공통 컴포넌트 구현</li><li>환경설정 완료</li><li>랜딩 &amp; 팀 생성/참가 &amp; 팀 생성&amp; 팀 참가 UI 구현</li><li>랜딩 &amp; 팀 생성/참가 &amp; 팀 생성&amp; 팀 참가 로직 구현</li></ul></li></ul><h2>백엔드</h2><ul><li><p>백승지</p><p>완료</p><ul><li>프로젝트 생성</li><li>프로젝트 참가</li><li>프로젝트 나가기</li><li>에러코드</li><li>스웨거</li></ul><p>진행중</p><ul><li>코드 수정</li></ul><p>담주 목표</p><ul><li>챗봇</li><li>에러처리 문서처리</li></ul></li><li><p>이가연</p><p>완료</p><ul><li>회의록 &amp; 태그 &amp; 회의록 매핑 객체 생성</li><li>회의록 &amp; 태그 &amp; 회의록 매핑 객체 삭제</li></ul><p>진행중</p><ul><li>Delete → @SqlDelete로 바꾸기</li><li>예외처리</li><li>멤버 권한 부여</li><li>멤버 프로젝트 소속 여부 확인 로직</li></ul><p>다음주 목표</p><ul><li>모든 회의록 조회</li><li>필터링 조회</li></ul></li><li><p>김도연</p><p>완료</p><ul><li>소셜 로그인 api 명세서 작성</li></ul><p>진행중</p><ul><li>소셜 로그인 코드 진행 중</li></ul><p>담주 목표</p><ul><li>소셜 로그인 코드 완성</li><li>url param으로 생성된 token(accessToken, refreshToken) 전달 로 변경</li><li>login으로 redirect 처리</li><li>테스트 코드 작성하면서 (테스트 커버리지 80~) → 소셜 로그인은 테스트 코드 안됨, 없이 하기</li><li>error code: oauth 관련</li><li>헤더 추가</li></ul></li></ul><h2>제안</h2><ol><li>백엔드끼리 코드리뷰<ol><li>셀프 머지 하지말아주세요</li><li>PR 완성시 카톡이나 알림 남기고 리뷰한 뒤 머지하</li></ol></li><li>문서화 열심히<ol><li>여러분은 명세서에 한번 쓰면 되지만 저는 하나하나 다 봐야합니다.</li></ol></li><li>뭐 도입할때는 백엔드끼리 논의하고 결정한 뒤 통일해서 적용해주세요</li><li>API 작성 통일하기 (승지님 API 참고)</li><li>URI는 최대한 완성본 위주로 올리기</li></ol><h2>에러처리</h2><ol><li>만들어진 클래스에 코드 각자 작성하는걸로</li><li>에러코드 정리해서 올리기</li></ol><h2><strong>매핑 엔티티 필요한 것</strong></h2>',
    tagList: ['진행상황', '피드백', '일정추산'],
    memberList: [
      { memberId: 1, name: '송지은' },
      { memberId: 2, name: '이가연' },
      { memberId: 3, name: '백승지' },
    ],
  },
  {
    recordId: 17,
    recordName: '1진행상황 공유',
    recordDate: '2025-04-11',
    recordWriterId: 3,
    recordContent:
      '<h2>진행상황 공유</h2><h2>프론트</h2><ul><li><p>송지은</p><h3>진행중</h3><ul><li>프로젝트 참가 관련 구현중</li></ul><h3>다음주 목표</h3><ul><li>프로젝트 내부 페이지 헤더 및 UI 마크업</li><li>프로젝트 회의록 조회 &amp; 생성 &amp; 수정 &amp; 삭제 구현</li></ul><h3>완료</h3><ul><li>로그인 관련</li><li>프로젝트 생성 관련 API &amp; msw 구현</li><li>프로젝트 참여 정보 관련 API &amp; msw 구현</li></ul></li></ul><h2>백엔드</h2><ul><li><p>백승지</p><p>완료</p><ul><li>매핑테이블에 따른 프로젝트 생성, 참가, 나가기 로직 변경</li></ul><p>진행중</p><ul><li>open ai 붙이기</li></ul><p>담주 목표</p><ul><li>open ai 마무리</li></ul></li><li><p>이가연</p><p>완료</p><ul><li>예외처리</li><li>멤버 권한 부여</li><li>피드백 받은 로직 전부 구현</li></ul><p>진행중</p><ul><li>회의록 조회</li><li>테스트코드</li></ul><p>다다음주 목표</p><ul><li>회의록 조회 완성</li></ul></li><li><p>김도연</p><p>완료</p><ul><li>소셜 로그인 api 명세서 수정</li><li>노션에 id, secret 기재</li><li>소셜 로그인 oauth 코드 작성</li></ul><p>진행중</p><ul><li>소셜 로그인 코드 에러 고쳐야 함</li></ul><p>담주 목표</p><ul><li>소셜 로그인 코드 에러 고치기</li><li>예외 처리 구현</li></ul></li></ul><h2>제안</h2><p>대시보드의 태그 그래프</p><p>→ crontab 사용하여 특정 시간 기준으로 그래프를 업데이트한다</p><p>→ 메인페이지 들어갈때마다 그래프를 업데이트한다 **</p><p>→ 회의록하나 등록시마다 그래프를 업데이트한다.</p><p>(dashbord) table</p><p>project id , tag id , count</p>',
    tagList: ['진행상황', '일정추산', '제안'],
    memberList: [
      { memberId: 1, name: '송지은' },
      { memberId: 2, name: '이가연' },
      { memberId: 3, name: '백승지' },
      { memberId: 4, name: '김도연' },
    ],
  },
  {
    recordId: 18,
    recordName: '1분업 및 진행상황 공유',
    recordDate: '2025-04-16',
    recordWriterId: 4,
    recordContent:
      '<h2>진행상황 공유</h2><h2>프론트</h2><ul><li><p>송지은</p><h3>&nbsp;</h3></li></ul><h2>백엔드</h2><ul><li><p>백승지</p><p>완료</p><ul><li>open ai 붙이기</li></ul><p>진행중</p><ul><li>open ai 관련 코드 layer로 변경</li></ul><p>담주 목표</p><ul><li>중간 제출 자료</li><li>open ai 관련 요청, 응답, 에러 관련 프론트와 상의 후 피드백 반영</li><li>JWT및 Spring Security붙이기</li></ul></li><li><p>이가연</p><p>완료</p><ul><li>예외처리</li><li>멤버 권한 부여</li><li>피드백 받은 로직 전부 구현</li></ul><p>진행중</p><ul><li>회의록 조회</li><li>테스트코드</li></ul><p>다다음주 목표</p><ul><li>회의록 조회 완성</li></ul></li><li><p>김도연</p><p>완료</p><ul><li>소셜 로그인 api 명세서 수정</li><li>노션에 id, secret 기재</li><li>소셜 로그인 oauth 코드 작성</li></ul><p>진행중</p><ul><li>소셜 로그인 코드 에러 고쳐야 함</li></ul><p>담주 목표</p><ul><li>소셜 로그인 코드 에러 고치기</li><li>예외 처리 구현</li></ul></li></ul><h2>제안</h2><p>대시보드의 태그 그래프</p><p>→ crontab 사용하여 특정 시간 기준으로 그래프를 업데이트한다</p><p>→ 메인페이지 들어갈때마다 그래프를 업데이트한다 **</p><p>→ 회의록하나 등록시마다 그래프를 업데이트한다.</p><p>(dashbord) table</p><p>project id , tag id , count</p>',
    tagList: [
      '진행상황',
      '제안',
      '일정추산',
      '서비스',
      '기획',
      '아이디어',
      '제안',
      '프론트',
      '백엔드',
      '작업물',
    ],
    memberList: [
      { memberId: 1, name: '송지은' },
      { memberId: 2, name: '이가연' },
      { memberId: 3, name: '백승지' },
      { memberId: 4, name: '김도연' },
    ],
  },
];

export const recordList: RecordInfo[] = [
  {
    recordId: 18,
    recordName: '1분업 및 진행상황 공유',
    recordDate: '2025-04-16',
    recordWriterName: '김도연',
  },
  {
    recordId: 17,
    recordName: '1진행상황 공유',
    recordDate: '2025-04-11',
    recordWriterName: '백승지',
  },
  {
    recordId: 16,
    recordName: '1진행상황 공유 & 상호 피드백',
    recordDate: '2025-04-04',
    recordWriterName: '이가연',
  },
  {
    recordId: 15,
    recordName: '1화면 설계 피드백 및 기능 역할 분담',
    recordDate: '2025-03-18',
    recordWriterName: '송지은',
  },
  {
    recordId: 14,
    recordName: '1수행계획서 작성2 mvc 구조 & 일정 정리',
    recordDate: '2025-03-17',
    recordWriterName: '백승지',
  },
  {
    recordId: 13,
    recordName: '1수행계획서 작성',
    recordDate: '2025-03-14',
    recordWriterName: '김도연',
  },
  {
    recordId: 12,
    recordName: '1서비스 세부 기획 & 수행계획서 일부 작성',
    recordDate: '2025-03-13',
    recordWriterName: '이가연',
  },
  {
    recordId: 11,
    recordName: '1서비스 초안 기획',
    recordDate: '2025-03-11',
    recordWriterName: '송지은',
  },
  {
    recordId: 8,
    recordName: '분업 및 진행상황 공유',
    recordDate: '2025-04-16',
    recordWriterName: '김도연',
  },
  {
    recordId: 7,
    recordName: '진행상황 공유',
    recordDate: '2024-04-11',
    recordWriterName: '백승지',
  },
  {
    recordId: 6,
    recordName: '진행상황 공유 & 상호 피드백',
    recordDate: '2024-04-04',
    recordWriterName: '이가연',
  },
  {
    recordId: 5,
    recordName: '화면 설계 피드백 및 기능 역할 분담',
    recordDate: '2024-03-18',
    recordWriterName: '송지은',
  },
  {
    recordId: 4,
    recordName: '수행계획서 작성2 mvc 구조 & 일정 정리',
    recordDate: '2024-03-17',
    recordWriterName: '백승지',
  },
  {
    recordId: 3,
    recordName: '수행계획서 작성',
    recordDate: '2024-03-14',
    recordWriterName: '김도연',
  },
  {
    recordId: 2,
    recordName: '서비스 세부 기획 & 수행계획서 일부 작성',
    recordDate: '2024-03-13',
    recordWriterName: '이가연',
  },
  {
    recordId: 1,
    recordName: '서비스 초안 기획',
    recordDate: '2024-03-11',
    recordWriterName: '송지은',
  },
];
