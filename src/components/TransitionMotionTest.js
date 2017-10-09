import createReactClass from 'create-react-class';
import {TransitionMotion, Motion, spring} from 'react-motion'

const Demo = createReactClass({
  getInitialState() {
    console.log('getInitialState');
    return {
      mounted: true
    }
  },
  componentDidMount() {
    console.log('componentDidMount');
  },
  componentWillUnmount() {
    // this.setState({
    console.log('componentWillUnmount');
    this.setState(
      mounted: false
    )
    //   items: [{key: 'a', size: spring(0)}, {key: 'b', size: spring(0)},], // remove c.
    // });
  },


  render() {
    const box = {
      background: '#FD675F',
    }
    const motionStyle = {
      width: this.componentWillUnmount() ? spring(0) : spring(200),
      height: this.componentWillUnmount() ? spring(0) : spring(200),
    }
    console.log(this.state);
    return (
      <Motion style={motionStyle}>
        {(interpolatedStyle) => {
          console.log(interpolatedStyle);
          return(
              <div style={Object.assign( {}, box, {
                width: `${interpolatedStyle.width}px`,
                height: `${interpolatedStyle.height}px`,
              })}></div>
          )
        }}
      </Motion>
    );
  },
});

export default Demo





// <TransitionMotion
// willLeave={this.willLeave}
// styles={this.state.items.map(item => ({
//   key: item.key,
//   style: {width: item.size, height: item.size},
// }))}>
// {interpolatedStyles =>
//   // first render: a, b, c. Second: still a, b, c! Only last one's a, b.
//   <div>
//   {interpolatedStyles.map(config => {
//     // console.log(config);
//     return <div key={config.key} style={{...config.style, border: '1px solid'}} />
//   })}
//   </div>
// }
// </TransitionMotion>
