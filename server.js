const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;  //5000번 포트로 
//const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true }));

//app.use(cors()); //cors을 허용 

// app.get('/api/hello', (req, res) => {
//     res.send({message:'Hello Express'});
// });

// # 고객 목록을 보여주는 get Api
// json 형식을 이용하여 주고받음. 
// React 는 비동기 식으로 서버에 갖다옴. , 프록시 설정 
app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id' : 1,
            'image' : 'https://placeimg.com/64/64/1',
            'name' : '최재호',
            'birthday' : '940725',
            'gender' : '남자',
            'job' : '직장인'
          },
          {
            'id' : 2,
            'image' : 'https://placeimg.com/64/64/2',
            'name' : '홍길동',
            'birthday' : '940816',
            'gender' : '남자',
            'job' : '개발자'
          },
          {
            'id' : 3,
            'image' : 'https://placeimg.com/64/64/6',
            'name' : '이순신',
            'birthday' : '940432',
            'gender' : '남자',
            'job' : '디자이너'
          }
    ]);
});

app.listen(port , () => console.log(`Listening on port ${port}`));

// Rest API 구축 
