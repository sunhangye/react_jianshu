import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class Detail extends Component {
  render() {
    return (
      <div>
        detail
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Detail);