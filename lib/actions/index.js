export const addPerson = (firstName, lastName, mother, father) => {
  return {
    type: 'ADD_PERSON',
    firstName,
    lastName,
    mother,
    father,
  }
}
