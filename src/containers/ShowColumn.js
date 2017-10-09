import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showColumn } from '../actions/index'
import PropTypes from 'prop-types';

class ShowColumn extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    // console.log(this.props.showColumn);
//
    return(
      <div>
        <button onClick={() => this.props.showColumn(this.props.showColumn(this.props.columnID))} style={normal}>
          {this.props.label}
        </button>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({showColumn: showColumn }, dispatch)
}

function mapStateToProps(state) {
  return {
    state: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowColumn);

ShowColumn.propTypes = {
  columnID: PropTypes.string,
  label: PropTypes.string,
  // active: PropTypes.bool
};

const normal = {
  borderRadius: '100px',
  border: 'none',
  padding: '1px 4px',
  fontSize: '12px',
  color: 'grey',
  outline: 'none',
  backgroundColor: '#e5e5e5',
  cursor: 'pointer',
}
