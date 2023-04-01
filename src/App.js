import React, { Component } from "react";
import Customer from "./Components/Customer";
import './App.css'

const customers = [
  {
    'id':1,
    'image': 'http://placeimg.com/64/64/1',
    'name' : '홍길동',
    'birthday' : '961222',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id':2,
    'image': 'http://placeimg.com/64/64/2',
    'name' : '나동빈',
    'birthday' : '000203',
    'gender' : '남자',
    'job' : '대학교 석사'
  },
  {
    'id':3,
    'image': 'http://placeimg.com/64/64/3',
    'name' : '이가은',
    'birthday' : '020401',
    'gender' : '여자',
    'job' : '교수'
  }]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
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
