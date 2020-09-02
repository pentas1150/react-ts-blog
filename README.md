# Full Stack Blog with Typescript

# Introduction
typescript를 이용한 풀스택 블로그 개발기입니다.

# Using Tools
### Common
- [Typescript](https://www.typescriptlang.org/)

### FrontEnd
- [React-Hook](https://ko.reactjs.org/docs/hooks-intro.html)
- [React-Bootstrap](https://react-bootstrap.github.io/)

### BackEnd
- [Express](https://expressjs.com/): 웹 프레임워크
- [Sequelize](https://sequelize.org/): ORM(Object Relational Mapper) 패키지 Mysql 튜플을 Object로 변환시켜줌
- [Passport](https://www.npmjs.com/package/passport): 회원가입 패키지 (Passport-kakao)
- [CORS](https://www.npmjs.com/package/cors): CORS 문제 해결 패키지

# Results
### Screenshots
- 메인 화면
<img src="https://postfiles.pstatic.net/MjAyMDA5MDJfMTM3/MDAxNTk5MDIxODY0MzMx.yBAmPby-LY8j1clIxbkelQDFiamg61lcS0F_TFZWHMYg.tAEJ7c9oFzFFsaCCVe-GlhU5wlEF8uDuj-Hi0tnFbFAg.PNG.ffanys_/2.png?type=w966" width="600px">

- 로그인 화면
<img src="https://postfiles.pstatic.net/MjAyMDA5MDJfMTc2/MDAxNTk5MDIxODY0Mzgw.60tOLG_xfXMyNVbtbNKTMuunYIjRMi_hL7GDbCJDp-cg.3L1npRQVLc4Uf9_qWxZwDCCNjqZW-iFcIInDKGQwZKQg.PNG.ffanys_/1.png?type=w966" width="600px">

- 게시글 작성 화면
<img src="https://postfiles.pstatic.net/MjAyMDA5MDJfMjg4/MDAxNTk5MDIxODY0NzM4.TGI0noi1RWq7u9JAulFaEqjRWkJvo3PrgsIb1pTxd9Yg.3Yi8ygBwoIxtNafuBwAC6K3UsqIgQ74TuJEtUaLDJ0sg.PNG.ffanys_/4.png?type=w966" width="600px">

- 게시글 및 댓글 화면
<img src="https://postfiles.pstatic.net/MjAyMDA5MDJfMjQw/MDAxNTk5MDIxODY0NDk2.wqFoaSnO_Zgl0vgMjG77VSigWnI1Fh_xZiw4edFTbpgg.RWPfmn0GhFztF0nghDupF6sa6hu6NpuKrsm67pe60dAg.PNG.ffanys_/3.png?type=w966" width="600px">

### FrontEnd
1. Hooks를 사용하여 함수 컴포넌트들 구현.

2. 내부 State를 사용하여 상태 관리.


### BackEnd
1. API형식으로 통신.

2. Mysql & Sequelize로 각종 정보 저장.

# Troubleshooting
1. CORS문제 발생 -> BackEnd에 cors 미들웨어 추가하여 해결

2. React의 axios에 express-session 정보가 저장이 안되는 문제 발생 -> axios의 withCredectials을 허용하여 해결

3. CKEditor 기능 학습 중

4. index.d.ts 문제
  - https://www.slideshare.net/gloridea/dts-74589285
  
Project URL: https://github.com/pentas1150/react-ts-blog
