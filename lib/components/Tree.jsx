import React, { Component } from 'react';

class Tree extends Component {

  render() {

    return (
      <div>
        <input placeholder="First Name" ref={(c) => { this.firstName = c; }} />
        <input placeholder="Last Name" ref={(c) => { this.lastName = c; }} />
        <input placeholder="Gender" ref={(c) => { this.gender = c; }} />
        <input placeholder="Maiden" ref={(c) => { this.maiden = c; }} />
        <input placeholder="Mother (First and Last)" ref={(c) => { this.mother = c; }} />
        <input placeholder="Father (First and Last)" ref={(c) => { this.father = c; }} />
        <input placeholder="Stepmother 1 (First and Last)" ref={(c) => { this.stepMother1 = c; }} />
        <input placeholder="Stepmother 2 (First and Last)" ref={(c) => { this.stepMother2 = c; }} />
        <input placeholder="Stepfather1 (First and Last)" ref={(c) => { this.stepFather1 = c; }} />
        <input placeholder="Stepfather 2 (First and Last)" ref={(c) => { this.stepFather2 = c; }} />
        <input placeholder="Oldest Child (First and Last)" ref={(c) => { this.childOldest = c; }} />
        <input placeholder="Second Oldest Child (First and Last)" ref={(c) => { this.childSecondOldest = c; }} />
        <input placeholder="Third Oldest Child (First and Last)" ref={(c) => { this.childThirdOldest = c; }} />
        <input placeholder="Fourth Oldest Child (First and Last)" ref={(c) => { this.childFourthOldest = c; }} />
        <input placeholder="Fifth Oldest Child (First and Last)" ref={(c) => { this.childFifthOldest = c; }} />
        <input placeholder="Sixth Oldest Child (First and Last)" ref={(c) => { this.childSixthOldest = c; }} />
        <input placeholder="Other Child (First and Last)" ref={(c) => { this.childOther = c; }} />
        <input placeholder="Spouse 1 (First and Last)" ref={(c) => { this.spouse1 = c; }} />
        <input placeholder="Spouse 2 (First and Last)" ref={(c) => { this.spouse2 = c; }} />
        <input placeholder="Spouse 3 (First and Last)" ref={(c) => { this.spouse3 = c; }} />
        <input placeholder="Other Spouse (First and Last)" ref={(c) => { this.spouseOther = c; }} />
        <button onClick={ () => { this.addNewPerson() } }>Submit</button>
      </div>
    );
  }

}


export default Tree;
