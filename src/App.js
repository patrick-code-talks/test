// import logo from './logo.svg';
import './App.css';
import React from 'react';

import cx from 'classnames';

const PROPERTY = {
  btnID: {
    likeBtn: 'btn_like',
    dislikeBtn: 'btn_dislike'
  },
  
}
class App extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      clicked: null,
      likeBtn: {
        counter: 100, // default number
        btnClass: 'like-button',  // default style
        // counterSpanClass: 'likes-counter'
      },
      dislikeBtn: {
        counter: 25,  // default number
        btnClass: 'dislike-button', // default style
        // counterSpanClass: 'dislikes-counter'
      }
    }
  }

  // handleClick = e => {
  //   const { id } = e.currentTarget;
  //   console.log('id = ', id);
  // }

  handleClickLikeBtn = () => {
    const { clicked } = this.state;
    if (!clicked) { // 1st click
      this.setState(prevState => {
        return {
          ...prevState,
          clicked: PROPERTY.btnID.likeBtn,
          likeBtn: {
            counter: prevState.likeBtn.counter + 1,
            btnClass: cx('like-button', 'liked'),
          }
        }
      });
    } else if (clicked === PROPERTY.btnID.likeBtn) {  // click like that already been clicked
      this.setState(prevState => {
        return {
          ...prevState,
          clicked: PROPERTY.btnID.likeBtn,
          likeBtn: {
            counter: prevState.likeBtn.counter - 1,
            btnClass: cx('like-button', ''),
          }
        }
      });
    } else if (clicked === PROPERTY.btnID.dislikeBtn) { // click like after clicking dislike
      this.setState(prevState => {
        return {
          ...prevState,
          clicked: PROPERTY.btnID.likeBtn,
          likeBtn: {
            counter: prevState.likeBtn.counter + 1,
            btnClass: cx('like-button', 'liked'),
          },
          dislikeBtn: {
            counter: prevState.dislikeBtn.counter - 1,
            btnClass: cx('dislike-button', ''),
          }
        }
      });
    }
  }

  handleClickDislikeBtn = () => {
    const { clicked } = this.state;
    if (!clicked) { // 1st click
      this.setState(prevState => {
        return {
          ...prevState,
          clicked: PROPERTY.btnID.dislikeBtn,
          dislikeBtn: {
            counter: prevState.dislikeBtn.counter + 1,
            btnClass: cx('dislike-button', 'disliked'),
          }
        }
      });
    } else if (clicked === PROPERTY.btnID.likeBtn) {  // click dislike after clicking like
      this.setState(prevState => {
        return {
          ...prevState,
          clicked: PROPERTY.btnID.dislikeBtn,
          likeBtn: {
            counter: prevState.likeBtn.counter - 1,
            btnClass: cx('like-button', ''),
          },
          dislikeBtn: {
            counter: prevState.dislikeBtn.counter + 1,
            btnClass: cx('dislike-button', 'disliked'),
          }
        }
      });
    } else if (clicked === PROPERTY.btnID.dislikeBtn) { // click dislike after clicking dislike
      this.setState(prevState => {
        return {
          ...prevState,
          clicked: PROPERTY.btnID.dislikeBtn,
          dislikeBtn: {
            counter: prevState.dislikeBtn.counter - 1,
            btnClass: cx('dislike-button', ''),
          }
        }
      });
    }
  }

  getSpanText = (text, number) => {
    return `${text} | ${number}`
  }
  
  render() {
    return (
      <>
        <div>
          <button id={PROPERTY.btnID.likeBtn} className={this.state.likeBtn.btnClass}
          onClick={this.handleClickLikeBtn}>
            <span className='likes-counter'>
              {this.getSpanText('Like', this.state.likeBtn.counter)}
            </span>
          </button>

          <button id={PROPERTY.btnID.dislikeBtn} className={this.state.dislikeBtn.btnClass}
          onClick={this.handleClickDislikeBtn}>
            <span className='dislikes-counter'>
              {this.getSpanText('Dislike', this.state.dislikeBtn.counter)}
            </span>
          </button>

        </div>
        <style>{`
                      .like-button, .dislike-button {
                          font-size: 1rem;
                          padding: 5px 10px;
                          color:   #585858;
                      }

                      .liked, .disliked {
                          font-weight: bold;
                          color: #1565c0;
                      }
                  `}</style>
      </>
    );
  }
};

export default App;
