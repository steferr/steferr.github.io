import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sortBy } from '../actions/index'
import HideColumn from './HideColumn'
import SortIcon from '../components/SortIcon'
import { GREY_MEDIUM } from '../utilities/constants'

const SortBarItem4 = (props) => {
  if (props.hiddenColumns.includes(props.columnID))
    return <div></div>
  else {
  return (
    <div style={{display: 'flex', flexDirection: 'column', width: props.width, userSelect: 'none', borderRight: `1px solid ${GREY_MEDIUM}`
}}>
      <div style = {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <div>
          {props.groupTitle}
        </div>
        <div style={children}>
          <HideColumn contentType={props.contentType} label={'hide'}/>
        </div>
      </div>

      <div style = {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <div
          style={Object.assign({cursor: 'pointer'}, props.style, children)}
          onClick={() => {
            props.sortBy(props.columnID1, props.contentType1)
          }}
          >
          {props.title1}
          </div>

          <SortIcon {...props}></SortIcon>
        </div>

        <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <div
          style={Object.assign({cursor: 'pointer'}, props.style, children)}
          onClick={() => {
            props.sortBy(props.columnID2, props.contentType2)
          }}
          >
          {props.title2}
          </div>

          <SortIcon {...props}></SortIcon>

        </div>
        <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <div
          style={Object.assign({cursor: 'pointer'}, props.style, children)}
          onClick={() => {
            props.sortBy(props.columnID3, props.contentType3)
          }}
          >
          {props.title3}
          </div>

          <SortIcon {...props}></SortIcon>

        </div>

        <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <div
          style={Object.assign({cursor: 'pointer'}, props.style, children)}
          onClick={() => {
            props.sortBy(props.columnID4, props.contentType4)
          }}
          >
          {props.title4}
          </div>

          <SortIcon {...props}></SortIcon>

        </div>

        <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <div
          style={Object.assign({cursor: 'pointer'}, props.style, children)}
          onClick={() => {
            props.sortBy(props.columnID5, props.contentType5)
          }}
          >
          {props.title5}
          </div>

          <SortIcon {...props}></SortIcon>

        </div>
      </div>


    </div>
  )}

}
// export default SortBarItem

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    sortBy : sortBy,
  }, dispatch)
}

function mapStateToProps(state) {
  return {
    hiddenColumns: state.hiddenColumns,
    sortedBy: state.sortedBy,
    isDescendant: state.isDescendant
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SortBarItem4)

const children = {
  alignSelf: 'center',
}


SortBarItem4.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  title4: PropTypes.string.isRequired,
  title5: PropTypes.string.isRequired,
  columnID1: PropTypes.string.isRequired,
  columnID2: PropTypes.string.isRequired,
  columnID3: PropTypes.string.isRequired,
  columnID4: PropTypes.string.isRequired,
  columnID5: PropTypes.string.isRequired,
  contentType1: PropTypes.string.isRequired,
  contentType2: PropTypes.string.isRequired,
  contentType3: PropTypes.string.isRequired,
  contentType4: PropTypes.string.isRequired,
  contentType5: PropTypes.string.isRequired,
  status: PropTypes.string,
  style: PropTypes.object,

};
