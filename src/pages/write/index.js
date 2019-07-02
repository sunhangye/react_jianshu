import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Write = (props) => {
  const { loginStatus } = props
  if (loginStatus) {
    return ( <div>Write</div> )
  } else {
    return ( <Redirect to="/login" /> )
  }
  
};

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})
export default connect(mapState, null)(Write);
