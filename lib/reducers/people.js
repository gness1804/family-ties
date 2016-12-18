const people = (state = [], action) => {
  // console.log('hit reducer');
  switch(action.type){
    case 'ADD_PERSON':
    // console.log('hit add person');
      return state.concat({firstName: action.firstName, lastName: action.lastName, mother: action.mother, father: action.father});
    default:
      return state;
  }

}

export default people;
