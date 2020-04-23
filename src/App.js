import React from 'react';
import './App.css';
import man from './images/man.jpg'
export class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 100};
    }

    handleClick(){
        this.setState({count: this.state.count - 2});
    }

    render() {
        return (
          <div>
            <img src={man} alt="name"/>
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
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        this.setState({ text: e.target.value });
    }
    
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
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
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      );
    }
  }

export default Newpost;
