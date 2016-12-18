import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tree from '../components/Tree';

import addPerson from '../actions/index';

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addPerson: (id) => {
      dispatch(addPerson(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tree)
