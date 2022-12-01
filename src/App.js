import logo from './logo.svg';
import './App.css';
import React from 'react';

const PROPERTY = {
  like: {
    defaultClassName : {
      btn: 'like-button',
      counterClassName: 'likes-counter'
    },
    likedClassName : {
      btn: 'like-button liked'
    }
    
  },

  dislike: {
    defaultClassName: {
      btn: 'dislike-button',
      counterClassName: 'dislikes-counter'
    },
    dislikedClassName: {
      btn: 'dislike-button'
    }
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("props = ", props);
    this.state = {
      currentClick: null,
      prevClick: null,
      likeBtn: {
        counter: 100,
        btnClassName: PROPERTY.like.defaultClassName.btn,
        counterClassName: PROPERTY.like.defaultClassName.counterClassName,
      },
      disLikeBtn: {
        counter: 25,
        btnClassName: PROPERTY.dislike.defaultClassName.btn,
        counterClassName: PROPERTY.dislike.defaultClassName.counterClassName,
      },
      className: 'like-button',
      likeText: 'Like | '
    }

  }

  handleClick = e => {
    const { id } = e.currentTarget;
    const { prevClick, currentClick } = this.state;
    let newState = {
      ...this.state
    };
    if (id === 'btn_like') {
      if (!prevClick) {
        newState.likeBtn = {
          ...newState.likeBtn,
          counter: newState.likeBtn.counter + 1,
          btnClassName: PROPERTY.like.likedClassName.btn,
        }
      } else if (prevClick === 'btn_like') {
        newState.likeBtn = {
          ...newState.likeBtn,
          counter: newState.likeBtn.counter - 1,
          btnClassName: PROPERTY.like.defaultClassName.btn
        }
      } else if (prevClick === 'btn_dislike') {
        newState = {
          ...newState,
          likeBtn: {
            counter: newState.likeBtn.counter + 1,
            btnClassName: PROPERTY.like.likedClassName.btn,
          },
          disLikeBtn: {
            counter: newState.disLikeBtn.counter - 1,
            btnClassName: PROPERTY.dislike.defaultClassName.btn,
          }
        }
      }
    } else if (id === 'btn_dislike') {
      if (!prevClick) {
        
      } else if (prevClick === 'btn_like') {

      } else if (prevClick === 'btn_dislike') {

      }
    }
  }

  render() {
    return (
      <div className="App">
        <button id='btn_like' className={this.state.className} onClick={this.handleClick}>
          <span>{this.state.likeText}</span>
          <span className='likes-counter liked'>100</span>
        </button>
        <button id='btn_dislike' className={this.state.className}>
          <span>Dislike | </span>
          <span className='liked'>100</span>
        </button>
      </div>
    );
  }
}

export default App;
