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
