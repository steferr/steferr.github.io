import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {WORD, PARAGRAPH, NUMBER, PRICE, TIME, TICK, PERCENTAGE, GREY_MEDIUM} from '../utilities/constants'
import Tooltip from '../components/Tooltip'

class CardItemDetail extends Component {
  constructor(props) {
    super(props)
    this.getTooltipContent = this.getTooltipContent.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.getContent = this.getContent.bind(this)
    this.state = {
      isTooltipVisible: false
    }
  }
  handleMouseEnter() {
    // console.log('enter');
    // console.log(this.getTooltipContent());
    if (this.getTooltipContent() != '')
    this.setState({
      isTooltipVisible: true
    })
  }
  handleMouseLeave() {
    // console.log('leave');
    this.setState({
      isTooltipVisible: false
    })
  }
  getTooltipContent() {
    var contenuto = this.props.content
    if (typeof contenuto === 'string') {
      if (contenuto.substring(contenuto.length-1, contenuto.length) === '*') {
        return 'value calculated based on available datas'
      }
      else return ''
    }
    else return ''
  }
  getContent() {
    if (this.props.content === '')
      return 'not specified'
    else return this.props.content
  }
  render() {
    // console.log(`${this.props.width}px`);
    const contentStyle = {
      fontSize: '13px',
      // width: `${this.props.width-32}px`,
      // border: '1px solid red',
    }
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0px 0px 0px 0px',
      textAlign: 'center',
      width: this.props.width,
      borderRight: `1px solid ${GREY_MEDIUM}`,
      // overflow: 'hidden',
    }

    if (this.props.hiddenColumns.includes(this.props.columnID))
      return <div></div>
    else {
    return (
        <div
          style={Object.assign(containerStyle, this.props.style)}
        >
          <div
            style={Object.assign(contentStyle, this.props.style)}
            onMouseEnter = { ()=> this.handleMouseEnter() }
            onMouseLeave = { ()=> this.handleMouseLeave() }
          >
            {this.getContent()}
            <Tooltip isVisible={this.state.isTooltipVisible} content={this.getTooltipContent()} />
          </div>

        </div>

    )}
  }
}

function mapStateToProps(state) {
  return {
    hiddenColumns: state.hiddenColumns
  }
}

export default connect(mapStateToProps)(CardItemDetail);

CardItemDetail.propTypes = {
  cellClass: PropTypes.string,
  contentType: PropTypes.oneOf([WORD, PARAGRAPH, NUMBER, PRICE, TIME, TICK, PERCENTAGE]).isRequired,
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  visible: PropTypes.bool,
  style: PropTypes.object,
  width: PropTypes.string.isRequired,
  // active: PropTypes.bool
};
