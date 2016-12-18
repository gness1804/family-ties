const people = (state = [], action) => {
  switch(action.type){
    case 'ADD_PERSON':
      return state.concat({});
    case 'OTHER_NAME':
      return ///stuff for new state
    default:
      return state;
  }

}
