# YouTube Clone Project

## 사용 기술

1. Skills: React JS, PostCSS
2. Use: Postman, YouTube Data API
3. Deployment: Netlify

## 기능

1. YouTube Data API를 통해 가져온 인기동영상 상위 30개를 메인화면에 노출
2. 메인화면의 영상 클릭 시 상세 화면으로 화면 전환
3. `상세 화면`: 동영상, 제목, 채널명, 더보기란에 기재된 정보, 게시 날짜에 대한 정보
4. 상세화면 옆단에는 인기동영상 30개의 썸네일과 제목, 채널명이 적힌 리스트가 보여짐
5. `검색`: 검색하고자 하는 키워드로 상위 30개의 결과를 화면에 노출

## To Do List

- [x] 컴포넌트 나누기 - 기능별로 큰그림 그리기
- [x] `fetch` → YouTube API로부터 데이터 받아오기 (인기 동영상 상위 25개 불러오기)
- [x] 받아온 데이터를 화면에 바둑형식으로 뿌리기 - 썸네일, 영상제목, 채널 표기
- [x] 영상 클릭 시 화면에 `iframe`을 통해 해당 영상과 제목, 채널명, 더보기 설명 등 표시
- [x] 영상 옆단에 추천 목록(=메인화면에 뿌려줬던 영상들) 표시
- [x] 검색 기능 구현하기

## 배포

https://youtube-clone-coding-project.netlify.app/
