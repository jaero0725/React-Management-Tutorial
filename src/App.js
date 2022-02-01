import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
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
]

class App extends Component{
  render(){
    return (
      <div>
        {
         customers.map( c => {
           return (
            <Customer
              key ={c.id}   //map 은 key값을 필수로 요구함
              id={c.id}
              image={c.image}
              name={c.name}
              birthday ={c.birthday}
              gender={c.gender}
              job={c.job}
            />  
           );
         })
        }
      </div>
    );
  }
}

export default App;
