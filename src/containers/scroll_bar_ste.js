import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
// import { selectBook } from '../actions/index';

class ScrollBarSte extends Component {
  constructor(props) {
      super(props);
      this.state = {
          thumbPosition: 0,
          isDragging: false,
      };
      this.offsetThumb = this.offsetThumb.bind(this)
      this.dragThumb = this.dragThumb.bind(this)
      this.generateTrackStyle = this.generateTrackStyle.bind(this)
      this.endDrag = this.endDrag.bind(this)
  }


  offsetThumb(e) {

    // console.log(trackClient);

    // takes the coordinates and length of Thumb and Track components
    let trackClient = this.refs.horizontalTrack.getBoundingClientRect()
    let thumbClient = this.refs.horizontalThumb.getBoundingClientRect()
    let trackLength = this.generateTrackStyle().width
    let thumbLength = this.generateThumbStyle().width
    // let trackLength = trackClient.right-trackClient.left
    // let thumbLength = thumbClient.right-thumbClient.left

    // console.log('this.state.thumbPosition');
    // console.log(this.state.thumbPosition);
    // console.log('trackClient');
    // console.log(trackClient);
    // console.log('thumbClient');
    // console.log(thumbClient);
    // console.log('trackLength');
    // console.log(trackLength);
    // console.log('thumbLength');
    // console.log(thumbLength);
    // console.log('e.clientX');
    // console.log(e.clientX);
    // if i click on the track the thumb centers under the mouse
    // let newPosition = e.clientX-(thumbLength/2) //centro la barra
    let newPosition = e.clientX - 16 - (thumbLength/2)
    // prevents Thumb to be positioned after the end of the Track
    if (e.clientX >= trackLength+trackClient.x-thumbLength-16)
      newPosition = trackLength+trackClient.x-thumbLength-16
    // prevents Thumb to be positioned before the beginning of the Track
    if (e.clientX <= trackClient.x+thumbLength-16)
      newPosition = trackClient.x-16
    this.setState({...this.state, thumbPosition: newPosition })

  }

  dragThumb(e) {
    e.stopPropagation();
    console.log('Thumb Premuto')
    this.setState({ ...this.state, isDragging : true })
    let positionCursor = e.clientX
    console.log(positionCursor);
    this.setState({ ...this.state, thumbPosition : e.clientX - (this.generateThumbStyle().width/2) })
  }
  endDrag(e) {
    e.stopPropagation()
    console.log('Drag Finito');
    this.setState({...this.state, isDragging: false})
  }

  generateTrackStyle() {
    let sharedStyle = {
      background: '#DEE3E4',
      borderRadius: '100px',
      cursor: 'pointer',
    }
    let horizontalStyle = {}
    let verticalStyle = {}
    if (this.props.direction == 'horizontal') {
      horizontalStyle = {
        width: this.props.length,
        height:'16px',
        position: 'fixed',
        bottom: '16px',
        left: '16px',
      }
    }
    if (this.props.direction == 'vertical') {
      verticalStyle = {
        width:'16px',
        height: this.props.length,
        position: 'fixed',
        bottom: '16px',
        right: '16px',
      }
    }
    let combinedStyles = {...sharedStyle, ...horizontalStyle, ...verticalStyle}
    // console.log(combinedStyles);
    // console.log(horizontalStyle);
    return (
      combinedStyles
    )
  }

  generateThumbStyle() {
    let sharedStyle = {
      background: '#282C34',
      borderRadius: '100px',
      position: 'absolute',
      cursor: this.state.isDragging ? '-webkit-grabbing' : '-webkit-grab',
    }
    let horizontalStyle = {}
    let verticalStyle = {}
    if (this.props.direction == 'horizontal') {
      horizontalStyle = {
        width: this.props.length/5,
        height:'16px',
        left: this.state.thumbPosition,
      }
    }
    if (this.props.direction == 'vertical') {
      verticalStyle = {
        width:'16px',
        height: this.props.length/5,
        top: this.state.thumbPosition,
      }
    }
    return(
      {...sharedStyle, ...horizontalStyle, ...verticalStyle}
    )
  }

  render() {
    // console.log(this.props);
    // console.log(this.refs.horizontalThumb.getBoundingClientRect());
    // console.log(this.refs.horizontalThumb.getBoundingClientRect());

    // console.log(thumbStyle.width);
    // console.log(trackStyle.width);
    console.log('this.state.isDragging');
    console.log(this.state.isDragging);
    return (
    <div
      ref={'horizontalTrack'}
      style={this.generateTrackStyle()}
      onMouseDown={this.offsetThumb}
      onTouchDown={this.offsetThumb}
      >
      <div
        ref={'horizontalThumb'}
        style = {this.generateThumbStyle()}
        onMouseDown={this.dragThumb}
        onMouseUp={this.endDrag}
      >
      </div>
    </div>
    )
  }
}

// Anything that comes out from this function ends up as props on the cardList container.
function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

function mapStateToProps(state) {
  return {
    state: state,
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(ScrollBarSte);
export default ScrollBarSte



// la barra deve essere draggabile
// se clicco sulla rotaia la barra arriva a quel punto on mouse down
//
// eventi
// onMouseEnter
// onMouseLeave
// onMouseDown
//
// render
// rotaia
// barra
// stato
// isDragging: true,//
//


ScrollBarSte.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  length: PropTypes.number,
}
