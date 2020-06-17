import React, { Component } from "react";
import T from "prop-types";
// import styled from 'styled-components'

// const Button = styled.button``

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  stateIncrement = (O_o) => this.setState((prev) => ({ [O_o]: prev[O_o] + 1 }));
  chechIfLiked = () => Object.values(this.state).reduce((acc, currentValue) => acc + currentValue);
  countPresentage = (state, total) => Math.round(([state] / total) * 100);
  render() {
    const total = this.chechIfLiked();
    const countPr = (state, total) => this.countPresentage(state, total);
    const { good, neutral,bad } = this.state;
    return (
      <div className="statisitcView">
        <button onClick={() => this.stateIncrement("good")}>Good</button>
        <button onClick={() => this.stateIncrement("neutral")}>neutral</button>
        <button onClick={() => this.stateIncrement("bad")}>bad</button>
        {total > 0 && (
            <div className="showStat">
              <span className="good">Good:<span>{good}</span>
                <span> Feedback % is:{countPr(good, total)}</span></span>
              <p className="neutral">Neutral:<span>{neutral}</span>
                <span> Feedback % is:{countPr(neutral, total)}</span></p>
              <p className="bad">Bad:<span>{bad}</span>
                <span>Feedback % is: {countPr(bad, total)}</span>
              </p>
              <p className="total">Total: <span>{total}</span></p>
            </div>
        )}
      </div>
    );
  }
}




//++++++++++++++++++++++++++++++++++++++++++++++++++++

// export class Feedback extends Component {
//   T = {};
//   // static defaultProps={}

//   // goodIncrement=()=>{
//   //   return
//   // }

//   // goodIncrement = () => this.props.goodIncrement(this.props.state.good);

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     ifLiked: false,
//   };
//   total = 0;
//   // state = {
//   //   good: this.props.state.good || 0,
//   //   neutral: this.props.state.neutral || 0,
//   //   bad: this.props.state.bad || 0,
//   // };
//   stateIncrement = (xxx) => this.setState((prev) => ({ [xxx]: prev[xxx] + 1 }));
// goodIncrement = () => this.setState((prev) => ({ good: prev.good + 1 }));
//   // neutralIncrement = () => this.setState((prev) => ({ neutral: prev.neutral + 1 }));
//   // badIncrement = () => this.setState((prev) => ({ bad: prev.bad + 1 }));

//   changeIfLiked = () => this.setState((prev) => ({ ifLiked: !prev.ifLiked }));

//   chechIfLiked = () =>
//     Object.values(this.state).reduce((acc, currentValue) => acc + currentValue);

//   render() {
//     const total = this.chechIfLiked();
//     const { good, neutral } = this.state;
//     return (
//       <div className="statisitcView">
//         {/* <p className="good">{this.props.state.good}</p>    // так прокидывать из App
//         <button onClick={this.props.goodIncrement}>Good</button> */}
//         {/* <button onClick={this.props.goodIncrement(this.state.good)}>Good</button> */}
//         {/* <button onClick={this.goodIncrement('good')}>Good</button> */}
//         {/* if ( (good || neutral || bad) > 0 && console.log(222)) */}
//         <button onClick={() => this.stateIncrement("good")}>Good</button>
//         <button onClick={() => this.stateIncrement("neutral")}>neutral</button>
//         <button onClick={() => this.stateIncrement("bad")}>bad</button>
//         {total > 0 && (
//           <>
//             <p className="good">{good}</p>
//             <p className="neutral">{neutral}</p>
//             <p className="bad">{this.state.bad}</p>
//             <div className="presenfage">
//               <p className="show">presenfage show</p>
//             </div>
//           </>
//         )}
//       </div>
//     );
//   }
// }
