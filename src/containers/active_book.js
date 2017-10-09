import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.libroSelezionato)
      return (<div className = "card" style={cardStyle}><h3>Select a book to get started</h3></div>)
    return (<div className = "card" style={cardStyle}>
      <h4>Details for: </h4>
      <h2>{this.props.libroSelezionato.title}</h2>
      <h6>Number of pages</h6>
      <p>{this.props.libroSelezionato.pages}</p>
      </div>
    )
  }
}
const cardStyle = {
  width: '100%',
  height: '80px',
  padding: '30px'
}
function mapStateToProps(stato) {
  return {
    libroSelezionato: stato.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
