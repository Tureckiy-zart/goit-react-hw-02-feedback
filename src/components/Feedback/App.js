import React, { Component } from "react";
// import sytles from "./Feedback.module.css";
import { Feedback } from "./Feedback";

// const {} = sytles;

export const App = () => (
  <div>
    <h2>Feedback</h2>
    <Feedback />
  </div>
);
















//+++++++++++++++++++++++++++++++++++
// export class App extends Component {
//   // state = {
//   //   good: 0,
//   //   neutral: 0,
//   //   bad: 0,
//   // };
//   // goodIncrement = () => this.setState((prev) => ({ good: prev.good + 1 }))
//   render() {

//     // console.log(this)
//     return (
//       <div>
//         {/* <p>{this}</p> */}
//         <h2>Feedback</h2>
//         {/* <Feedback state={this.state} goodIncrement={this.goodIncrement} /> */}
//         <Feedback />
//       </div>
//     );
//   }
// }
