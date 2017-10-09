import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideColumn } from '../actions/index';
import PropTypes from 'prop-types';
import { PRIMARY } from '../utilities/constants'

class HideColumn extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div onClick={() => this.props.hideColumn(this.props.columnID)} style={normal}>
        {this.props.label}
      </div>
    )
  }
}

const hidden = {
  borderRadius: '100px',
  border: 'none',
  padding: '4px 20px',
  display: 'block',
  outline: 'none',
}

const normal = {
  // borderRadius: '100px',
  border: 'none',
  padding: '1px 4px',
  fontSize: '12px',
  textTransform: 'uppercase',
  fontWeight: '500',
  letterSpacing: '1px',
  color: PRIMARY,
  outline: 'none',
  cursor: 'pointer',
  // backgroundColor: '#e5e5e5',
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({hideColumn: hideColumn }, dispatch)
}

function mapStateToProps(state) {
  return {
    state: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HideColumn);

HideColumn.propTypes = {
  columnID: PropTypes.string,
  label: PropTypes.string,
  // active: PropTypes.bool
};
