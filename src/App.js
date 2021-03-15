import React, {Component} from 'react';
import UserList from './UserList';
import {List, Record} from 'immutable';

const User = Record({
  id: null,
  username: null
})

const Data = Record({
  input: '',
  users: List()
})

class App extends Component {

  id = 3;

  state = {
    data: Data({ // object로 묶고
      users: List([ // 배열로 User를 추가
        User({
          id: 1,
          username: "kochic",
        }),
        User({
          id: 2,
          username: "ysKo"
        })
      ])
    })
  }

  onChange = (e) => {
    const {value} = e.target;
    const {data}  = this.state;
    this.setState({
      data: data.set("input", value)
    })
  }

  onButtonClick = (e) => {
    const {data} = this.state;
    this.setState({
      data: data.set("input", "") // data를 읽은 다음에
      .update("users", users => users.push(new User({ // 설정할때는 update가능
        id: this.id++,
        username: data.get("input")
      })))
    })
  }

  render() {
    const {onChange, onButtonClick} = this;
    const {data} = this.state;
    return(
      <div>
        <div>
          <input onChange={onChange} value={data.get("input")}/>
          <button onClick={onButtonClick}>추가</button>
        </div>
        <h1>사용자 목록</h1>
        <div>
          <UserList users={data.get("users")} />
        </div>
      </div>
    )
  }
}

export default App;
