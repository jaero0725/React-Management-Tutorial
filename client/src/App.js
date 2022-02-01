import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme =>({
  root:{
    width:'100%',
    marginTop :theme.spacing(3),
    overflowX :"auto"
  },
  table :{
    minWidth : 1080
  }
})

// const customers = [
//   {
//     'id' : 1,
//     'image' : 'https://placeimg.com/64/64/1',
//     'name' : '최재호',
//     'birthday' : '940725',
//     'gender' : '남자',
//     'job' : '직장인'
//   },
//   {
//     'id' : 2,
//     'image' : 'https://placeimg.com/64/64/2',
//     'name' : '홍길동',
//     'birthday' : '940816',
//     'gender' : '남자',
//     'job' : '개발자'
//   },
//   {
//     'id' : 3,
//     'image' : 'https://placeimg.com/64/64/6',
//     'name' : '이순신',
//     'birthday' : '940432',
//     'gender' : '남자',
//     'job' : '디자이너'
//   }
// ]

/*
# 프록시 설정하기 
 react-scripts의 버전이 2 이상인 경우
 http-proxy-middleware를 설치해 setupProxy.js라는 파일을 통해 proxy 설정을 해줘야 한다.
*/

class App extends Component{
  //변경될 수 있는 변수 : state
  state = {
    customers : ""
  }

  //componet가 mount 가 되었을때 실행됨. 
  componentDidMount(){
    this.callApi()
      .then( res => this.setState({customers : res}))
      .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json(); //body변수에 받아서 넣어줌. 
  }

  render(){
    const {classes} = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.customers ? this.state.customers.map( c => {   //state로 변경되었으므로 
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
                }) : ""
              }
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
