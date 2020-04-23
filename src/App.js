import React from 'react';
import './App.css';
import boy from './images/boy.jpg';
import girl from './images/girl.jpg';
import grandmother from './images/grandmother.jpg';
import man from './images/man.jpg';

const users = [
  {name: "taiki", image: boy, crapping: 100, crapped: 0},
  {name: "akane", image: girl, crapping: 100, crapped: 0},
  {name: "yoshiko", image: grandmother, crapping: 100, crapped: 0},
  {name: "tomonori", image: man, crapping: 100, crapped: 0}
]

export class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        current_users: users,
        users: users,
      }
    }

    handleChange=e=>{
      console.log(e)
     // this.setState({value: e.target.value})
      console.log(e.target.getAttribute('data-index'))
    }

    handleClick(){
        this.setState({count: this.state.count - 2});
    }
    
    render() {
        return (
          <div>
            <div>
              <h2>current</h2>
              <img src={this.state.value} alt=""/>
              <select value={this.state.value} onChange={this.handleChange}>
                {this.state.current_users.map((user, i) => {return<option key={i} data-index={i}value={user.image}>{user.name}</option>})}
              </select>
            </div>
            <div>
              <h2>user</h2>
              <img src={this.state.value} alt=""/>
              <select value={this.state.value} onChange={this.handleChange}>
                {this.state.users.map((user, i) => {return<option key={i}data-index={i}value={user.image}>{user.name}</option>})}
              </select>
            </div>
            <h3>拍手できる: {this.state.count}  拍手された: 0</h3>
            <button onClick={()=>{this.handleClick()}}>
                いいね！
            </button>
          </div>
        );
    }
}

class Newpost extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '', asc: true};
    }
    
    handleChange=e=>{
        this.setState({ text: e.target.value });
    }
    
    handleSubmit=e=>{
      e.preventDefault();
      const today = new Date()
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        timestamp: today.getFullYear() + '/'
                    + (today.getMonth() + 1) + '/' + today.getDate()
                    + ' ' + today.getHours() + ':' + today.getMinutes()
      };
      this.setState(state => ({
        items: [newItem,...this.state.items],
        text: ''
      }));
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-post">
              あなたの周りの人の行動を褒めよう！
            </label>
            <textarea
              id="new-post"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              投稿
            </button>
          </form>
          <h3>投稿一覧</h3>
          <List items={this.state.items} />
        </div>
      );
    }
  
    
}
  
class List extends React.Component {

    render() {
      return (
        <ul>
          {this.props.items.map((item,i) => (
            <li key={i}>{item.text} {item.timestamp}
            </li>
          ))}
        </ul>
      );
    }
  }

export default Newpost;
