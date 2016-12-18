const people = (state = [], action) => {
  switch(action.type){
    case 'ADD_PERSON':
      return state.concat(action.person);
    default:
      return state;
  }

}

export default people;
