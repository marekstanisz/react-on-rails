// class OneTimeClickLink extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = { clickCount: 0 };
//     this.linkClicked = this.linkClicked.bind(this);
//   }
//
//   linkClicked(event) {
//     event.preventDefault();
//     this.setState({ clickCount: this.state.clickCount + 1 })
//   }
//
//   render() {
//     return (<div id="one-time-click-link">
//       <p>
//         <a href="javascript:void(0)" onClick={this.linkClicked}>
//           Click me
//         </a>
//       </p>
//       <p>
//         <span>You clicked the link {this.state.clickCount} times</span>
//       </p>
//     </div>);
//   }
// }
// $(()=>{
//   const oneTimeClickLink = React.createFactory(OneTimeClickLink);
//
//   ReactDOM.render(
//     oneTimeClickLink(),
//     document.getElementById('start')
//   );
// });
